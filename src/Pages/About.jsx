import React from "react";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <div className="w-11/12 mx-auto mt-6">
      {/* Title */}
      <h1 className="title">
        <Typewriter
          words={["About CleanHub"]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          delaySpeed={1000}
        />
      </h1>

      {/* Intro */}
      <p className="description w-[80%] my-2">
        CleanHub is a community-driven civic platform designed to help citizens
        report, track, and resolve local city issues. Our goal is to create a
        cleaner, safer, and more responsible urban environment through
        transparency and community participation.
      </p>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 my-10">
        <div className="bg-base-100 shadow-md rounded-xl p-6">
          <h2 className="title mb-2 text-start">Our Mission</h2>
          <p className="text-base-content">
            Our mission is to empower citizens by providing a simple and
            accessible platform where they can raise concerns about city
            problems such as garbage issues, damaged roads, broken public
            property, and other civic challenges.
          </p>
        </div>

        <div className="bg-base-100 shadow-md rounded-xl p-6">
          <h2 className="title mb-2 text-start">Our Vision</h2>
          <p className="text-base-content">
            We envision cities where citizens actively participate in improving
            their surroundings, authorities respond efficiently, and public
            issues are resolved through collaboration and accountability.
          </p>
        </div>
      </div>

      {/* Why CleanHub */}
      <div className="my-10">
        <h2 className="title mb-6">Why CleanHub?</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div
            className="group bg-base-100 p-6 rounded-xl shadow
    text-center transition-all duration-300
    hover:-translate-y-2 hover:shadow-xl"
          >
            <h3
              className="font-semibold text-[#464646] text-lg mb-2
      transition-colors duration-300 group-hover:text-[#F8B864]"
            >
              Community Powered
            </h3>
            <p className="description">
              Citizens play an active role by reporting and tracking issues in
              their local areas.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="group bg-base-100 p-6 rounded-xl shadow
    text-center transition-all duration-300
    hover:-translate-y-2 hover:shadow-xl"
          >
            <h3
              className="font-semibold text-[#464646] text-lg mb-2
      transition-colors duration-300 group-hover:text-[#F8B864]"
            >
              Transparency
            </h3>
            <p className="description">
              Everyone can see reported issues and their current status.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="group bg-base-100 p-6 rounded-xl shadow
    text-center transition-all duration-300
    hover:-translate-y-2 hover:shadow-xl"
          >
            <h3
              className="font-semibold text-[#464646] text-lg mb-2
      transition-colors duration-300 group-hover:text-[#F8B864]"
            >
              Easy to Use
            </h3>
            <p className="description">
              A clean and simple interface designed for all users.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="group bg-base-100 p-6 rounded-xl shadow
    text-center transition-all duration-300
    hover:-translate-y-2 hover:shadow-xl"
          >
            <h3
              className="font-semibold text-[#464646] text-lg mb-2
      transition-colors duration-300 group-hover:text-[#F8B864]"
            >
              Impact Driven
            </h3>
            <p className="description">
              Encourages faster resolution and responsible civic action.
            </p>
          </div>
        </div>
      </div>

      {/* What Problems We Address */}
      <div className="mb-10 max-w-xl mx-auto">
        <h2 className="title mb-6">Issues We Help Address</h2>

        <div className="space-y-4 border-l-4 border-[#F8B864] pl-6">
          <p className="text-[#464646] text-base">
            • Garbage and waste management problems in local areas
          </p>
          <p className="text-[#464646] text-base">
            • Damaged or unsafe roads affecting daily commuting
          </p>
          <p className="text-[#464646] text-base">
            • Broken street lights and public utilities
          </p>
          <p className="text-[#464646] text-base">
            • Illegal constructions and misuse of public spaces
          </p>
          <p className="text-[#464646] text-base">
            • Other community and civic-related issues
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-base-100 shadow-md rounded-xl p-8 ">
        <h2 className=" mb-2 title">Join Us in Making a Difference</h2>
        <p className="description max-w-4xl ">
          CleanHub is more than just a platform — it is a movement towards
          responsible citizenship. By reporting issues and staying informed,
          every individual can contribute to building a cleaner and better city.
        </p>
        <p className="font-medium mt-2 text-base text-[#F8B864]">
          Together, let’s build cleaner cities for a better tomorrow.
        </p>
      </div>
    </div>
  );
};

export default About;
