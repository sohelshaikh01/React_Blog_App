import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth.js";
import { logout } from "../../store/authSlice.js";
// Here AuthService may problem

const LogoutBtn = () => {
 
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    })
  }

  return (
    <button className="inline-block px-6 duration-200 hover:bg-blue-100 rounded-full py-2" onClick={logoutHandler}> Logout </button>
  )

}

export default LogoutBtn;
