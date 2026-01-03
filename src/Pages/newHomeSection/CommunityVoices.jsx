import React from "react";

const CommunityVoices = () => {
  return (
    <div className="w-11/12 mx-auto my-10 border border-black">
      {/* Title */}
      <h2 className="title mb-2">Community Voices</h2>
      <p className="description max-w-3xl mb-8">
        Hear directly from community members who have used CleanHub to report
        local issues, stay informed about progress, and contribute to building a
        cleaner, safer, and more responsible city together.
      </p>

      {/* Testimonials */}
      <div className="space-y-10 max-w-4xl mx-auto">
        {/* Item 1 */}
        <div className="border-l-4 border-[#F8B864] pl-6">
          <p className="text-base md:text-lg text-base-content italic mb-2">
            “CleanHub made it very easy to report garbage issues in our area.
            Seeing updates gave us confidence that the problem would be solved.”
          </p>
          <p className="font-semibold text-[#464646]">— Local Resident</p>
        </div>

        {/* Item 2 */}
        <div className="border-l-4 border-[#F8B864] pl-6">
          <p className="text-base md:text-lg text-base-content italic mb-2">
            “The platform brings transparency. Anyone can see what issues are
            reported and what actions are being taken.”
          </p>
          <p className="font-semibold text-[#464646]">— Community Volunteer</p>
        </div>

        {/* Item 3 */}
        <div className="border-l-4 border-[#F8B864] pl-6">
          <p className="text-base md:text-lg text-base-content italic mb-2">
            “CleanHub encourages people to care about their surroundings. It
            feels good to contribute to a cleaner city.”
          </p>
          <p className="font-semibold text-[#464646]">— Registered User</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityVoices;
