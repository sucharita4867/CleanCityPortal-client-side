import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
// import logo from "../assets/logo.jpg";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Logout successfully!",
          icon: "success",
          draggable: true,
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Logout failed. Please try again!",
        });
      });
  };
  const links = (
    <>
      <li className="text-base">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#F8B864] " : "text-black"
          }
        >
          Home
        </NavLink>
      </li>

      <li className="text-base">
        <NavLink
          to="/allIssues"
          className={({ isActive }) =>
            isActive ? "text-[#F8B864] " : "text-black"
          }
        >
          AllIssues
        </NavLink>
      </li>
      <li className="text-base">
        <NavLink
          to="/issuesDetails/:id"
          className={({ isActive }) =>
            isActive ? "text-[#F8B864] " : "text-black"
          }
        >
          IssuesDetails
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="">
      <div className="navbar md:w-11/12 md:mx-auto">
        <div className="navbar-start">
          <div className="dropdown text-black">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content text-black rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
              <li>home</li>
            </ul>
          </div>

          <a className="btn btn-ghost text-2xl poppins flex items-center gap-2 text-[#F8B864]">
            {/* <img
              src={logo}
              alt="CleanHub Logo"
              className="w-8 h-8 invert-[0.6] sepia saturate-[5] hue-rotate-[10deg]"
            /> */}
            <span>CleanHub</span>
          </a>
          <div className="text-black font-semibold ">{user && user.email}</div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end md:gap-3 gap-1">
          <div className="">
            {user ? (
              <button
                onClick={handleLogout}
                className="btn md:px-8 text-center bg-[#F8B864] rounded-full text-base text-white md:font-semibold hover:border hover:border-[#F8B864] hover:bg-[white] hover:text-[#F8B864]"
              >
                Logout{" "}
              </button>
            ) : (
              <Link
                to="/auth/login"
                className="btn md:px-8 text-center bg-[#F8B864] rounded-full text-base text-white md:font-semibold hover:border hover:border-[#F8B864] hover:bg-[white] hover:text-[#F8B864]"
              >
                Login{" "}
              </Link>
            )}
          </div>
          <div>
            <Link
              to="/auth/register"
              className="btn md:px-6 text-center bg-[#F8B864] rounded-full text-base text-white md:font-semibold hover:border hover:border-[#F8B864] hover:bg-[white] hover:text-[#F8B864]"
            >
              Register{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
