import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";
import debounce from "lodash/debounce";

const Navbar = () => {
  const { user, dbUser, loading, logOut } = useAuth();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const handleLogout = () => {
    logOut();
    toast.success("You have logged out. See you soon!");
    navigate("/");
  };

  const handleSearch = debounce(async (e) => {
    const searchKey = e.target.value;
    setSearchKey(searchKey);
    if (searchKey) {
      try {
        const response = await axios.get(
          "https://poppys-premium-backend.vercel.app/search/products",
          {
            params: { searchKey: searchKey },
          }
        );
        setSearchResults(response.data);
      } catch (error) {
        console.error("Error searching products:", error);
      }
    } else {
      setSearchResults([]);
    }
  }, 1000); // Debounce input with 1000ms delay

  const handleResultClick = () => {
    setSearchResults([]);
    setSearchKey("");
  };

  const navItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/products"}>Products</Link>
      </li>
      <li>
        <Link to={"/contacts"}>Contact Us</Link>
      </li>
      {user ? (
        <>
          {!loading && dbUser?.role === "admin" ? (
            <li>
              <Link to={"/dashboard/admin"}>Dashboard</Link>
            </li>
          ) : (
            <li>
              <Link to={"/dashboard/user"}>Dashboard</Link>
            </li>
          )}
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </>
      ) : (
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn btn-ghost text-sm md:text-xl font-sans hover:font-mono md:hover:font-serif pl-0 md:pl-4"
        >
          POPPY&apos;S PREMIUM
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-lg menu-horizontal px-1 font-sans font-semibold">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-4">
        <label className="input input-bordered input-xs md:input-sm flex items-center gap-2">
          <input
            onChange={handleSearch}
            type="text"
            className="grow"
            placeholder="Search Products"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        {user && (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="avatar cursor-pointer">
              <div className="w-6 md:w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL} alt="user's photo" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {!loading && dbUser?.role === "admin" ? (
                <>
                  <li>
                    <Link to={"/dashboard/admin/profile"}>Profile</Link>
                  </li>
                  <li>
                    <Link to={"/dashboard/admin/update-profile"}>
                      Update Profile
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to={"/dashboard/user/profile"}>Profile</Link>
                  </li>
                  <li>
                    <Link to={"/dashboard/user/update-profile"}>
                      Update Profile
                    </Link>
                  </li>
                </>
              )}
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
      {searchKey && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-md w-96 p-4 z-[1] max-h-64 overflow-y-auto">
          {searchResults.length > 0 ? (
            <ul>
              {searchResults.map((product) => (
                <li key={product._id} className="p-2 border-b">
                  <Link
                    to={`/products/${product._id}`}
                    onClick={handleResultClick}
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
