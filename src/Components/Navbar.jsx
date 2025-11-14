import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

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
            isActive ? "text-[#F8B864]" : "text-black"
          }
        >
          Home
        </NavLink>
      </li>

      <li className="text-base">
        <NavLink
          to="/allIssues"
          className={({ isActive }) =>
            isActive ? "text-[#F8B864]" : "text-black"
          }
        >
          AllIssues
        </NavLink>
      </li>

      {user && (
        <li className="text-base">
          <NavLink
            to="/addIssue"
            className={({ isActive }) =>
              isActive ? "text-[#F8B864]" : "text-black"
            }
          >
            AddIssue
          </NavLink>
        </li>
      )}

      {user && (
        <li className="text-base">
          <NavLink
            to="/myIssue"
            className={({ isActive }) =>
              isActive ? "text-[#F8B864]" : "text-black"
            }
          >
            MyIssue
          </NavLink>
        </li>
      )}

      {user && (
        <li className="text-base">
          <NavLink
            to="/myContribution"
            className={({ isActive }) =>
              isActive ? "text-[#F8B864]" : "text-black"
            }
          >
            MyContribution
          </NavLink>
        </li>
      )}
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content text-black rounded-box z-1 mt-3 w-52 p-2 shadow bg-base-100"
            >
              {links}
            </ul>
          </div>

          <a className="btn btn-ghost text-2xl poppins flex items-center gap-2 text-[#F8B864]">
            CleanHub
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end md:gap-3 gap-1">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-12 rounded-full border-2 border-[#F8B864]">
                  {user?.photoURL ? (
                    <img alt="User" src={user.photoURL} />
                  ) : (
                    <FaUserCircle className="w-full h-full text-[#F8B864]" />
                  )}
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-[9999]"
              >
                <li>
                  <button
                    onClick={handleToggle}
                    className="btn md:px-8 text-center bg-[#F8B864] rounded-full text-base text-white md:font-semibold hover:border hover:border-[#F8B864] hover:bg-[white] hover:text-[#F8B864]"
                  >
                    {theme === "light" ? " Light Mode" : " Dark Mode"}
                  </button>
                </li>

                <li>
                  <button
                    onClick={handleLogout}
                    className="btn md:px-8 text-center bg-[#F8B864] rounded-full text-base text-white md:font-semibold hover:border hover:border-[#F8B864] hover:bg-[white] hover:text-[#F8B864]"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="btn md:px-8 text-center bg-[#F8B864] rounded-full text-base text-white md:font-semibold hover:border hover:border-[#F8B864] hover:bg-[white] hover:text-[#F8B864]"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="btn md:px-6 text-center bg-[#F8B864] rounded-full text-base text-white md:font-semibold hover:border hover:border-[#F8B864] hover:bg-[white] hover:text-[#F8B864]"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
