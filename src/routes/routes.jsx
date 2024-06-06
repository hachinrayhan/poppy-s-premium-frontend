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
import ProfilePage from "../pages/ProfilePage";
import ErrorPage from "../pages/ErrorPage";
import ProfileUpdate from "../pages/ProfileUpdate";
import ProductAdd from "../pages/ProductAdd";
import ProductsList from "../pages/ProductsLists";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <AdminDashboard />,
      },
      {
        path: "/dashboard/admin/profile",
        element: <ProfilePage />,
      },
      {
        path: "/dashboard/admin/update-profile",
        element: <ProfileUpdate />,
      },
      {
        path: "/dashboard/admin/add-product",
        element: <ProductAdd />,
      },
      {
        path: "/dashboard/admin/products-list",
        element: <ProductsList />,
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
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <UserDashboard />,
      },
      {
        path: "/dashboard/user/profile",
        element: <ProfilePage />,
      },
      {
        path: "/dashboard/user/update-profile",
        element: <ProfileUpdate />,
      },
    ],
  },
]);
