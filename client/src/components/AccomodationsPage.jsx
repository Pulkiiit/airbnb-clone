import { Link } from "react-router-dom";
import AccountNav from "./AccountNav";
import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { placesActions } from "../store/index";
const AccomodationsPage = () => {
  const dispatch = useDispatch();
  const places = useSelector(state => state.places.data);
  useEffect(() => {
    const getPlaces = async () => {
      const data = await axios.get("/places");
      dispatch(placesActions.setPlaces(data.data));
    };
    getPlaces();
    return () => {
      dispatch(placesActions.removePlaces());
    };
  }, []);

  return (
    <div>
      <AccountNav />
      <div className='text-center'>
        <Link
          className='bg-primary text-white px-4 py-2 rounded-full '
          to={"/account/accomodations/new"}
        >
          Add a new place
        </Link>
      </div>
      <div className='mt-4'>
        {places.length > 0 &&
          places.map(place => (
            <Link
              to={"/account/accomodations/" + place._id}
              className='flex gap-4 mt-4 bg-gray-200 p-4 rounded-2xl cursor-pointer'
              key={place._id}
            >
              <div className='flex w-32 h-32 bg-gray-300'>
                {place.photos.length > 0 && (
                  <img
                    className='object-cover'
                    src={"http://localhost:4000/uploads/" + place.photos[0]}
                  />
                )}
              </div>
              <div className=''>
                <h2 className='text-xl '>{place.title}</h2>
                <p className='text-sm mt-2'>{place.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default AccomodationsPage;
