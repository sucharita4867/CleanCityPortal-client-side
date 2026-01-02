import React from "react";
import Navbar from "../Components/Navbar";
import Login from "../Pages/Login";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <header>
        <Navbar />
      </header>
      <main className="pt-20">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AuthLayout;
