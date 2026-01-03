import React, { useState } from "react";

const faqs = [
  {
    question: "How can I report an issue on CleanHub?",
    answer:
      "To report an issue, you need to log in first. After logging in, go to the 'Add Issue' page, fill in the details, upload an image if available, and submit the issue.",
  },
  {
    question: "Do I need to create an account to use CleanHub?",
    answer:
      "You can browse and view reported issues without an account. However, creating an account is required to report issues, contribute, or track your submissions.",
  },
  {
    question: "What types of issues can be reported?",
    answer:
      "You can report various civic issues such as garbage problems, road damage, broken street lights, public property damage, and other community-related concerns.",
  },
  {
    question: "How can I track the status of my reported issue?",
    answer:
      "Once an issue is reported, its status is visible on the issue details page. You can track updates such as Pending, In Progress, or Resolved.",
  },
  {
    question: "Who takes action on the reported issues?",
    answer:
      "Reported issues are visible to the community and relevant authorities or responsible teams who review and take action to resolve them.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-11/12 mx-auto ">
      {/* Title */}
      <h2 className="title mb-2">Frequently Asked Questions</h2>
      <p className="description max-w-3xl mb-8">
        Find answers to some of the most common questions about using CleanHub
        and how the platform works.
      </p>

      {/* FAQ Items */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl p-5 cursor-pointer transition-all duration-300 hover:shadow-md bg-base-100"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-[#464646] text-base">
                {faq.question}
              </h3>
              <span className="text-[#F8B864] text-xl font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {openIndex === index && (
              <p className="mt-3 text-base-content text-sm leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
