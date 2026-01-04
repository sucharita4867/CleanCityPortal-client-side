import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { useLoaderData } from "react-router";
import { useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Swal from "sweetalert2";

const DetailsPage = () => {
  const issue = useLoaderData();
  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      issueId: issue._id,
      title: e.target.title.value,
      amount: e.target.amount.value,
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      category: e.target.category.value,
      address: e.target.address.value,
      additionalInfo: e.target.additionalInfo.value,
      date: new Date().toISOString(),
    };

    fetch("https://clean-city-portal-server.vercel.app/allContribution", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => {
        setShowModal(false);
        Swal.fire("Success!", "Contribution added successfully!", "success");
      })
      .catch(() => {
        Swal.fire("Error!", "Something went wrong!", "error");
      });
  };

  const handleContributionClick = () => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please login to make a clean-up contribution.",
      });
      return;
    }

    setShowModal(true);
  };

  return (
    <div>
      <Navbar />

      <div className="bg-gray-50 min-h-screen text-black pt-20 py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image */}
            <div className="bg-white rounded-2xl overflow-hidden shadow">
              <img
                src={issue.image}
                alt={issue.title}
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Gallery */}
            {issue.images?.length > 0 && (
              <div className="grid grid-cols-3 gap-3">
                {issue.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt="issue"
                    className="h-24 w-full object-cover rounded-xl border"
                  />
                ))}
              </div>
            )}

            {/* Overview */}
            <div className="bg-white rounded-2xl p-6 shadow">
              <h1 className="text-[#464646] poppins font-semibold text-2xl mb-2">
                {issue.title}
              </h1>

              <div className="flex gap-4 text-sm text-[#464646] mb-2">
                <span className="flex items-center gap-1">
                  <MdCategory /> {issue.category}
                </span>
                <span className="flex items-center gap-1">
                  <FaMapMarkerAlt /> {issue.location}
                </span>
              </div>

              <h3 className="font-semibold text-lg text-[#464646] mb-1">
                Overview
              </h3>
              <p className="text-[#464646] leading-relaxed">
                {issue.description}
              </p>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-[#464646] font-semibold text-lg mb-1">
                Reviews & Ratings
              </h3>
              <div className="flex gap-1 text-yellow-500 mb-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-sm text-[#464646]">
                Reviews will be available once users start sharing feedback.
              </p>
            </div>

            {/* Related */}
            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-[#464646] font-semibold text-lg mb-3">
                Related Issues
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-[#464646]">
                <div className="border p-3 rounded-xl">
                  Waterlogging after rain
                </div>
                <div className="border p-3 rounded-xl">
                  Road damage near market
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {/* Key Info */}
            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className=" text-[#464646] font-semibold text-lg mb-2">
                Key Information
              </h3>

              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <strong>Status:</strong> {issue.status}
                </li>
                <li>
                  <strong>Estimated Cost:</strong>
                  <span className="text-green-600 font-semibold">
                    ${issue.amount}
                  </span>
                </li>
                <li>
                  <strong>Reported On:</strong> {issue.date}
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-[#464646] font-semibold text-lg mb-2">
                Contact
              </h3>
              <div className="flex items-center text-[#464646] gap-2 text-sm">
                <IoMdMail /> {issue.email}
              </div>
            </div>

            {/* Action */}
            <div className="bg-white rounded-2xl p-6 shadow">
              {/* <button onClick={() => setShowModal(true)} className="btn w-full">
                Pay Clean-Up Contribution
              </button> */}

              <button onClick={handleContributionClick} className="btn w-full">
                Pay Clean-Up Contribution
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL (unchanged logic) */}
      {showModal && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
            <h2 className="text-xl font-bold mb-2 text-gray-800 text-center">
              Pay Clean-Up Contribution
            </h2>
            <form onSubmit={handleSubmit} className="space-y-1">
              {/* title */}
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Title
              </label>
              <input
                type="text"
                name="title"
                defaultValue={issue.title}
                placeholder="Issue Title"
                required
                className="w-full p-2 border rounded text-black"
              />
              <div className="flex gap-4 items-center justify-between">
                {/* category */}
                <div>
                  <label className="block text-gray-700 font-medium mb-1 text-base">
                    Category
                  </label>
                  <select
                    name="category"
                    required
                    className="w-full p-2 border rounded text-black"
                  >
                    <option value="">Select a category</option>
                    <option value="Garbage">Garbage</option>
                    <option value="Waterlogging">Waterlogging</option>
                    <option value="Illegal Construction">
                      Illegal Construction
                    </option>
                    <option value="Broken Public Property">
                      Broken Public Property
                    </option>
                    <option value="Road Damage">Road Damage</option>
                  </select>
                </div>
                {/* amount */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Amount
                  </label>
                  <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    required
                    className="w-full p-2 border rounded text-black"
                  />
                </div>
              </div>
              {/* */}
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Contributor name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Contributor Name"
                required
                className="w-full p-2 border rounded text-black"
              />
              <label className="block text-black text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                readOnly
                className="w-full p-2 border rounded  text-black"
              />
              <div className="flex items-center gap-4 justify-between">
                {/* phone no */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Phone no
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className="w-full p-2 border rounded text-black"
                  />
                </div>
                {/* address */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    required
                    className="w-full p-2 border rounded text-black"
                  />
                </div>
              </div>
              {/* */}
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Additional info
              </label>
              <textarea
                name="additionalInfo"
                placeholder="Additional info"
                className="w-full p-2 border rounded text-black"
              ></textarea>
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="btn"
                >
                  Cancel
                </button>
                <button type="submit" className="btn ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default DetailsPage;
