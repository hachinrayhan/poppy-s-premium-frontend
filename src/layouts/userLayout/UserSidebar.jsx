import { Link } from "react-router-dom";

const UserSidebar = () => {
  return (
    <div className="hidden md:block w-64 h-full bg-gray-800 text-white">
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
              <button onClick={""} className="hover:text-gray-400">
                Logout
              </button>
            </li>
            {/* Add other user links here */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default UserSidebar;
