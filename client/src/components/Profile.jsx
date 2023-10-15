import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { clientActions } from "../store/index";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const client = useSelector(state => state.client.value);
  const logoutHandler = async () => {
    await axios.post("/logout");
    dispatch(clientActions.setClient(null));
    navigate("/");
  };
  return (
    <div className='text-center max-w-sm mx-auto'>
      Logged in as {client.name} {client.email} <br />
      <button
        onClick={logoutHandler}
        className='bg-primary rounded-full  py-1 text-white w-full mt-4'
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
