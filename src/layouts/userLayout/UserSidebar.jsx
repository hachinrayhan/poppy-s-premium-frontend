import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const UserSidebar = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut();
    toast.success("You have logged out. See you soon!");
    navigate("/");
  };

  return (
    <div className="hidden md:block w-64 h-full bg-gray-800 text-white fixed">
      <div className="p-4">
        <Link to={"/dashboard/user"} className="text-2xl font-bold">
          User Dashboard
        </Link>
        <nav className="mt-4">
          <ul>
            <li className="mt-2">
              <Link
                to="/dashboard/user/profile"
                className="hover:text-gray-400"
              >
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
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default UserSidebar;
