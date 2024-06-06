import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const UserNavbar = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut();
    toast("You have logged out. See you soon!");
    navigate("/login");
  };
  return (
    <div className="md:hidden bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <Link to={"/dashboard/user"} className="text-2xl font-bold">
          User Dashboard
        </Link>
        <button
          onClick={() =>
            document.getElementById("user-menu").classList.toggle("hidden")
          }
          className="text-xl focus:outline-none"
        >
          ☰
        </button>
      </div>
      <nav id="user-menu" className="mt-4 hidden">
        <ul>
          <li className="mt-2">
            <Link to="/dashboard/user/profile" className="hover:text-gray-400">
              Profile
            </Link>
          </li>
          <li className="mt-2">
            <Link
              to="/dashboard/user/update-profile"
              className="hover:text-gray-400"
            >
              Update Profile
            </Link>
          </li>
          <li className="mt-2">
            <Link
              to="/dashboard/user/order-history"
              className="hover:text-gray-400"
            >
              Order History
            </Link>
          </li>
          <li className="mt-2">
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li className="mt-2">
            <button onClick={handleLogout} className="hover:text-gray-400">
              Logout
            </button>
          </li>
          {/* Add other user links here */}
        </ul>
      </nav>
    </div>
  );
};

export default UserNavbar;
