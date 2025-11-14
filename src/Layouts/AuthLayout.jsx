import React from "react";
import Navbar from "../Components/Navbar";
import Login from "../Pages/Login";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AuthLayout;
