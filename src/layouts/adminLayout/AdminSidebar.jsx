import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useSearchOrders from "../../hooks/useSearchOrders";
import SearchOrdersResults from "../../components/SearchOrdersResults";

const AdminSidebar = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const { searchKey, searchResults, handleSearch } = useSearchOrders();

  const handleLogout = () => {
    logOut();
    toast.success("You have logged out. See you soon!");
    navigate("/");
  };

  return (
    <div className="hidden md:block w-64 h-full bg-gray-800 text-white fixed">
      <div className="p-4">
        <Link to={"/dashboard/admin"} className="text-2xl font-bold">
          Admin Dashboard
        </Link>
        <input
          type="text"
          onChange={handleSearch}
          className="grow input input-bordered input-sm mt-4 text-black w-48"
          placeholder="Search Order by Order ID, Customer Email or Mobile"
        />
        <nav className="mt-4">
          <ul>
            <li className="mt-2">
              <Link
                to="/dashboard/admin/profile"
                className="hover:text-gray-400"
              >
                Profile
              </Link>
            </li>
            <li className="mt-2">
              <Link
                to="/dashboard/admin/update-profile"
                className="hover:text-gray-400"
              >
                Update Profile
              </Link>
            </li>
            <li className="mt-2">
              <Link
                to="/dashboard/admin/all-users"
                className="hover:text-gray-400"
              >
                All Users
              </Link>
            </li>
            <li className="mt-2">
              <Link
                to="/dashboard/admin/all-orders"
                className="hover:text-gray-400"
              >
                All Orders
              </Link>
            </li>
            <li className="mt-2">
              <Link
                to="/dashboard/admin/add-product"
                className="hover:text-gray-400"
              >
                Add Product
              </Link>
            </li>
            <li className="mt-2">
              <Link
                to="/dashboard/admin/products-list"
                className="hover:text-gray-400"
              >
                Products List
              </Link>
            </li>
            <li className="mt-2">
              <Link
                to="/dashboard/admin/reports-analytics"
                className="hover:text-gray-400"
              >
                View Reports
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
      {searchKey && (
        <div className="absolute top-16 left-52 bg-white shadow-lg rounded-md w-96 p-4 z-[1] max-h-64 overflow-y-auto search-results-container">
          {searchResults.length > 0 ? (
            <ul>
              {searchResults
                .slice()
                .reverse()
                .map((order, i) => (
                  <li key={order._id} className="p-2 border-b">
                    <SearchOrdersResults order={order} i={i} />
                  </li>
                ))}
            </ul>
          ) : (
            <p className="text-black">No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminSidebar;
