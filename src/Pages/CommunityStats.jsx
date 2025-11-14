import React, { useState, useEffect } from "react";
import { FaUsers, FaCheckSquare, FaHourglassHalf } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const CommunityStats = () => {
  const [statsData, setStatsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/community-stats`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch stats");
        }
        return res.json();
      })
      .then((data) => {
        setStatsData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  const statsStructure = [
    {
      id: 1,
      icon: <FaUsers size={30} />,
      label: "Total Registered Users",
      apiKey: "totalUsers",
    },
    {
      id: 2,
      icon: <FaCheckSquare size={30} />,
      label: "Issues Resolved",
      apiKey: "issuesResolved",
    },
    {
      id: 3,
      icon: <FaHourglassHalf size={30} />,
      label: "Issues Pending",
      apiKey: "issuesPending",
    },
  ];

  return (
    <div>
      <div className=" mb-6">
        <h1 className="text-[#464646] poppins text-center font-semibold text-3xl">
          <Typewriter
            words={["Community Stats"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            delaySpeed={1000}
          />
        </h1>
        <p className="text-[#989EA9] md:w-[60%] text-base mx-auto text-center mt-2">
          See our community's growing impact. Track live updates on total
          registered users, issues resolved, and currently pending tasks.
          Together, we are making a tangible difference.
        </p>
      </div>
      <section className="bg-gray-100 py-12">
        <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center text-white">
          {loading && <p className="text-black col-span-3">Loading stats...</p>}
          {error && <p className="text-red-600 col-span-3">Error: {error}</p>}

          {!loading &&
            !error &&
            statsData &&
            statsStructure.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col items-center justify-center p-6 bg-[#F8B864] rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
              >
                <div className="bg-white rounded-full p-4 mb-4 text-orange-400">
                  {stat.icon}
                </div>
                <h2 className="text-2xl font-bold">
                  {statsData[stat.apiKey] !== undefined
                    ? statsData[stat.apiKey]
                    : 0}
                </h2>
                <p className="text-sm mt-2">{stat.label}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default CommunityStats;
