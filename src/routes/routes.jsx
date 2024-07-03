import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import ProtectedRoute from "./AdminProtectedRoute";
import UserDashboard from "../pages/dashboard/UserDashboard";
import AdminDashboard from "../pages/dashboard/AdminDashboard";
import AdminLayout from "../layouts/adminLayout/AdminLayout";
import UserLayout from "../layouts/userLayout/UserLayout";
import ProfilePage from "../pages/ProfilePage";
import ErrorPage from "../pages/ErrorPage";
import ProfileUpdate from "../pages/ProfileUpdate";
import ProductAdd from "../pages/ProductAdd";
import ProductsList from "../pages/ProductsLists";
import ProductUpdate from "../pages/ProductUpdate";
import ProductDetails from "../pages/ProductDetails";
import AllProducts from "../pages/AllProducts";
import ContactUs from "../pages/ContactUs";
import OrderHistory from "../pages/OrderHistory";
import AllOrders from "../pages/AllOrders";
import AllUsers from "../pages/AllUsers";
import ReportsAndAnalytics from "../pages/ReportsAndAnalytics";
import UserProtectedRoute from "./UserProtectedRoute";
import AdminProtectedRoute from "./AdminProtectedRoute";

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
      {
        path: `/products`,
        element: <AllProducts />,
      },
      {
        path: `/products/:id`,
        element: (
          <ProtectedRoute>
            <ProductDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "/contacts",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/dashboard/admin",
    element: (
      <AdminProtectedRoute>
        <AdminLayout />
      </AdminProtectedRoute>
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
      {
        path: `/dashboard/admin/product-update/:id`,
        element: <ProductUpdate />,
      },
      {
        path: "/dashboard/admin/all-orders",
        element: <AllOrders />,
      },
      {
        path: "/dashboard/admin/all-users",
        element: <AllUsers />,
      },
      {
        path: "/dashboard/admin/reports-analytics",
        element: <ReportsAndAnalytics />,
      },
    ],
  },
  {
    path: "/dashboard/user",
    element: (
      <UserProtectedRoute>
        <UserLayout />
      </UserProtectedRoute>
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
      {
        path: "/dashboard/user/order-history",
        element: <OrderHistory />,
      },
    ],
  },
]);
