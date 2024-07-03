import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const { dbUser } = useAuth();

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 relative">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <p className="mt-1 text-lg font-semibold text-gray-900">
            {dbUser.name}
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <p className="mt-1 text-lg font-semibold text-gray-900">
            {dbUser.email}
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Date of Birth
          </label>
          <p className="mt-1 text-lg font-semibold text-gray-900">
            {dbUser.dateOfBirth}
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <p className="mt-1 text-lg font-semibold text-gray-900">
            {dbUser.address}
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Mobile Number
          </label>
          <p className="mt-1 text-lg font-semibold text-gray-900">
            {dbUser.mobileNumber}
          </p>
        </div>
        <Link
          to={
            dbUser?.role === "admin"
              ? "/dashboard/admin/update-profile"
              : "/dashboard/user/update-profile"
          }
          className="btn btn-primary absolute bottom-4 right-4"
        >
          Update Profile
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
