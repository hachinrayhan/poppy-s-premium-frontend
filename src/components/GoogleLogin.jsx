import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const [error, setError] = useState("");
  const { googleLogin } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    setError("");
    googleLogin()
      .then((result) => {
        const email = result.user.email;
        const name = result.user.displayName;
        const userInfo = { email, name };
        fetch("https://poppys-premium-backend.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data.token);
            toast.success("Login Successful!");
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        const errorMessage = error.message.split(" ").pop().slice(1, -2);
        setError(errorMessage);
      });
  };
  return (
    <div className="form-control">
      <button onClick={handleGoogleLogin} className="btn btn-info">
        Login With Google
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default GoogleLogin;
