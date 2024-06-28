import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
import toast from "react-hot-toast";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoadingUsers(false);
      }
    };

    fetchUsers();
  }, []);

  const handleRoleChange = async (userId, newRole) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/users/${userId}/role`,
        { role: newRole },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, role: newRole } : user
        )
      );
      toast.success(`User role updated to ${newRole}`);
    } catch (error) {
      console.error("Error updating user role:", error);
      toast.error("Failed to update user role");
    }
  };

  if (loadingUsers) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">All Users</h2>
      {users.length === 0 && <p className="text-lg">No users found.</p>}
      <div className="space-y-4">
        {users.map((user) => (
          <div key={user._id} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-xl font-bold mb-2">{user.name}</h3>
            <p className="text-lg">Email: {user.email}</p>
            <p className="text-lg">Role: {user.role}</p>
            <p className="text-lg">Mobile: {user.mobileNumber}</p>
            <p className="text-lg">Address: {user.address}</p>
            <div className="flex space-x-2 mt-4">
              {user.role !== "admin" && (
                <button
                  className="btn btn-primary"
                  onClick={() => handleRoleChange(user._id, "admin")}
                >
                  Make Admin
                </button>
              )}
              {user.role === "admin" && (
                <button
                  className="btn btn-warning"
                  onClick={() => handleRoleChange(user._id, "user")}
                >
                  Remove Admin
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
