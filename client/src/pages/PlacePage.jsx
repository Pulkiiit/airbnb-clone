import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { placesActions } from "../store/index";
import BookingBox from "../components/BookingBox";
const PlacePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [showPhotos, setShowPhotos] = useState(false);
  const [bookingBox, setBookingBox] = useState(true);
  const place = useSelector(state => state.places.data);
  const maxGuests = place.maxGuests;
  const { _id } = useSelector(state => state.client.value);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then(res => {
      dispatch(placesActions.setPlaces(res.data.place));
      if (_id === res.data.client && id === res.data.place) {
        console.log(_id, res.data.client, "  ", id, res.data.place);
        setBookingBox(false);
      }
    });
  }, [id, _id]);

  if (showPhotos) {
    return (
      <div className='absolute bg-black text-white inset-0 min-h-screen'>
        <div className='bg-black p-8 grid gap-4'>
          <div>
            <h2 className='text-3xl mr-36'>Photos of {place.title}</h2>
            <button
              onClick={() => setShowPhotos(false)}
              className='fixed right-12 top-8 flex gap-1 py-2 px-4 rounded-2xl shadow-black shadow bg-white text-black'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
              Close
            </button>
          </div>
          {place?.photos?.length > 0 &&
            place.photos.map(photo => (
              <div key={photo}>
                <img src={`http://localhost:4000/uploads/${photo}`} />
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className='mt-5 bg-gray-100 -mx-8 px-8 pt-8'>
        <h1 className='text-2xl'>{place.title}</h1>
        <a
          href={"https://maps.google.com/?q=" + place.address}
          target='_blank'
          rel='noreferrer noopener'
          className='flex gap-1 my-3 font-semibold underline'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
            />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
            />
          </svg>

          {place.address}
        </a>
        <div className='relative'>
          <div className='grid gap-2 grid-cols-[2fr_1fr]  rounded-2xl overflow-hidden'>
            <div>
              {place.photos?.[0] && (
                <div>
                  <img
                    onClick={() => {
                      setShowPhotos(true);
                    }}
                    className='aspect-square object-cover cursor-pointer '
                    src={`http://localhost:4000/uploads/${place.photos[0]}`}
                  />
                </div>
              )}
            </div>
            <div className='grid'>
              {place.photos?.[1] && (
                <img
                  onClick={() => {
                    setShowPhotos(true);
                  }}
                  className='aspect-square object-cover cursor-pointer '
                  src={`http://localhost:4000/uploads/${place.photos[1]}`}
                />
              )}
              {place.photos?.[2] && (
                <div className='overflow-hidden'>
                  <img
                    onClick={() => {
                      setShowPhotos(true);
                    }}
                    className='aspect-square object-cover  cursor-pointer relative top-2'
                    src={`http://localhost:4000/uploads/${place.photos[2]}`}
                  />
                </div>
              )}
            </div>
          </div>
          <button
            onClick={() => setShowPhotos(true)}
            className='flex gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow-md shadow-gray-500'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5'
            >
              <path
                fillRule='evenodd'
                d='M1 5.25A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25v9.5A2.25 2.25 0 0116.75 17H3.25A2.25 2.25 0 011 14.75v-9.5zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-2.69l-2.22-2.219a.75.75 0 00-1.06 0l-1.91 1.909.47.47a.75.75 0 11-1.06 1.06L6.53 8.091a.75.75 0 00-1.06 0l-2.97 2.97zM12 7a1 1 0 11-2 0 1 1 0 012 0z'
                clipRule='evenodd'
              />
            </svg>
            Show photos
          </button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr] mt-8 gap-8 max-h-screen mb-8'>
          <div>
            <div className='my-6 '>
              <h2 className='font-semibold text-2xl'>Description</h2>
              {place.description}
            </div>
            Check-in time: {place.checkIn} <br />
            Check-out time: {place.checkOut} <br />
            Max guests: {maxGuests}
          </div>
          <div>
            {bookingBox && (
              <BookingBox place={place} id={id} maxGuests={maxGuests} />
            )}
          </div>
        </div>
        <div className='bg-white -mx-8 px-8 py-8 border-t'>
          <div>
            <h2 className='font-semibold text-2xl'>Extra Info</h2>
          </div>
          <div className='text-sm text-gray-700 leading-5 mt-2'>
            {place.extraInfo}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlacePage;
