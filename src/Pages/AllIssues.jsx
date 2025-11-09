import React from "react";
import { Link, useLoaderData } from "react-router";

const AllIssues = () => {
  const data = useLoaderData();

  return (
    <div className="px-4 md:px-10 my-6">
      {/* Page Header */}
      <div className="border  mb-10 rounded-xl  bg-white">
        <h1 className="text-[#464646] poppins text-center font-semibold text-3xl mb-3">
          All Issues
        </h1>
        <p className="text-gray-600 text-center md:w-[70%] mx-auto">
          The “All Issues” page displays every reported city problem, including
          garbage, road damage, broken public property, and illegal
          constructions — all organized for easy viewing and management.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {data.map((issue) => (
          <div
            key={issue._id}
            className="max-w-[380px] bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transition-transform duration-300 hover:scale-[1.02]"
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
                  <span className="font-medium text-gray-700">Category:</span>{" "}
                  {issue.category}
                </p>
                <p>
                  <span className="font-medium text-gray-700">Location:</span>{" "}
                  {issue.location}
                </p>
              </div>

              <p className="text-gray-700 font-semibold mb-4">
                Amount:{" "}
                <span className="text-green-600 font-bold">{issue.amount}</span>
              </p>
              <Link to={`/issue/${issue._id}`}>
                <button className="btn md:px-8 text-center bg-[#F8B864] rounded-full text-base text-white md:font-semibold hover:border hover:border-[#F8B864]  hover:bg-[white] w-full hover:text-[#F8B864]">
                  See Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllIssues;
