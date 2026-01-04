import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaUserCircle } from "react-icons/fa";

const Navbar = ({ onMenuClick }) => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
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
  const isDashboard = location.pathname.startsWith("/dashboard");

  const navClass = ({ isActive }) =>
    isActive
      ? "text-[#F8B864] font-semibold border-b-2 border-[#F8B864]"
      : "text-base-content hover:text-[#F8B864]";

  const links = (
    <>
      <li>
        <NavLink to="/" className={navClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allIssues" className={navClass}>
          AllIssues
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={navClass}>
          About
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/dashboard" className={navClass}>
              Dashboard
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/dashboard/myIssue" className={navClass}>
              MyIssue
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myContribution" className={navClass}>
              MyContribution
            </NavLink>
          </li> */}
        </>
      )}
    </>
  );

  return (
    <div
      className="
    fixed top-0 left-0 w-full h-16 z-50 bg-base-100
    "
    >
      <div className="navbar md:w-11/12 md:mx-auto">
        <div className="navbar-start gap-2">
          {/* ☰ for Dashboard → opens sidebar */}
          {isDashboard && (
            <button
              onClick={onMenuClick}
              className="btn allBtn btn-ghost md:hidden"
            >
              ☰
            </button>
          )}

          {/* ☰ for normal pages → dropdown menu */}
          {!isDashboard && (
            <div className="dropdown">
              <button tabIndex={0} className="btn allBtn btn-ghost lg:hidden">
                ☰
              </button>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-[9999]"
              >
                {links}
              </ul>
            </div>
          )}

          <NavLink
            to="/"
            className="text-2xl font-semibold poppins text-[#F8B864]"
          >
            CleanHub
          </NavLink>
        </div>

        {!isDashboard && (
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-4">{links}</ul>
          </div>
        )}

        <div className="navbar-end gap-2">
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="avatar">
                <div className="w-12 rounded-full border-2 border-[#F8B864]">
                  {user?.photoURL ? (
                    <img src={user.photoURL} alt="User" />
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
                  <button onClick={handleToggle} className="btn allBtn">
                    {theme === "light" ? "Switch to Dark" : "Switch to Light"}
                  </button>
                </li>
                <li>
                  <button onClick={handleLogout} className="btn allBtn mt-2">
                    Logout
                  </button>
                </li>
                <li>
                  <button className="btn allBtn mt-2 w-full">
                    <NavLink to="/dashboard/profile">profile</NavLink>
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link to="/auth/login" className="btn allBtn">
                Login
              </Link>
              <Link to="/auth/register" className="btn allBtn">
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
