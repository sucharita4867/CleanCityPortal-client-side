import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 p-6">
        <div className="text-center bg-white p-10 rounded-lg shadow-xl max-w-lg mx-auto">
          <h1 className="text-9xl font-extrabold text-[#F8B864] mb-4 drop-shadow-lg">
            404
          </h1>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved. Please
            check the URL or navigate back to the homepage.
          </p>
          <a
            href="/"
            className="btn md:px-8 text-center bg-[#F8B864] rounded-full text-base text-white md:font-semibold hover:border hover:border-[#F8B864] hover:bg-[white] hover:text-[#F8B864]"
          >
            Go to Homepage
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ErrorPage;
