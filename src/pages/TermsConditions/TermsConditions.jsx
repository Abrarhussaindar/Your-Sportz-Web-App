
import Layout from "../../components/Layout";

const TermsAndConditions = [
  {
    title: "Term and condition:",
    content: [
      "YourSportz app prohibits nudity, violence, or pornography content; violators will be banned.",
      "Users are solely responsible for posted content; YourSportz reserves the right to remove inappropriate content.",
      "YourSportz isn't liable for technical issues; prompt resolution will be attempted.",
      "Terms are subject to change; users will be notified of updates.",
    ],
  },
  {
    title: "Cookie Policy:",
    content: [
      "Cookies enhance user experience by remembering preferences.",
      "Types include essential, analytics, and advertising cookies.",
      "Users can manage cookies in app settings; disabling may affect functionality.",
    ],
  },
  {
    title: "Privacy Policy:",
    content: [
      "YourSportz collects personal and usage data for app functionality and analytics.",
      "Data security measures are implemented; third-party services' privacy policies apply.",
      "Policy updates may occur periodically; check the latest version in the app.",
    ],
  },
  {
    title: "Privacy and Refund Policy:",
    content: [
      "User data is collected for statistics and insights, secured with encryption, and retained as necessary.",
      "Users consent to data collection, usage, and retention by using the app.",
      "Refunds are not issued for prepaid transactions unless services are defective or required by law.",
    ],
  },
  {
    title: "YourSportz App Refund Policy:",
    content: [
      "Prepaid transactions are non-refundable once services are utilized.",
      "Refunds may be considered for defective services within 7 days of usage.",
      "Legal obligations may necessitate refunds as per applicable laws or regulations.",
    ],
  },
];

const TermsConditions = () => {
  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen font-sans rounded-lg mb-10 ">
        <main className="container mx-auto py-8 px-6 md:px-20">
          <h1 className="text-3xl font-bold mt-20 mb-4 ">
            Term and conditions
          </h1>

          {TermsAndConditions.map((terms, index) => (
            <div
              key={index}
              className="bg-white py-6 px-2 md:px-6 rounded-lg shadow-md mb-8 "
            >
              <h1 className="text-xl font-bold mb-2 ml-5 text-gray-700 flex items-center">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                >
                  <circle
                    cx="7.5"
                    cy="7.5"
                    r="7.5"
                    fill="#554585"
                    fillOpacity="0.91"
                  />
                </svg>

                {terms.title}
              </h1>

              {terms.content.map((content, i) => (
                <p
                  key={i}
                  className="mb-2 pl-6 md:pl-14 text-gray-600 text-xs md:text-sm"
                >
                  {content}
                </p>
              ))}
            </div>
          ))}
          <div className="pl-2 md:pl-10">
            <p className="text-sm mb-1 ">
              For any assistance, contact our customer support at
              contact@yoursportz.in.
            </p>
            <p className="text-lg ">Thank you for choosing YourSportz!</p>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default TermsConditions;
