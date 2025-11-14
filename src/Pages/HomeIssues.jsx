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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {data.map((issue) => (
          <Fade
            direction="up"
            triggerOnce
            key={issue._id}
            cascade
            damping={0.1}
          >
            <div className="w-96 h-full flex flex-col bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transition-transform duration-300 hover:scale-[1.02]">
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
                </div>

                <p className="text-gray-700 font-semibold mb-4">
                  Amount:{" "}
                  <span className="text-green-600 font-bold">
                    {issue.amount}
                  </span>
                </p>

                <Link to={`/issuesDetails/${issue._id}`} className="mt-auto">
                  <button className="btn border border-none md:px-8 text-center bg-[#F8B864] rounded-full text-base text-white md:font-semibold hover:border hover:border-[#F8B864] hover:bg-white w-full hover:text-[#F8B864]">
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default HomeIssues;
