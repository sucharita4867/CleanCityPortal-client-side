const PrivacyPolicy = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      {/* Title */}
      <h1 className="title text-center">Privacy Policy</h1>

      <p className="description text-center max-w-3xl mx-auto mt-2">
        CleanHub values your privacy and is committed to protecting your
        personal information. This Privacy Policy explains how we collect, use,
        and safeguard your data while you use our platform.
      </p>

      <div className="mt-10 max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed">
        {/* Section 1 */}
        <div>
          <h2 className="text-lg font-semibold mb-2">
            1. Information We Collect
          </h2>
          <p>
            We may collect basic information such as your name, email address,
            and issue details when you create an account or report an issue on
            CleanHub.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-lg font-semibold mb-2">
            2. How We Use Your Information
          </h2>
          <p>
            The information collected is used only to manage reported issues,
            improve platform functionality, and communicate important updates
            related to your submissions.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-lg font-semibold mb-2">3. Data Protection</h2>
          <p>
            We implement reasonable security measures to protect your personal
            data from unauthorized access, alteration, or disclosure.
          </p>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-lg font-semibold mb-2">4. Third-Party Sharing</h2>
          <p>
            CleanHub does not sell or share your personal information with third
            parties, except when required by law or to resolve reported issues
            with relevant authorities.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="text-lg font-semibold mb-2">5. Your Consent</h2>
          <p>
            By using CleanHub, you consent to this Privacy Policy and agree to
            the collection and use of information as described.
          </p>
        </div>

        {/* Section 6 */}
        <div>
          <h2 className="text-lg font-semibold mb-2">
            6. Changes to This Policy
          </h2>
          <p>
            CleanHub may update this Privacy Policy from time to time. Any
            changes will be posted on this page with an updated revision date.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
