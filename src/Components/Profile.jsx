import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-3xl">
      {/* Page title */}
      <h1 className="text-2xl font-bold mb-6 text-[#464646]">My Profile</h1>

      {/* Profile card */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Avatar */}
          <div className="w-28 h-28 rounded-full border-4 border-[#F8B864] flex items-center justify-center overflow-hidden">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="User"
                className="w-full h-full object-cover"
              />
            ) : (
              <FaUserCircle className="w-full h-full text-[#F8B864]" />
            )}
          </div>

          {/* User info */}
          <div className="flex-1 space-y-4 w-full">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Name
              </label>
              <input
                type="text"
                value={user?.displayName || "Not set"}
                readOnly
                className="input w-full rounded-full text-black bg-gray-100 cursor-not-allowed"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                value={user?.email || ""}
                readOnly
                className="input w-full rounded-full text-black bg-gray-100 cursor-not-allowed"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
