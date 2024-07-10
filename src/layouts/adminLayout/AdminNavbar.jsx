import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useSearchOrders from "../../hooks/useSearchOrders";

const AdminNavbar = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  const { searchKey, searchResults, handleSearch, handleResultClick } =
    useSearchOrders();

  const handleLogout = () => {
    logOut();
    toast.success("You have logged out. See you soon!");
    navigate("/");
  };

  return (
    <div className="md:hidden bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <Link to={"/dashboard/admin"} className="text-md font-bold">
          Admin Dashboard
        </Link>
        <input
          type="text"
          onChange={handleSearch}
          className="grow input input-bordered input-sm max-w-40 text-black"
          placeholder="Search Order by Order Id, Customer Email or Mobile Number"
        />
        <button
          onClick={() =>
            document.getElementById("admin-menu").classList.toggle("hidden")
          }
          className="text-xl focus:outline-none"
        >
          ☰
        </button>
      </div>
      <nav id="admin-menu" className="mt-4 hidden">
        <ul>
          <li className="mt-2">
            <Link to="/dashboard/admin/profile" className="hover:text-gray-400">
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
      {searchKey && (
        <div className="absolute top-12 right-4 left-4 bg-white shadow-lg rounded-md max-w-screen-md p-4 z-[1] max-h-64 overflow-y-auto">
          {searchResults.length > 0 ? (
            <ul>
              {searchResults
                .slice()
                .reverse()
                .map((order, i) => (
                  <li key={order._id} className="p-2 border-b">
                    <Link
                      to={`/orders/${order._id}`}
                      onClick={handleResultClick}
                      className="flex items-center"
                    >
                      <div className="avatar placeholder">
                        <div className="bg-neutral text-neutral-content w-8 rounded-full">
                          <span className="text-xs">{i + 1}</span>
                        </div>
                      </div>
                      <div className="ml-3 text-black">
                        <p>Customer: {order.customerName}</p>
                        <p>Product: {order.productName}</p>
                      </div>
                    </Link>
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

export default AdminNavbar;
