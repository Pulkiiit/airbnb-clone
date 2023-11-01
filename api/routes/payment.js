const express = require("express");
const Razorpay = require("razorpay");
const router = express.Router();
const crypto = require("crypto");
const Booking = require("../models/Booking");
const Place = require("../models/Place");
const { builtinModules } = require("module");

let transactionCounter = 0;
const secret_key = process.env.SECRET_KEY;

function generateUniqueReceiptNumber() {
  const now = new Date();
  const dateTimeString = now.toISOString().replace(/[^0-9]/g, "");
  transactionCounter++;
  const uniqueReceiptNumber = `${dateTimeString}-${transactionCounter}`;
  return uniqueReceiptNumber;
}

const receiptNumber = generateUniqueReceiptNumber();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

module.exports = router;
