import React, { useState, useEffect } from "react";
import { FaUsers, FaCheckCircle, FaClock } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import Loading from "../Components/Loading";

const CommunityStats = () => {
  const [statsData, setStatsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://clean-city-portal-server.vercel.app/community-stats")
      .then((res) => res.json())
      .then((data) => {
        setStatsData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const stats = [
    {
      id: 1,
      icon: <FaUsers size={32} />,
      label: "Total Users",
      value: statsData?.totalUsers ?? 0,
      color: "bg-orange-400",
    },
    {
      id: 2,
      icon: <FaCheckCircle size={32} />,
      label: "Resolved Issues",
      value: statsData?.issuesResolved ?? 0,
      color: "bg-green-500",
    },
    {
      id: 3,
      icon: <FaClock size={32} />,
      label: "Pending Issues",
      value: statsData?.issuesPending ?? 0,
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className=" border border-black">
      {/* Title */}
      <h1 className="title poppins">
        <Typewriter
          words={["Community Stats"]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          delaySpeed={1000}
        />
      </h1>

      <p className="description md:w-[55%]  mt-2">
        Stay informed with real-time updates. Check the number of active users,
        resolved issues, and pending tasks contributed by the community.
      </p>

      {/* Stats Cards */}
      <section className="py-6 w-11/12 mx-auto   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8  mx-auto">
        {loading ? (
          <Loading></Loading>
        ) : (
          stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col   items-center justify-center  bg-[#F8B864]  rounded-xl shadow-lg  hover:scale-105 transition duration-300 "
            >
              <div className={`p-4 rounded-full mb-4 text-white ${stat.color}`}>
                {stat.icon}
              </div>

              <h2 className="text-3xl font-bold text-white">{stat.value}</h2>

              <p className="text-sm text-white mt-1">{stat.label}</p>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default CommunityStats;
