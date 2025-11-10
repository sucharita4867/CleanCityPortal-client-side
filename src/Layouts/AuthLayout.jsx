import React from "react";
import Navbar from "../Components/Navbar";
import Login from "../Pages/Login";
import Footer from "../Components/Footer";

const AuthLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Login />
        
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AuthLayout;
