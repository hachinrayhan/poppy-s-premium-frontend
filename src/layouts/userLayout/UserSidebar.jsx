import { Link } from "react-router-dom";

const UserSidebar = () => {
  return (
    <div className="bg-blue-600 text-white w-64 space-y-6 py-7 px-2 hidden lg:block">
      <div className="text-center text-2xl font-bold">
        <Link to="/dashboard/user">User Panel</Link>
      </div>
      <nav>
        <Link
          to="/dashboard/user/profile"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700"
        >
          Profile
        </Link>
        <Link
          to="/dashboard/user/update-profile"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700"
        >
          Update Profile
        </Link>
        <Link
          to="/dashboard/user/orders"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700"
        >
          Order History
        </Link>
      </nav>
    </div>
  );
};

export default UserSidebar;
