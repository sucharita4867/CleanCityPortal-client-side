import { FaMapMarkerAlt } from "react-icons/fa";
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
      date: new Date().toISOString(),
      additionalInfo: e.target.additionalInfo.value,
    };
    fetch("https://clean-city-portal-server.vercel.app/allContribution", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        setShowModal(false);
        Swal.fire({
          title: "Contribution added successfully!",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message || "Something went wrong!",
        });
      });
  };

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

            {/* Button */}
            <button onClick={() => setShowModal(true)} className="w-full btn">
              Pay Clean-Up Contribution
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50">
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
              {/*  */}
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
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                readOnly
                className="w-full p-2 border rounded bg-gray-100 text-black"
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
              {/*  */}
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

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default DetailsPage;
