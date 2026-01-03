import React from "react";
import {
  FaClipboardList,
  FaUsers,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const HowItWorks = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      {/* Title */}
      <h1 className="title mb-2 poppins">
        <Typewriter
          words={["How CleanHub Works"]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={70}
        />
      </h1>
      <p className="description max-w-2xl mb-10">
        CleanHub makes it easy for citizens to report local issues and track
        their resolution through a transparent and community-driven process.
      </p>

      {/* Steps */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Step 1 */}
        <div className="group bg-base-100 p-6 rounded-xl shadow text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <FaClipboardList className="text-4xl mx-auto mb-4 text-[#F8B864]" />
          <h3 className="font-semibold text-lg mb-2 text-[#464646]">
            Report an Issue
          </h3>
          <p className="text-sm text-base-content">
            Submit issues like garbage, road damage, or public property problems
            with details and images.
          </p>
        </div>

        {/* Step 2 */}
        <div className="group bg-base-100 p-6 rounded-xl shadow text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <FaUsers className="text-4xl mx-auto mb-4 text-[#F8B864]" />
          <h3 className="font-semibold text-lg mb-2 text-[#464646]">
            Community Review
          </h3>
          <p className="text-sm text-base-content">
            Other users can view reported issues, stay informed, and support
            community awareness.
          </p>
        </div>

        {/* Step 3 */}
        <div className="group bg-base-100 p-6 rounded-xl shadow text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <FaTools className="text-4xl mx-auto mb-4 text-[#F8B864]" />
          <h3 className="font-semibold text-lg mb-2 text-[#464646]">
            Action Taken
          </h3>
          <p className="text-sm text-base-content">
            Authorities or responsible teams review the issue and start working
            on resolving it.
          </p>
        </div>

        {/* Step 4 */}
        <div className="group bg-base-100 p-6 rounded-xl shadow text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <FaCheckCircle className="text-4xl mx-auto mb-4 text-[#F8B864]" />
          <h3 className="font-semibold text-lg mb-2 text-[#464646]">
            Issue Resolved
          </h3>
          <p className="text-sm text-base-content">
            The issue status is updated so everyone can see when it has been
            successfully resolved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
