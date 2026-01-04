import React, { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import { Typewriter } from "react-simple-typewriter";

const AllIssues = () => {
  const data = useLoaderData();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // filter + search
  const filteredData = data.filter((issue) => {
    const matchCategory = category === "All" || issue.category === category;
    const matchStatus = status === "All" || issue.status === status;

    const matchSearch =
      issue.title.toLowerCase().includes(search.toLowerCase()) ||
      issue.location.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchStatus && matchSearch;
  });

  // sorting
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortBy === "latest") {
      return new Date(b.date) - new Date(a.date);
    }
    if (sortBy === "priceLow") {
      return a.amount - b.amount;
    }
    if (sortBy === "priceHigh") {
      return b.amount - a.amount;
    }
    return 0;
  });

  // pagination logic
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, endIndex);

  return (
    <div className="px-4 md:px-10 my-4">
      {/* Title */}
      <div className="mb-10">
        <h1 className="title poppins mb-3">
          <Typewriter
            words={["All Issues"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={70}
          />
        </h1>
        <p className="description md:w-[70%]">
          The “All Issues” page displays every reported city problem, including
          garbage, road damage, broken public property, and illegal
          constructions — all organized for easy viewing and management.
        </p>
      </div>

      {/* Search + Filters */}
      <div className="w-11/12 mx-auto mb-10 flex flex-col md:flex-row items-center justify-center gap-5">
        {/* Search */}
        <input
          type="text"
          placeholder="Search by title or location..."
          className="input input-bordered w-full max-w-md text-black"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />

        {/* Category */}
        <select
          className="select select-bordered text-black w-full max-w-xs"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="All">All Categories</option>
          <option value="Garbage">Garbage</option>
          <option value="Road Damage">Road Damage</option>
          <option value="Water Logging">Water Logging</option>
          <option value="Broken Property">Broken Property</option>
          <option value="Illegal Construction">Illegal Construction</option>
          <option value="Others">Others</option>
        </select>

        {/* Status */}
        <select
          className="select select-bordered text-black w-full max-w-xs"
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>

        {/* Sorting */}
        <select
          className="select select-bordered text-black w-full max-w-xs"
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option value="default">Sort By</option>
          <option value="latest">Latest Issues</option>
          <option value="priceLow">Cost: Low to High</option>
          <option value="priceHigh">Cost: High to Low</option>
        </select>
      </div>

      {/* Cards */}
      <div className="w-11/12 mx-auto">
        {paginatedData.length === 0 ? (
          <div className="text-center shadow-md p-10 mt-10 rounded-xl">
            <h2 className="title mb-4">No Issues Found!</h2>
            <p className="text-[#464646]">Try changing the filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {paginatedData.map((issue) => (
              <div
                key={issue._id}
                className="bg-white rounded-xl shadow-md border
                flex flex-col h-full overflow-hidden hover:scale-[1.02] transition"
              >
                <img
                  src={issue.image}
                  alt={issue.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-5 flex flex-col flex-1">
                  <h2 className="text-xl font-semibold text-[#464646] mb-1 line-clamp-2 min-h-[48px]">
                    {issue.title}
                  </h2>

                  <p className="text-sm text-[#464646] mb-2 line-clamp-2 min-h-[40px]">
                    {issue.description}
                  </p>

                  <div className="flex justify-between items-center text-sm mt-auto mb-2">
                    <span className="text-green-600 font-semibold">
                      ${issue.amount}
                    </span>

                    <div className="flex items-center gap-1">
                      {issue.status === "Resolved" ? (
                        <FaCheckCircle className="text-green-600" />
                      ) : issue.status === "In Progress" ? (
                        <FaClock className="text-blue-600" />
                      ) : (
                        <FaClock className="text-red-600" />
                      )}
                      <span
                        className={
                          issue.status === "Resolved"
                            ? "text-green-600 font-semibold"
                            : issue.status === "In Progress"
                            ? "text-blue-600 font-semibold"
                            : "text-red-600 font-semibold"
                        }
                      >
                        {issue.status}
                      </span>
                    </div>
                  </div>

                  <Link to={`/issuesDetails/${issue._id}`}>
                    <button className="allBtn btn w-full">View Details</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-10">
            {/* Prev */}
            <button
              className="btn allBtn btn-sm btn-outline outline-[#F8B864]"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              <FaArrowLeft />
              Prev
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages).keys()].map((num) => {
              const page = num + 1;
              const isActive = currentPage === page;

              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`btn  btn-sm transition-all
            ${
              isActive
                ? "bg-[#F8B864] text-white border-[#F8B864]"
                : "btn-outline border-gray-400 text-gray-700 hover:bg-gray-100"
            }`}
                >
                  {page}
                </button>
              );
            })}

            {/* Next */}
            <button
              className="btn allBtn btn-sm btn-outline"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              Next
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllIssues;
