/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
const BookingBox = ({ place, id, maxGuests }) => {
  const [disable, setdisable] = useState(true);
  const guests = useRef(null);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [days, setDays] = useState(0);
  const navigate = useNavigate();

  const calculateDays = () => {
    const start = new Date(from);
    const end = new Date(to);
    if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
      const timeDifference = Math.abs(end - start);
      const numberOfDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      return numberOfDays;
    }
    return 0;
  };

  useEffect(() => {
    setDays(calculateDays());
  }, [from, to]);

  const bookingHandler = async () => {
    await axios.post("/booking-update", {
      place: place._id,
      client: id,
      guests: guests.current.value,
      days,
      from,
      to,
    });
    navigate("/account/bookings");
  };

  const guestHandler = () => {
    if (!guests.current.value) {
      setdisable(true);
      return;
    }

    if (guests.current.value > maxGuests) {
      setdisable(true);
    } else {
      setdisable(false);
    }
  };
  return (
    <>
      <div className='bg-white rounded-2xl p-4 shadow-md'>
        <div className='text-xl text-center'>
          Price: &#8377; {place.price} / per night
        </div>
        <div className='border rounded-2xl mt-4'>
          <div className='flex'>
            <div className='px-3 py-4 '>
              <label>Check in</label>
              <input
                type='date'
                value={from}
                onChange={e => setFrom(e.target.value)}
              />
            </div>
            <div className='px-3 py-4 border-l'>
              <label>Check out</label>
              <input
                type='date'
                value={to}
                onChange={e => setTo(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div className='px-3 py-4'>
              <label>No of guests</label>
              <input type='number' ref={guests} onChange={guestHandler} />
            </div>
          </div>
        </div>
        <button
          disabled={disable}
          onClick={() => {
            bookingHandler();
          }}
          className='bg-primary w-full rounded-full px-2 py-2 text-white mt-4 disabled:bg-gray-500'
        >
          Book this place
        </button>
      </div>
    </>
  );
};

export default BookingBox;
