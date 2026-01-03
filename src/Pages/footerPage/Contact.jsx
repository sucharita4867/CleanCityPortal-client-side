import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      {/* Title */}
      <h1 className="title text-center">Contact Us</h1>
      <p className="description text-center max-w-2xl mx-auto mt-2">
        Have questions, suggestions, or need support? Reach out to the CleanHub
        team — we’re here to help you build a cleaner community.
      </p>

      {/* Content */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="bg-[#0f0f0f] text-gray-300 rounded-xl p-8 space-y-6">
          <h2 className="text-xl font-semibold text-[#F8B864]">Get in Touch</h2>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-[#F8B864]" />
            <span>support@cleanhub.com</span>
          </div>

          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-[#F8B864]" />
            <span>+91 98765 43210</span>
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-[#F8B864]" />
            <span>Kolkata, India</span>
          </div>

          <p className="text-sm text-gray-400">
            We usually respond within 24–48 hours on working days.
          </p>
        </div>

        {/* Contact Form */}
        <form className="bg-white rounded-xl p-8 shadow-md space-y-5">
          <h2 className="text-xl title">Send Us a Message</h2>

          <div>
            <label className="block text-sm font-medium mb-1 text-[#464646]">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border-gray-300 text-black  border rounded-lg px-4 py-2 outline-none focus:border-[#F8B864]"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-[#464646] font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-gray-300 text-black border rounded-lg px-4 py-2 outline-none focus:border-[#F8B864]"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-[#464646]">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full border-gray-300 text-black border rounded-lg px-4 py-2 outline-none focus:border-[#F8B864]"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn w-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
