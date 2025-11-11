import { FaMapMarkerAlt } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const DetailsPage = () => {
  const issue = useLoaderData();

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10 flex justify-center items-center">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-3xl border border-gray-200">
          <div className="w-full h-64 md:h-80 overflow-hidden">
            <img
              src={issue.image}
              alt={issue.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              {issue.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
              <p className="flex items-center gap-2 text-sm md:text-base">
                <MdCategory className="text-blue-500" />
                <span className="font-medium">{issue.category}</span>
              </p>
              <p className="flex items-center gap-2 text-sm md:text-base">
                <FaMapMarkerAlt className="text-red-500" />
                <span>{issue.location}</span>
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              {issue.description}
            </p>

            <div className="bg-gray-100 rounded-xl p-4 flex justify-between items-center mb-4">
              <p className="text-gray-800 font-semibold">
                Estimated Cost:{" "}
                <span className="text-green-600">${issue.amount}</span>
              </p>
              <p className="text-sm text-gray-500">Reported on: {issue.date}</p>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <IoMdMail className="text-gray-600 text-lg" />
              <p className="text-gray-700">{issue.email}</p>
            </div>

            <button
              className="w-full py-3 font-semibold transition
          btn md:px-8 text-center bg-[#F8B864] rounded-full text-base text-white md:font-semibold hover:border hover:border-[#F8B864] hover:bg-[white] hover:text-[#F8B864]
          "
            >
              Pay Clean-Up Contribution
            </button>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default DetailsPage;
