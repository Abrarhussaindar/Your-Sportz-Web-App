import Layout from "../../components/Layout";
import privacy from "../../images/privacy.jpg"
import "../TermsConditions/Terms.css"

const PrivacyPolicy = [
  {
    title: "Cookie Policy:",
    content: [
      "Cookies enhance user experience by remembering preferences",
      "Types include essential, analytics, and advertising cookies.",
      "Users can manage cookies in app settings; disabling may affect functionality.",
    ],
  },
  {
    title: "Privacy Policy:",
    content: [
      "YourSportz collects personal and usage data for app functionality and analytics.",
      "Data security measures are implemented; third-party services' privacy policies apply.",
      "Policy updates may occur periodically; check the latest version in the app",
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
];

const TermsConditions = () => {
  return (
    <Layout>
      <main className="termsConditon">
        <div className="left">
          <h1>Privacy Policy</h1>
          <ul className="terms">
            {PrivacyPolicy.map((terms, index) => (
              <li key={index}>
                <p className="title">{terms.title}</p>
                <ul className="conditions">
                  {
                    terms.content.map((content, i) => (
                      <li key={i}><p>{content}</p></li>
                    ))
                  }
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="right">
          <img src={privacy} alt="" />
          <p>For any assistance, contact our customer support @ yoursportz.in.</p>
          <p>Thank you for choosing YourSportz!</p>
        </div>
      </main>
    </Layout>
  );
};

export default TermsConditions;
