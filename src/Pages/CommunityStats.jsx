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
      icon: <FaUsers size={28} />,
      label: "Total Users",
      value: statsData?.totalUsers ?? 0,
    },
    {
      id: 2,
      icon: <FaCheckCircle size={28} />,
      label: "Resolved Issues",
      value: statsData?.issuesResolved ?? 0,
    },
    {
      id: 3,
      icon: <FaClock size={28} />,
      label: "Pending Issues",
      value: statsData?.issuesPending ?? 0,
    },
  ];

  return (
    <div className="">
      {/* Title */}
      <h1 className="title text-center poppins">
        <Typewriter
          words={["Community Stats"]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={70}
        />
      </h1>

      <p className="description md:w-[55%] mt-2">
        
        Stay informed with real-time updates. Check the number of active users,
        resolved issues, and pending tasks contributed by the community.
      </p>

      {/* Cards */}
      <section className="mt-10 w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {loading ? (
          <Loading />
        ) : (
          stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-[#F8B864] rounded-xl p-6 flex flex-col items-center text-white
              shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 mb-4">
                {stat.icon}
              </div>

              <h2 className="text-4xl font-bold">{stat.value}</h2>
              <p className="mt-1 text-sm">{stat.label}</p>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default CommunityStats;
