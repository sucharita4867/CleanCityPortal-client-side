import React from "react";
import { Link, useLoaderData } from "react-router";

import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";

const HomeIssues = () => {
  const data = useLoaderData();
  return (
    <div className="w-11/12 mx-auto mb-10">
      <div className=" mb-6">
        <h1 className="text-[#464646] poppins text-center font-semibold text-3xl">
          <Typewriter
            words={["Recent Complaints"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            delaySpeed={1000}
          />
        </h1>

        <p className="text-[#989EA9]   md:w-[60%] text-base mx-auto text-center mt-2">
          This section shows the latest city issues reported by users, including
          garbage problems, road damage, illegal constructions, and broken
          public properties needing quick attention.
        </p>
      </div>

      {/* cards */}

      <div className="grid grid-cols-1 w-11/12 mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {data.map((issue) => (
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
                  <span className="font-medium text-gray-700">Category:</span>{" "}
                  {issue.category}
                </p>
                <p className="line-clamp-1">
                  <span className="font-medium text-gray-700">Location:</span>{" "}
                  {issue.location}
                </p>
                {/*  Status anount*/}
              </div>
              <div className="flex gap-8 items-center justify-between w-[95%] mx-auto">
                {/* anount */}
                <p className="text-gray-700 font-semibold mb-4">
                  Amount:{" "}
                  <span className="text-green-600 font-bold">
                    {issue.amount}
                  </span>
                </p>

                {/* Status */}
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
    </div>
  );
};

export default HomeIssues;
