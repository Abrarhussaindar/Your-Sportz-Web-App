import { useTranslation } from "react-i18next";
import Layout from "../../components/Layout";
import privacy from "../../images/privacy.jpg"
import "../TermsConditions/Terms.css"



const TermsConditions = () => {
  const { t } = useTranslation()
  const PrivacyPolicy = [
    {
      title: `${t("privacyTitle1")}`,
      content: [
        `${t("privacyContent11")}`,
        `${t("privacyContent12")}`,
        `${t("privacyContent13")}`,
      ],
    },
    {
      title: `${t("privacyTitle2")}`,
      content: [
        `${t("privacyContent21")}`,
        `${t("privacyContent22")}`,
        `${t("privacyContent23")}`,
      ],
    },
    {
      title: `${t("privacyTitle3")}`,
      content: [
        `${t("privacyContent31")}`,
        `${t("privacyContent32")}`,
        `${t("privacyContent33")}`,
      ],
    },
  ];
  return (
    <Layout>
      <main className="termsConditon">
        <div className="left">
          <h1>{t("privacyH1")}</h1>
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
          <p>{t("privacyLeftP")}</p>
          <p>{t("privacyLeftH4")}</p>
        </div>
      </main>
    </Layout>
  );
};

export default TermsConditions;
