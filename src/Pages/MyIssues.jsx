import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";
import { FaCheckCircle, FaClock } from "react-icons/fa";

const MyIssues = () => {
  const { user } = use(AuthContext);
  const [issues, setIssues] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState(null);

  useEffect(() => {
    fetch(
      `https://clean-city-portal-server.vercel.app/myIssue?email=${user?.email}`
    )
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

    fetch(
      `https://clean-city-portal-server.vercel.app/allIssues/${selectedIssue._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    )
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "Your issue details have been updated.",
          icon: "success",
        });
        setIssues((prevIssues) =>
          prevIssues.map((issue) =>
            issue._id === selectedIssue._id
              ? { ...issue, ...updatedData }
              : issue
          )
        );

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
    // console.log(issue);
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
        fetch(
          `https://clean-city-portal-server.vercel.app/allIssues/${issue._id}`,
          {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
          }
        )
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
      <div className=" mb-10  ">
        <h1 className="title poppins  mb-3">
          <Typewriter
            words={["My Issues"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            delaySpeed={1000}
          />
        </h1>
        <p className="description  md:w-[70%] ">
          This page displays all the cleanliness or public space issues you have
          reported. You can easily check each issue’s details, track its current
          status, and manage your contributions or updates.
        </p>
      </div>

      <div className=" mx-auto">
        {issues.length === 0 ? (
          <div className="text-center bg-white border border-gray-300 rounded-xl shadow-md p-10 mt-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              You haven’t reported any issues yet!
            </h2>
            <p className="text-gray-500 mb-6">
              Report your first community cleanliness issue and help make your
              city better.
            </p>
            <Link to="/addIssue" className="btn allBtn">
              Report an Issue
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-3 justify-items-center">
            {issues.map((issue) => (
              <div
                key={issue._id}
                className="w-full h-full flex flex-col bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transition-transform duration-300 hover:scale-[1.02]"
              >
                <img
                  src={issue.image}
                  alt={issue.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-5 flex flex-col flex-1">
                  <h2 className="text-xl font-semibold text-[#464646] mb-1 line-clamp-2 min-h-[48px]">
                    {issue.title}
                  </h2>

                  <p className="text-sm text-[#464646] mb-2 line-clamp-2 min-h-[40px]">
                    {issue.description}
                  </p>
                  {/* Amount Status*/}
                  <div className="flex justify-between items-center text-sm mt-auto mb-2">
                    {/* Amount */}
                    <span className="text-green-600 font-semibold">
                      ${issue.amount}
                    </span>

                    {/* Status */}
                    <div className="flex items-center gap-1">
                      {issue.status === "Resolved" ? (
                        <FaCheckCircle className="text-green-600" />
                      ) : issue.status === "In Progress" ? (
                        <FaClock className="text-blue-600" />
                      ) : (
                        <FaClock className="text-red-600" />
                      )}
                      <span
                        className={
                          issue.status === "Resolved"
                            ? "text-green-600 font-semibold"
                            : issue.status === "In Progress"
                            ? "text-blue-600 font-semibold"
                            : "text-red-600 font-semibold"
                        }
                      >
                        {issue.status}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center gap-3 mt-auto pt-2">
                    <button
                      onClick={() => handleDelete(issue)}
                      type="button"
                      className="btn allBtn"
                    >
                      Delete
                    </button>

                    <button
                      onClick={() => setSelectedIssue(issue)}
                      className="btn allBtn"
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
                  defaultValue={selectedIssue.status}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn allBtn">
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
