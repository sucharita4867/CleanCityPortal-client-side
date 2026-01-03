const termsData = [
  {
    id: 1,
    title: "User Responsibilities",
    text: "Users must provide accurate and truthful information when reporting issues. Submitting false, misleading, or inappropriate content is strictly prohibited.",
  },
  {
    id: 2,
    title: "Acceptable Use",
    text: "CleanHub should be used only for reporting genuine community-related issues. Any misuse of the platform for spam, harassment, or illegal activities may result in account suspension.",
  },
  {
    id: 3,
    title: "Issue Moderation",
    text: "CleanHub reserves the right to review, edit, or remove reported issues that violate platform guidelines or community standards.",
  },
  {
    id: 4,
    title: "Account Security",
    text: "Users are responsible for maintaining the confidentiality of their login credentials. CleanHub is not liable for unauthorized account access caused by user negligence.",
  },
  {
    id: 5,
    title: "Limitation of Liability",
    text: "CleanHub is provided on an “as-is” basis. We do not guarantee that all reported issues will be resolved, and we are not responsible for any losses arising from the use of the platform.",
  },
  {
    id: 6,
    title: "Changes to Terms",
    text: "CleanHub may update these Terms & Conditions at any time. Continued use of the platform after changes implies acceptance of the updated terms.",
  },
];

const Terms = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      {/* Title */}
      <h1 className="title text-center">Terms & Conditions</h1>

      <p className="description text-center max-w-3xl mx-auto mt-2">
        These Terms & Conditions define the rules and guidelines for using the
        CleanHub platform. By accessing our services, you agree to comply with
        the terms outlined below.
      </p>

      {/* Terms List */}
      <div className="mt-8 max-w-4xl mx-auto space-y-8">
        {termsData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl p-6 shadow-sm border"
          >
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F8B864] text-black font-semibold">
                {item.id}
              </span>

              <div>
                <h2 className="text-[#464646] font-semibold mb-1">
                  {item.title}
                </h2>
                <p className="text-[#464646] leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terms;
