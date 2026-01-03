import React from "react";
import cityImg from "../../assets/whysection.jpeg";
import { NavLink } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const WhyCleanHub = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            src={cityImg}
            alt="Clean City Community"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Content */}
        <div>
          <h1 className="text-[#464646] text-left font-semibold text-2xl poppins  mb-2">
            <Typewriter
              words={["Why Choose CleanHub?"]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={70}
            />
          </h1>

          <p className="text-left  mb-4 max-w-xl text-[#464646] text-base ">
            CleanHub is designed to bridge the gap between citizens and civic
            responsibility by providing a transparent, community-driven platform
            for reporting and tracking city issues.
          </p>

          {/* Points */}
          <ul className="space-y-4 mb-6">
            <li className="flex gap-3">
              <span className="text-[#F8B864] font-bold">✔</span>
              <p className="text-base-content">
                Easy and fast issue reporting with real-time updates
              </p>
            </li>

            <li className="flex gap-3">
              <span className="text-[#F8B864] font-bold">✔</span>
              <p className="text-base-content">
                Community transparency and public issue tracking
              </p>
            </li>

            <li className="flex gap-3">
              <span className="text-[#F8B864] font-bold">✔</span>
              <p className="text-base-content">
                Encourages civic awareness and responsible action
              </p>
            </li>

            <li className="flex gap-3">
              <span className="text-[#F8B864] font-bold">✔</span>
              <p className="text-base-content">
                Clean, modern, and mobile-friendly user experience
              </p>
            </li>
          </ul>

          {/* CTA */}
          <NavLink to="about" className="btn">
            Learn More About CleanHub
            <FaArrowRight />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WhyCleanHub;
