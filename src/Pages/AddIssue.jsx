import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";

const AddIssue = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = {
      title: form.title.value,
      category: form.category.value,
      status: form.status.value,
      location: form.location.value,
      description: form.description.value,
      image: form.image.value,
      amount: form.amount.value,
      date: new Date().toISOString(),
      email: user?.email,
    };

    fetch("https://clean-city-portal-server.vercel.app/allIssues", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "Issue added successfully!",
          icon: "success",
        });
        form.reset(); // ✅ clear form
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message || "Something went wrong",
        });
      });
  };

  return (
    <div className="py-8 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-2xl border border-gray-200 mx-auto">
        <h2 className="title poppins mb-4 text-center">
          <Typewriter
            words={["Report a New Issue"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            delaySpeed={1000}
          />
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Issue Title
            </label>
            <input
              name="title"
              type="text"
              required
              placeholder="Enter issue title"
              className="input w-full rounded-full text-black focus:border-[#F8B864] focus:ring-[#F8B864]"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Category
            </label>
            <select
              name="category"
              required
              className="w-full px-4 py-2 border rounded-full text-black focus:border-[#F8B864] focus:ring-[#F8B864]"
            >
              <option value="">Select a category</option>
              <option value="Garbage">Garbage</option>
              <option value="Waterlogging">Waterlogging</option>
              <option value="Illegal Construction">Illegal Construction</option>
              <option value="Broken Public Property">
                Broken Public Property
              </option>
              <option value="Road Damage">Road Damage</option>
            </select>
          </div>

          {/* Status & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Status
              </label>
              <select
                name="status"
                required
                className="w-full px-4 py-2 border rounded-full text-black focus:border-[#F8B864] focus:ring-[#F8B864]"
              >
                <option value="All">All Status</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Location
              </label>
              <input
                name="location"
                type="text"
                required
                placeholder="Enter issue location"
                className="input w-full rounded-full text-black focus:border-[#F8B864] focus:ring-[#F8B864]"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              required
              placeholder="Describe the issue..."
              className="w-full px-4 py-2 border rounded-lg text-black focus:border-[#F8B864] focus:ring-[#F8B864]"
            ></textarea>
          </div>

          {/* Image */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Image URL
            </label>
            <input
              name="image"
              type="text"
              required
              placeholder="Enter image URL"
              className="input w-full rounded-full text-black focus:border-[#F8B864] focus:ring-[#F8B864]"
            />
          </div>

          {/* Amount */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Amount
            </label>
            <input
              name="amount"
              type="number"
              required
              placeholder="Enter estimated budget"
              className="input w-full rounded-full text-black focus:border-[#F8B864] focus:ring-[#F8B864]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="input w-full rounded-full text-black bg-gray-100"
            />
          </div>

          <button type="submit" className="btn allBtn w-full mt-4">
            Submit Issue
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddIssue;
