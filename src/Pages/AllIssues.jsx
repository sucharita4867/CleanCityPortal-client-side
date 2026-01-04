import React, { useState } from "react";
import { FaCheckCircle, FaClock } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import { Typewriter } from "react-simple-typewriter";

const AllIssues = () => {
  const data = useLoaderData();

  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");

  const filteredData = data.filter((issue) => {
    const matchCategory = category === "All" || issue.category === category;
    const matchStatus = status === "All" || issue.status === status;
    return matchCategory && matchStatus;
  });

  return (
    <div className="px-4 md:px-10 my-4">
      <div className="mb-10 rounded-xl">
        <h1 className="title poppins mb-3">
          <Typewriter
            words={["All Issues"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            delaySpeed={1000}
          />
        </h1>
        <p className="description md:w-[70%]">
          The “All Issues” page displays every reported city problem, including
          garbage, road damage, broken public property, and illegal
          constructions — all organized for easy viewing and management.
        </p>
      </div>

      <div className="w-11/12 mx-auto mb-10 flex flex-col md:flex-row items-center justify-center gap-5">
        {/* Category Filter */}
        <select
          className="select select-bordered text-black w-full max-w-xs"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Garbage">Garbage</option>
          <option value="Road Damage">Road Damage</option>
          <option value="Water Logging">Water Logging</option>
          <option value="Broken Property">Broken Property</option>
          <option value="Illegal Construction">Illegal Construction</option>
          <option value="Others">Others</option>
        </select>

        {/* Status Filter */}
        <select
          className="select select-bordered text-black w-full max-w-xs"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
      </div>

      <div className="w-11/12 mx-auto">
        {filteredData.length === 0 ? (
          <div className="text-center rounded-xl  shadow-md p-10 mt-10">
            <h2 className="title mb-4">No Issues Found!</h2>
            <p className="text-[#464646] mb-1">
              No issues match the selected category or status.
            </p>
            <p className="text-gray-500">Try changing the filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center">
            {filteredData.map((issue) => (
              <div
                key={issue._id}
                className="bg-white rounded-xl shadow-md border border-gray-200
            flex flex-col h-full overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
              >
                {/* Image */}
                <img
                  src={issue.image}
                  alt={issue.title}
                  className="h-48 w-full object-cover"
                />

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Title */}
                  <h2 className="text-xl font-semibold text-[#464646] mb-1 line-clamp-2 min-h-[48px]">
                    {issue.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-[#464646] mb-2 line-clamp-2 min-h-[40px]">
                    {issue.description ||
                      "This reported issue is affecting the local area and requires prompt attention."}
                  </p>

                  {/* Category */}
                  {/* <p className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <FaTags className="text-gray-500" />
                {issue.category}
              </p> */}

                  {/* Location */}
                  {/* <p className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                <FaMapMarkerAlt className="text-gray-500" />
                {issue.location}
              </p> */}

                  {/* Price + Status (flex row) */}
                  <div className="flex items-center justify-between text-sm mb-2 mt-auto">
                    {/* Price */}
                    <div className="flex items-center gap-1 text-green-600 font-semibold">
                      {/* <FaMoneyBillWave /> */}
                      <span>${issue.amount}</span>
                    </div>

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

                  {/* Button */}
                  <Link to={`/issuesDetails/${issue._id}`}>
                    <button className="btn w-full">View Details</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllIssues;
