import React from "react";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <div className="w-11/12 mx-auto px-4 pt-2">
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
      <p className="description w-[80%] my-6  border border-black">
        CleanHub is a community-driven civic platform designed to help citizens
        report, track, and resolve local city issues. Our goal is to create a
        cleaner, safer, and more responsible urban environment through
        transparency and community participation.
      </p>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-12 border border-black">
        <div className="bg-base-100 shadow-md rounded-xl p-6">
          <h2 className="title mb-3 text-start">Our Mission</h2>
          <p className="text-base-content">
            Our mission is to empower citizens by providing a simple and
            accessible platform where they can raise concerns about city
            problems such as garbage issues, damaged roads, broken public
            property, and other civic challenges.
          </p>
        </div>

        <div className="bg-base-100 shadow-md rounded-xl p-6">
          <h2 className="title mb-3 text-start">Our Vision</h2>
          <p className="text-base-content">
            We envision cities where citizens actively participate in improving
            their surroundings, authorities respond efficiently, and public
            issues are resolved through collaboration and accountability.
          </p>
        </div>
      </div>

      {/* Why CleanHub */}
      <div className="mb-12 border border-black">
        <h2 className="title mb-6">Why CleanHub?</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-base-100 p-5 rounded-xl shadow text-center">
            <h3 className="font-semibold text-lg mb-2">Community Powered</h3>
            <p className="text-sm text-base-content">
              Citizens play an active role by reporting and tracking issues in
              their local areas.
            </p>
          </div>

          <div className="bg-base-100 p-5 rounded-xl shadow text-center">
            <h3 className="font-semibold text-lg mb-2">Transparency</h3>
            <p className="text-sm text-base-content">
              Everyone can see reported issues and their current status.
            </p>
          </div>

          <div className="bg-base-100 p-5 rounded-xl shadow text-center">
            <h3 className="font-semibold text-lg mb-2">Easy to Use</h3>
            <p className="text-sm text-base-content">
              A clean and simple interface designed for all users.
            </p>
          </div>

          <div className="bg-base-100 p-5 rounded-xl shadow text-center">
            <h3 className="font-semibold text-lg mb-2">Impact Driven</h3>
            <p className="text-sm text-base-content">
              Encourages faster resolution and responsible civic action.
            </p>
          </div>
        </div>
      </div>

      {/* What Problems We Address */}
      <div className="mb-12 border border-black">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Issues We Help Address
        </h2>

        <ul className="max-w-3xl mx-auto list-disc list-inside text-base-content space-y-2">
          <li>Garbage and waste management problems</li>
          <li>Damaged or unsafe roads</li>
          <li>Broken street lights and public utilities</li>
          <li>Illegal constructions and public space misuse</li>
          <li>Other community and civic issues</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-base-100 shadow-md rounded-xl p-8 border border-black">
        <h2 className="text-2xl font-semibold mb-3">
          Join Us in Making a Difference
        </h2>
        <p className="text-base-content mb-5 max-w-2xl mx-auto">
          CleanHub is more than just a platform — it is a movement towards
          responsible citizenship. By reporting issues and staying informed,
          every individual can contribute to building a cleaner and better city.
        </p>
        <p className="font-medium text-[#F8B864]">
          Together, let’s build cleaner cities for a better tomorrow.
        </p>
      </div>
    </div>
  );
};

export default About;
