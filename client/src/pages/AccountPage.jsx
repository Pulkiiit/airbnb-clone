import { useSelector } from "react-redux";
import { Navigate, Link, useParams } from "react-router-dom";
const AccountPage = () => {
  const client = useSelector(state => state.client.value);
  const ready = useSelector(state => state.client.ready);
  const { subpage } = useParams();
  if (!ready) {
    return "Loading...";
  }
  if (ready && !client) {
    return <Navigate to={"/login"} />;
  }
  console.log(subpage);

  const activeLink = (link = undefined) => {
    if (link === subpage) {
      return "px-3 py-2 bg-primary text-white rounded-full ";
    } else {
      return "px-3 py-2";
    }
  };
  return (
    <div>
      <nav className='w-full flex justify-center mt-8 gap-4'>
        <Link className={activeLink()} to='/account'>
          My Account
        </Link>
        <Link className={activeLink("bookings")} to='/account/bookings'>
          My Bookings
        </Link>
        <Link
          className={activeLink("accomodations")}
          to='/account/accomodations'
        >
          My Accomodations
        </Link>
      </nav>
      {subpage === undefined && (
        <div className='text-center'>
          Logged in as {client.name} {client.email}
        </div>
      )}
    </div>
  );
};

export default AccountPage;
