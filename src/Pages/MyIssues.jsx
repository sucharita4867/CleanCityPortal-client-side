import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyIssues = () => {
  const { user } = use(AuthContext);
  const [issues, setIssues] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/myIssue?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setIssues(data);
      });
  }, [user?.email]);

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedData = {
      title: form.title.value,
      category: form.category.value,
      amount: form.amount.value,
      description: form.description.value,
      status: form.status.value,
    };

    fetch(`http://localhost:3000/allIssues/${selectedIssue._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then(() => {
        // ✅ success alert
        Swal.fire({
          title: "Your issue details have been updated.",
          icon: "success",
        });

        // ✅ local state update (no reload needed)
        setIssues((prevIssues) =>
          prevIssues.map((issue) =>
            issue._id === selectedIssue._id
              ? { ...issue, ...updatedData } // replace with updated info
              : issue
          )
        );

        // ✅ close modal or reset
        setSelectedIssue(null);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message || "Update failed!",
        });
      });
  };

  const handleDelete = (issue) => {
    console.log(issue);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/allIssues/${issue._id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              const remaining = issues.filter((item) => item._id !== issue._id);
              setIssues(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div>
      <div className="border mb-10 rounded-xl bg-white">
        <h1 className="text-[#464646] poppins text-center font-semibold text-3xl mb-3">
          My Issues
        </h1>
        <p className="text-gray-600 text-base text-center md:w-[70%] mx-auto">
          This page displays all the cleanliness or public space issues you have
          reported. You can easily check each issue’s details, track its current
          status, and manage your contributions or updates.
        </p>
      </div>

      <div className="w-11/12 mx-auto">
        {issues.length === 0 ? (
          <div className="text-center bg-white border border-gray-300 rounded-xl shadow-md p-10 mt-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              You haven’t reported any issues yet!
            </h2>
            <p className="text-gray-500 mb-6">
              Report your first community cleanliness issue and help make your
              city better.
            </p>
            <Link
              to="/addIssue"
              className="inline-block px-6 py-2 rounded-full bg-[#F8B864] text-white font-semibold hover:bg-white hover:text-[#F8B864] hover:border hover:border-[#F8B864] transition duration-300"
            >
              Report an Issue
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {issues.map((issue) => (
              <div
                key={issue._id}
                className="w-96 bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transition-transform duration-300 hover:scale-[1.02]"
              >
                <img
                  src={issue.image}
                  alt={issue.title}
                  className="h-[200px] w-full object-cover"
                />
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    {issue.title}
                  </h2>

                  <div className="flex justify-between gap-4 text-sm text-gray-500 mb-3">
                    <p>
                      <span className="font-medium text-gray-700">
                        Category:
                      </span>{" "}
                      {issue.category}
                    </p>
                    <p>
                      <span className="font-medium text-gray-700">
                        Location:
                      </span>{" "}
                      {issue.location}
                    </p>
                  </div>

                  <p className="text-gray-700 font-semibold mb-4">
                    Amount:{" "}
                    <span className="text-green-600 font-bold">
                      {issue.amount}
                    </span>
                  </p>
                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      onClick={() => handleDelete(issue)}
                      type="button"
                      className="btn md:px-8 text-center rounded-full text-base md:font-semibold border-[#F8B864] bg-white text-[#F8B864] hover:bg-white"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => setSelectedIssue(issue)}
                      className="btn md:px-8 text-center bg-[#F8B864] rounded-full text-base text-white md:font-semibold hover:border hover:border-[#F8B864] hover:bg-[white] hover:text-[#F8B864]"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Update Modal */}
      {selectedIssue && (
        <div className="fixed inset-0 text-black  bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-[90%] md:w-[500px] relative">
            <button
              onClick={() => setSelectedIssue(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold text-center mb-4 text-[#464646]">
              Update Issue
            </h2>

            <form onSubmit={handleUpdateSubmit} className="space-y-2">
              {/* Title */}
              <div>
                <label className="block text-gray-700 mb-1 font-medium">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  defaultValue={selectedIssue.title}
                  placeholder="Enter issue title"
                  className="w-full p-2 border rounded-md"
                />
              </div>

              {/* Category Dropdown */}
              <div>
                <label className="block text-gray-700 mb-1 font-medium">
                  Category
                </label>
                <select
                  name="category"
                  defaultValue={selectedIssue.category}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="Garbage Issue">Garbage Issue</option>
                  <option value="Broken Public Property">
                    Broken Public Property
                  </option>
                  <option value="Waterlogging">Waterlogging</option>
                  <option value="Illegal Dumping">Illegal Dumping</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              {/* Amount */}
              <div>
                <label className="block text-gray-700 mb-1 font-medium">
                  Amount
                </label>
                <input
                  type="number"
                  name="amount"
                  defaultValue={selectedIssue.amount}
                  placeholder="Enter contribution amount"
                  className="w-full p-2 border rounded-md"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-gray-700 mb-1 font-medium">
                  Description
                </label>
                <textarea
                  name="description"
                  defaultValue={selectedIssue.description}
                  rows="3"
                  placeholder="Describe the issue"
                  className="w-full p-2 border rounded-md"
                ></textarea>
              </div>

              {/* Status Dropdown */}
              <div>
                <label className="block text-gray-700 mb-1 font-medium">
                  Status
                </label>
                <select
                  name="status"
                  defaultValue={selectedIssue.status || "ongoing"}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="ongoing">Ongoing</option>
                  <option value="ended">Ended</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn w-full bg-[#F8B864] text-white rounded-full text-base font-semibold hover:border hover:border-[#F8B864] hover:bg-white hover:text-[#F8B864]"
              >
                Update Issue
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyIssues;
