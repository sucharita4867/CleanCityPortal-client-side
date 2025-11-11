import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddIssue = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title: e.target.title.value,
      category: e.target.category.value,
      location: e.target.location.value,
      description: e.target.description.value,
      image: e.target.image.value,
      amount: e.target.amount.value,
      date: new Date(),
      email: user.email,
    };
    fetch("http://localhost:3000/allIssues", {
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
          draggable: true,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: { error },
        });
      });
  };

  return (
    <div className="min-h-screen  from-[#fdfaf5] to-[#f6e8d7] flex justify-center items-center py-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl border border-gray-200">
        <h2 className="text-[#464646] poppins text-center font-semibold text-3xl mb-3">
          Report a New Issue
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* title */}
          <div>
            <label className="block text-gray-700 font-medium text-base mb-1">
              Issue Title
            </label>
            <input
              name="title"
              type="text"
              className="rounded-full input w-full text-black focus:outline-none focus:border-[#F8B864] focus:ring-1 focus:ring-[#F8B864]"
              placeholder="Enter issue title"
              required
            />
          </div>
          {/* Category */}
          <div>
            <label className="block text-gray-700 font-medium mb-1 text-base">
              Category
            </label>
            <select
              name="category"
              required
              className="w-full px-4 py-2 border border-gray-300
               rounded-full  focus:outline-none focus:border-[#F8B864] focus:ring-1 focus:ring-[#F8B864]  text-black"
            >
              <option value="">Select a category</option>
              <option value="Garbage">Garbage</option>
              <option value="Illegal Construction">Illegal Construction</option>
              <option value="Broken Public Property">
                Broken Public Property
              </option>
              <option value="Road Damage">Road Damage</option>
            </select>
          </div>
          {/* Location */}
          <div>
            <label className="block text-gray-700 text-base font-medium mb-1">
              Location
            </label>
            <input
              className="rounded-full input w-full text-black focus:outline-none focus:border-[#F8B864] focus:ring-1 focus:ring-[#F8B864]"
              type="text"
              name="location"
              placeholder="Enter issue location"
              required
            />
          </div>
          {/* Description */}
          <div>
            <label className="block text-gray-700 text-base font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              placeholder="Describe the issue..."
              required
              className="w-full px-4 py-2 border  text-black rounded-lg  focus:outline-none focus:border-[#F8B864] focus:ring-1 focus:ring-[#F8B864]"
            ></textarea>
          </div>
          {/* Image */}
          <div>
            <label className="block text-gray-700 text-base font-medium mb-1">
              Image
            </label>
            <input
              className="rounded-full input w-full text-black focus:outline-none focus:border-[#F8B864] focus:ring-1 focus:ring-[#F8B864]"
              type="text"
              name="image"
              placeholder="Enter image URL"
              required
            />
          </div>
          {/* amount */}
          <div className="flex-1">
            <label className="block text-gray-700 text-base font-medium mb-1">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              placeholder="Enter estimated budget"
              required
              className="w-full px-4 input py-2 border rounded-full text-black focus:outline-none focus:border-[#F8B864] focus:ring-1 focus:ring-[#F8B864] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
          </div>

          {/* date */}
          {/* <div className="flex-1">
              <label className="block text-gray-700 text-base font-medium mb-1">
                Date
              </label>
              <input
                type="text"
                name="date"
                placeholder="Enter date"
                className="w-full input px-4 py-2 border rounded-full text-black focus:outline-none focus:border-[#F8B864] focus:ring-1 focus:ring-[#F8B864]"
              />
            </div> */}

          {/* Email */}
          {/* <div>
            <label className="block text-gray-700 text-base font-medium mb-1">
              Email
            </label>
            <input
              className="rounded-full input w-full text-black focus:outline-none focus:border-[#F8B864] focus:ring-1 focus:ring-[#F8B864]"
              name="email"
              placeholder="Enter issue location"
              //
              type="email"
              value={user?.email || ""}
              readOnly
            />
          </div> */}
          {/* btn */}
          <div className="pt-4">
            <button
              type="submit"
              className="btn md:px-8 text-center bg-[#F8B864] rounded-full text-base text-white md:font-semibold hover:border hover:border-[#F8B864] hover:bg-[white] hover:text-[#F8B864] w-full"
            >
              Submit Issue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddIssue;
