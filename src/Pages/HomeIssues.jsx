import React from "react";
import { Link, useLoaderData } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import {
  FaMapMarkerAlt,
  FaTags,
  FaMoneyBillWave,
  FaCheckCircle,
  FaClock,
  FaSpinner,
} from "react-icons/fa";
import Loading from "../Components/Loading";

const HomeIssues = () => {
  const data = useLoaderData();

  // Loading state
  if (!data || data.length === 0) {
    return (
      <div className="w-11/12 mx-auto my-20 flex justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="mx-auto w-11/12 my-10">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="title poppins">
          <Typewriter
            words={["Recent Complaints"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={70}
          />
        </h1>

        <p className="description md:w-[60%] mt-2">
          This section highlights recently reported city issues that require
          attention from authorities and the community.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((issue) => (
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
                <button className="btn allBtn w-full">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeIssues;
