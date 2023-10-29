const express = require("express");
const razor = require("razorpay");
const router = express.Router();
const crypto = require("crypto");
const Booking = require("../models/Booking");
const Place = require("../models/Place");

let transactionCounter = 0;

function generateUniqueReceiptNumber() {
  const now = new Date();
  const dateTimeString = now.toISOString().replace(/[^0-9]/g, "");
  transactionCounter++;
  const uniqueReceiptNumber = `${dateTimeString}-${transactionCounter}`;
  return uniqueReceiptNumber;
}

const receiptNumber = generateUniqueReceiptNumber();

router.post("/payment", async (req, res) => {
  try {
    const instance = new razor({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });
    const options = {
      amount: req.body.price * req.body.days * 100,
      currency: "INR",
      receipt: receiptNumber,
    };
    const order = await instance.orders.create(options);
    if (!order) return res.status(500).send("Some error occured");
    res.json(order);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/success", async (req, res) => {
  try {
    const {
      orderCreationId,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
      client,
      place,
      guests,
    } = req.body;

    const shasum = crypto.createHmac("sha256", "w2lBtgmeuDUfnJVp43UpcaiT");

    shasum.update(`${orderCreationId}|${razorpayPaymentId}`);

    const digest = shasum.digest("hex");
    if (digest !== razorpaySignature)
      return res.status(400).json({ msg: "Transaction not legit!" });

    //create booking model
    const createdBooking = await Booking.create({ place, client, guests });
    res.json({
      msg: "success",
      orderId: razorpayOrderId,
      paymentId: razorpayPaymentId,
    });
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
