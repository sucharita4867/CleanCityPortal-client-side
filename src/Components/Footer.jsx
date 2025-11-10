import React, { use } from "react";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Footer = () => {
  const { user } = use(AuthContext);
  return (
    <div className="mt-10 bg-[#111111]">
      <footer className=" text-primary-content px-10 py-12 text-center">
        <div>{user && user.email}</div>
        <div className="max-w-5xl mx-auto">
          <a className="font-semibold text-2xl poppins flex justify-center items-center gap-2 text-[#F8B864] mb-4">
            <span>CleanHub</span>
          </a>

          <p className="text-gray-300 poppins md:w-[80%] mx-auto leading-relaxed">
            CleanHub is a community-driven platform dedicated to keeping our
            surroundings clean and safe. Users can report local cleanliness
            issues like garbage piles, broken roads, or illegal dumping, and
            track their resolution in real time. Together, we build a cleaner,
            greener future — one report at a time.
          </p>
        </div>
      </footer>

      <div className="w-[80%] mx-auto h-px bg-gray-700"></div>

      <div className="bg-[#000000]  py-4 px-6">
        <div className="max-w-6xl mx-auto mt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © 2025 CleanHub — All rights reserved.
          </p>

          <div className="flex mt-3 md:mt-0 text-2xl justify-center items-center gap-4 text-gray-400">
            <Link>
              <FaFacebook className="hover:text-[#F8B864] transition" />
            </Link>
            <Link>
              <FaLinkedin className="hover:text-[#F8B864] transition" />
            </Link>
            <Link>
              <FaSquareXTwitter className="hover:text-[#F8B864] transition" />
            </Link>
            <Link>
              <FaInstagramSquare className="hover:text-[#F8B864] transition" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
