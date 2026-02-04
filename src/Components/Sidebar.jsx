import {
  FaHome,
  FaChartPie,
  FaPlusCircle,
  FaClipboardList,
  FaHandsHelping,
  FaUserCircle,
} from "react-icons/fa";
import { NavLink } from "react-router";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      <aside
        className={`
          fixed left-0 top-0
          w-64 h-screen
          bg-zinc-900 text-white
          z-50
          flex flex-col
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* HEADER */}
        <div className="p-6 text-xl font-bold border-b border-zinc-700 shrink-0">
          Dashboard
        </div>

        {/* MENU */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-[#F8B864] text-black"
                  : "text-zinc-300 hover:bg-zinc-800"
              }`
            }
          >
            <FaHome />
            Home
          </NavLink>

          <NavLink
            to="/dashboard"
            end
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-[#F8B864] text-black"
                  : "text-zinc-300 hover:bg-zinc-800"
              }`
            }
          >
            <FaChartPie />
            Overview
          </NavLink>

          <NavLink
            to="/dashboard/addIssue"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-[#F8B864] text-black"
                  : "text-zinc-300 hover:bg-zinc-800"
              }`
            }
          >
            <FaPlusCircle />
            Add Issue
          </NavLink>

          <NavLink
            to="/dashboard/myIssue"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-[#F8B864] text-black"
                  : "text-zinc-300 hover:bg-zinc-800"
              }`
            }
          >
            <FaClipboardList />
            My Issues
          </NavLink>

          <NavLink
            to="/dashboard/myContribution"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-[#F8B864] text-black"
                  : "text-zinc-300 hover:bg-zinc-800"
              }`
            }
          >
            <FaHandsHelping />
            My Contribution
          </NavLink>
        </nav>

        {/* PROFILE (BOTTOM FIXED) */}
        <div className="border-t border-zinc-700 p-4 shrink-0">
          <NavLink
            to="/dashboard/profile"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-800 transition"
          >
            <FaUserCircle className="text-3xl text-[#F8B864]" />
            <span className="text-sm text-zinc-300 font-semibold">
              View Profile
            </span>
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
