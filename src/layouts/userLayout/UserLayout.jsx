import { Outlet } from "react-router-dom";
import UserSidebar from "./UserSidebar";
import UserNavbar from "./UserNavbar";

const UserLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <UserSidebar />
      <div className="flex-1">
        <UserNavbar />
        <main className="p-4 md:ml-64">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
