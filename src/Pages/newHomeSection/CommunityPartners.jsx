import React from "react";
import img1 from "../../assets/group2.png";
import img2 from "../../assets/grupe1.webp";
import img3 from "../../assets/group.jfif";
import img4 from "../../assets/image2.jpg";
import { Typewriter } from "react-simple-typewriter";

const partners = [
  {
    name: "City Sanitation Workers",
    image: img1,
  },
  {
    name: "Clean Streets Initiative",
    image: img2,
  },
  {
    name: "Urban Care Volunteers",
    image: img3,
  },
  {
    name: "Eco Awareness Group",
    image: img4,
  },
];

const CommunityPartners = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      {/* Title */}
      <h1 className="title mb-2 poppins">
        <Typewriter
          words={["Community Clean Drive Partners"]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={70}
        />
      </h1>
      <p className="description max-w-3xl mb-8">
        CleanHub proudly collaborates with community groups and volunteer
        organizations that actively work towards maintaining cleanliness and
        promoting civic responsibility.
      </p>

      {/* Partners Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="group text-center transition-all duration-300"
          >
            <div className="overflow-hidden rounded-xl shadow-md mb-3">
              <img
                src={partner.image}
                alt={partner.name}
                className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="font-semibold text-[#464646] text-base">
              {partner.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityPartners;
