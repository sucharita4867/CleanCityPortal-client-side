import { Link } from "react-router";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300 mt-16">
      <div className="w-11/12 mx-auto py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold text-[#F8B864] mb-4">
            CleanHub
          </h2>
          <p className="text-sm leading-relaxed">
            CleanHub is a community-driven platform where citizens can report
            local issues like garbage, broken roads, or illegal dumping and
            track their resolution in real time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-[#F8B864]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/allIssues" className="hover:text-[#F8B864]">
                All Issues
              </Link>
            </li>
            <li>
              <Link to="/addIssue" className="hover:text-[#F8B864]">
                Report Issue
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#F8B864]">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/contact" className="hover:text-[#F8B864]">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-[#F8B864]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-[#F8B864]">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#F8B864]" />
              support@cleanhub.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#F8B864]" />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#F8B864]" />
              Kolkata, India
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F8B864]"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F8B864]"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F8B864]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F8B864]"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} CleanHub — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
