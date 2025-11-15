import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaDownload } from "react-icons/fa";
import autoTable from "jspdf-autotable";
import jsPDF from "jspdf";
import { Typewriter } from "react-simple-typewriter";

const MyContribution = () => {
  const { user } = useContext(AuthContext);
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !user.email) return;

    setLoading(true);

    fetch(
      `https://clean-city-portal-server.vercel.app/myContribution?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setContributions(data);
        setLoading(false);
      })
      .catch(() => {
        setContributions([]);
        setLoading(false);
      });
  }, [user]);

  const handleDownloadPDF = () => {
    if (!user || contributions.length === 0) return;

    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("My Contribution Report", 14, 22);
    doc.setFontSize(11);
    doc.text(`User: ${user.email}`, 14, 30);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 36);

    const tableColumn = ["Issue Title", "Category", "Paid Amount ($)", "Date"];
    const tableRows = [];

    contributions.forEach((item) => {
      const itemData = [
        item.title || item.issueId,
        item.category,
        `$${item.amount}`,
        new Date(item.date).toLocaleDateString(),
      ];
      tableRows.push(itemData);
    });

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 50,
      theme: "grid",
      headStyles: { fillColor: [248, 184, 100] },
    });

    doc.save("My_Contribution_Report.pdf");
  };

  const renderTableBody = () => {
    if (loading) {
      return (
        <tr>
          <td colSpan="5" className="text-center">
            <span className="loading loading-spinner text-warning"></span>
          </td>
        </tr>
      );
    }

    if (contributions.length === 0) {
      return (
        <tr>
          <td colSpan="5" className="text-center text-gray-500">
            You have not made any contributions yet.
          </td>
        </tr>
      );
    }

    return contributions.map((item, index) => (
      <tr key={item._id} className="hover:bg-base-200">
        <td className="whitespace-nowrap">{index + 1}</td>
        <td className="whitespace-nowrap">{item.title || item.issueId}</td>
        <td className="whitespace-nowrap">{item.category}</td>
        <td className="whitespace-nowrap">${item.amount}</td>
        <td className="whitespace-nowrap">
          {new Date(item.date).toLocaleDateString()}
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <div className="mb-10 p-6 shadow-sm">
        <div className="flex flex-col md:flex-row justify-center items-center mb-3">
          <h1 className="text-[#464646] poppins text-center font-semibold text-3xl">
            <Typewriter
              words={["My Contribution"]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              delaySpeed={1000}
            />
          </h1>
        </div>

        <p className="text-gray-600 text-base text-center md:w-[60%] mx-auto">
          Track all your contributions in one place. This page shows a clear
          table of your payments, including issue category, amount, and date.
          You can also download a complete PDF report.
        </p>

        <div className="flex justify-center mt-2">
          <button
            onClick={handleDownloadPDF}
            disabled={contributions.length === 0}
            className="btn md:px-8 text-center border border-none bg-[#F8B864] rounded-full text-base text-white md:font-semibold hover:border hover:border-[#F8B864] hover:bg-[white] hover:text-[#F8B864]"
          >
            <FaDownload className="mr-2" />
            Download Report
          </button>
        </div>
      </div>

      <div className="text-black bg-white rounded-xl w-11/12 mx-auto shadow-sm">
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="bg-base-200">
              <tr>
                <th>#</th>
                <th>Issue Title</th>
                <th>Category</th>
                <th>Paid Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>{renderTableBody()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyContribution;
