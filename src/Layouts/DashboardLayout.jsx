import { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900">
      {/* <Navbar onMenuClick={() => setIsOpen(true)} /> */}

      <div className="">
        {/* Sidebar takes its own width */}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Main content */}
        <main className=" p-6 md:ml-64 min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
