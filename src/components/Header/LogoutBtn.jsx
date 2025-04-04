import { useDispatch } from "react-redux";
import authService from "../../services/adminAuth";
import { logout } from "../../store/adminAuthSlice";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button className="nav-link" onClick={logoutHandler}>
      Logout
    </button>
  );
}

export default LogoutBtn;
