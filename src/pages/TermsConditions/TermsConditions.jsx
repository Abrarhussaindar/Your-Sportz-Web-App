
import Layout from "../../components/Layout";
import terms from "../../images/terms.jpg"
import "./Terms.css"

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
      <main className="termsConditon">
        <div className="left">
          <h1>Terms and Conditions</h1>
          <ul className="terms">
            {TermsAndConditions.map((terms, index) => (
              <li className="liTerms" key={index}>
                <p className="title">{terms.title}</p>
                <ul className="conditions">
                  {terms.content.map((content, i) => (
                    <li key={i}><p>{content}</p></li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="right">
          <img src={terms} alt="" />
          <p>For any assistance, contact our customer support  @ yoursportz.in.</p>
          <h4>Thank you for choosing YourSportz!</h4>
        </div>
      </main>
    </Layout>
  );
};

export default TermsConditions;
