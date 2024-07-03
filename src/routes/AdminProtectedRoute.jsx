import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../components/LoadingSpinner";

// eslint-disable-next-line react/prop-types
const AdminProtectedRoute = ({ children }) => {
  const { user, loading, dbUser } = useAuth();
  const location = useLocation();

  if (loading || !dbUser) {
    return <LoadingSpinner />;
  }

  if (!user || dbUser.role !== "admin") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default AdminProtectedRoute;
