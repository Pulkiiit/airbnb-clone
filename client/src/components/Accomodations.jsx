import { Link, useParams } from "react-router-dom";
const Accomodations = () => {
  const { action } = useParams();
  return (
    <div>
      {action !== "new" && (
        <div className='text-center'>
          <Link
            className='bg-primary text-white px-4 py-2 rounded-full '
            to={"/account/accomodations/new"}
          >
            Add a new place
          </Link>
        </div>
      )}
      {action === "new" && (
        <div>
          <form>
            <h2 className='text-2xl mt-3'>Title</h2>
            <input type='text' placeholder='title , for ex-> My Apartment' />
            <h2 className='text-2xl mt-3'>Address</h2>
            <input type='text' placeholder='address' />
            <h2 className='text-2xl mt-3'>Photos</h2>
            <div className='flex gap-1.5'>
              <input type='text' placeholder='Link for photo' />
              <button className='bg-gray-200 px-4 m-1.5 rounded-2xl'>
                Add&nbsp;Photo
              </button>
            </div>
            <div className='grid grid-cols-3 lg:grid-cols-6 md:grid-cols-4 mt-2 '>
              <button className='flex justify-center gap-2 border rounded-2xl p-8 bg-transparent border-gray-300 text-2xl'>
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
                    d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5'
                  />
                </svg>
                Upload
              </button>
            </div>
            <div>
              <h2 className='text-2xl mt-3'>Description</h2>
              <textarea />
              <h2 className='text-2xl mt-3'>Perks</h2>
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-2'>
                <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer border-transparent'>
                  <input type='checkbox' />
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
                      d='M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z'
                    />
                  </svg>

                  <span>Wifi</span>
                </label>
                <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer border-transparent'>
                  <input type='checkbox' />
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
                      d='M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12'
                    />
                  </svg>

                  <span>Free parking on premises</span>
                </label>
                <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer border-transparent'>
                  <input type='checkbox' />
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
                      d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
                    />
                  </svg>

                  <span>Private entrance</span>
                </label>
                <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer border-transparent'>
                  <input type='checkbox' />
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
                      d='M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z'
                    />
                  </svg>

                  <span>Kitchen</span>
                </label>
                <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer border-transparent'>
                  <input type='checkbox' />
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
                      d='M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z'
                    />
                  </svg>

                  <span>TV</span>
                </label>
                <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer border-transparent'>
                  <input type='checkbox' />
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
                      d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                    />
                  </svg>

                  <span>Pets Allowed</span>
                </label>
                <label className='border p-4 flex rounded-2xl gap-2 items-center cursor-pointer border-transparent'>
                  <input type='checkbox' />
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
                      d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                    />
                  </svg>

                  <span>Power backup</span>
                </label>
              </div>
            </div>
            <h2 className='text-2xl mt-3'>Extra info</h2>
            <textarea />
            <h2 className='text-2xl mt-3'>Check in and out time</h2>
            <div className='grid gap-2 sm:grid-cols-3 '>
              <div>
                <h3 className='mt-2 -mb-1'>Check in time</h3>
                <input type='text' placeholder='11:00' />
              </div>
              <div>
                <h3 className='mt-2 -mb-1'>Check out time</h3>
                <input type='text' placeholder='22:00' />
              </div>
              <div>
                <h3 className='mt-2 -mb-1'>Max no. of guests</h3>
                <input type='text' placeholder='3' />
              </div>
            </div>
            <button className='bg-primary w-full rounded-full px-2 py-2 text-white mt-4'>
              Save
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Accomodations;
