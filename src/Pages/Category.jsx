import React from "react";
import Marquee from "react-fast-marquee";
import { FaTrash, FaBuilding, FaHammer, FaRoad, FaWater } from "react-icons/fa";

const Category = () => {
  return (
    <div className="w-11/12 mx-auto my-12">
      <Marquee className="" pauseOnHover={true}>
        {/* গ্রিড লেআউটটি সরিয়ে দেওয়া হয়েছে এবং কার্ডগুলিতে mr-6 যোগ করা হয়েছে */}

        {/* Garbage Card */}
        <div className="flex-1 p-2 border border-gray-300 rounded-md shadow-lg gap-3 items-center flex justify-center mr-6">
          <FaTrash className="text-7xl text-[#F8B864]" />
          <div>
            <h3 className="font-medium text-xl poppins text-[#F8B864]">
              Garbage
            </h3>
            <p className="text-base text-[#464646]">
              Report trash and garbage issues in your area.
            </p>
          </div>
        </div>

        {/* Illegal Construction Card */}
        <div className="flex-1 p-2 border border-gray-300 rounded-md shadow-lg gap-3 items-center flex justify-center mr-6">
          <FaBuilding className="text-7xl text-[#F8B864]" />
          <div>
            <h3 className="font-medium text-xl poppins text-[#F8B864]">
              Illegal Construction
            </h3>
            <p className="text-base text-[#464646]">
              Notify authorities about unauthorized buildings.
            </p>
          </div>
        </div>

        {/* Waterlogging Card */}
        <div className="flex-1 p-2 border border-gray-300 rounded-md shadow-lg gap-3 items-center flex justify-center mr-6">
          <FaWater className="text-7xl text-[#F8B864]" />
          <div>
            <h3 className="font-medium text-xl poppins text-[#F8B864]">
              Waterlogging
            </h3>
            <p className="text-base text-[#464646]">
              Report issues of standing water or blocked drains.
            </p>
          </div>
        </div>

        {/* Broken Public Property Card */}
        <div className="flex-1 p-2 border border-gray-300 rounded-md shadow-lg gap-3 items-center flex justify-center mr-6">
          <FaHammer className="text-7xl text-[#F8B864]" />
          <div>
            <h3 className="font-medium text-xl poppins text-[#F8B864]">
              Damaged Property
            </h3>
            <p className="text-base text-[#464646]">
              Report damaged benches, streetlights, and public assets.
            </p>
          </div>
        </div>

        <div className="flex-1 p-2 border border-gray-300 rounded-md shadow-lg gap-3 items-center flex justify-center mr-6">
          <FaRoad className="text-7xl text-[#F8B864]" />
          <div>
            <h3 className="font-medium text-xl poppins text-[#F8B864]">
              Road Damage
            </h3>
            <p className="text-base text-[#464646]">
              Report potholes and damaged roads for repair.
            </p>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Category;
