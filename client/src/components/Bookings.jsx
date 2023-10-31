import AccountNav from "./AccountNav";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { placesActions } from "../store/index";
import { Link } from "react-router-dom";

const Bookings = () => {
  const dispatch = useDispatch();
  const places = useSelector(state => state.places.data);
  useEffect(() => {
    axios.get("/bookings").then(res => {
      dispatch(placesActions.setPlaces(res.data));
    });
  }, []);
  return (
    <>
      <AccountNav />
      My Bookings
      {places.length > 0 &&
        places.map(place => (
          <Link
            to={"/place/" + place._id}
            className='flex gap-4 mt-4 bg-gray-200 p-4 rounded-2xl cursor-pointer'
            key={place._id}
          >
            <div className='flex w-32 h-32 bg-gray-300  grow shrink-0'>
              {place.photos.length > 0 && (
                <img
                  className='object-cover'
                  src={"http://localhost:4000/uploads/" + place.photos[0]}
                />
              )}
            </div>
            <div className='shrink grow-0'>
              <h2 className='text-xl '>{place.title}</h2>
              <p className='text-sm mt-2'>{place.description}</p>
            </div>
          </Link>
        ))}
    </>
  );
};

export default Bookings;
