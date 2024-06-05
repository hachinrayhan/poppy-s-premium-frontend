import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import ProtectedRoute from "./ProtectedRoute";
import UserDashboard from "../pages/dashboard/UserDashboard";
import AdminDashboard from "../pages/dashboard/AdminDashboard";
import AdminLayout from "../layouts/adminLayout/AdminLayout";
import UserLayout from "../layouts/userLayout/UserLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
    ],
  },
  {
    path: "/dashboard/admin",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <AdminDashboard />,
      },
    ],
  },
  {
    path: "/dashboard/user",
    element: (
      <ProtectedRoute>
        <UserLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <UserDashboard />,
      },
    ],
  },
]);
