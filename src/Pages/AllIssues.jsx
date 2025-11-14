import React, { useState } from "react";
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
    <div className="px-4 md:px-10 my-6">
  
      <div className="mb-10 rounded-xl">
        <h1 className="text-[#464646] poppins text-center font-semibold text-3xl mb-3">
          <Typewriter
            words={["All Issues"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            delaySpeed={1000}
          />
        </h1>
        <p className="text-gray-600 text-base text-center md:w-[70%] mx-auto">
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
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              No Issues Found!
            </h2>
            <p className="text-gray-500 mb-1">
              No issues match the selected category or status.
            </p>
            <p className="text-gray-500">Try changing the filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {filteredData.map((issue) => (
              <div
                key={issue._id}
                className="w-96 bg-white h-full flex flex-col rounded-xl shadow-md overflow-hidden border border-gray-200 transition-transform duration-300 hover:scale-[1.02]"
              >
                <img
                  src={issue.image}
                  alt={issue.title}
                  className="h-[200px] w-full object-cover"
                />

                <div className="p-5 flex flex-col flex-1">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 h-12">
                    {issue.title}
                  </h2>

                  <div className="flex justify-between gap-4 text-sm text-gray-500 mb-3 h-10">
                    <p className="line-clamp-1">
                      <span className="font-medium text-gray-700">
                        Category:
                      </span>{" "}
                      {issue.category}
                    </p>
                    <p className="line-clamp-1">
                      <span className="font-medium text-gray-700">
                        Location:
                      </span>{" "}
                      {issue.location}
                    </p>
                  </div>

                  <div className="flex gap-8 items-center justify-between w-[95%] mx-auto">
                    <p className="text-gray-700 font-semibold mb-4">
                      Amount:{" "}
                      <span className="text-green-600 font-bold">
                        {issue.amount}
                      </span>
                    </p>

                    <p className="text-gray-700 font-semibold mb-4">
                      Status:{" "}
                      <span
                        className={
                          issue.status === "Resolved"
                            ? "text-green-600 font-bold"
                            : issue.status === "In Progress"
                            ? "text-blue-600 font-bold"
                            : "text-red-600 font-bold"
                        }
                      >
                        {issue.status}
                      </span>
                    </p>
                  </div>

                  <Link to={`/issuesDetails/${issue._id}`} className="mt-auto">
                    <button className="btn border-none md:px-8 text-center bg-[#F8B864] rounded-full text-base text-white md:font-semibold hover:border hover:border-[#F8B864] hover:bg-white w-full hover:text-[#F8B864]">
                      See Details
                    </button>
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
