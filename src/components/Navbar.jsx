import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [dbUser, setDBUser] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    toast("You have logged out. See you soon!");
    navigate("/");
  };

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://poppys-premium-backend.vercel.app/users/email/${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setDBUser(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [user?.email]);

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
          {!loading && dbUser.role === "admin" ? (
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
          className="btn btn-ghost text-xl font-sans hover:font-serif"
        >
          POPPY&apos;S PREMIUM
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-lg menu-horizontal px-1 font-sans font-semibold">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        {user && (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="avatar cursor-pointer">
              <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL} alt="user's photo" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {!loading && dbUser.role === "admin" ? (
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
    </div>
  );
};

export default Navbar;
