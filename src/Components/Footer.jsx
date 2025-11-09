import React from "react";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-[#111111]  text-primary-content p-10">
        <div>
          <a className="font-semibold text-2xl poppins flex items-center gap-2 text-[#F8B864]">
            <span>CleanHub</span>
          </a>
          <p className="text-white poppins w-[70%] mx-auto">
            CleanHub is a community-driven platform dedicated to keeping our
            surroundings clean and safe. Users can report local cleanliness
            issues like garbage piles, broken roads, or illegal dumping, and
            track their resolution in real time. Together, we build a cleaner,
            greener future — one report at a time.
          </p>
          <div className="w-full h-px bg-gray-700 my-6"></div>
          <div className="w-full">
            <div className="flex justify-between items-center  ">
              <p className="text-sm text-gray-400  text-center">
                Copyright 2025 — All rights reserved.
              </p>
              <div className="flex text-2xl gap-3 text-gray-400">
                <Link>
                  <FaFacebook />
                </Link>
                <Link>
                  <FaLinkedin />
                </Link>
                <Link>
                  <FaSquareXTwitter />
                </Link>
                <Link>
                  <FaInstagramSquare />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
