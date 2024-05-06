
import { useTranslation } from "react-i18next";
import Layout from "../../components/Layout";
import terms from "../../images/terms.jpg"
import "./Terms.css"



const TermsConditions = () => {
  const { t } = useTranslation()
  const TermsAndConditions = [
    {
      title: `${t("termsTitle1")}`,
      content: [
        `${t("termsContent11")}`,
        `${t("termsContent12")}`,
        `${t("termsContent13")}`,
        `${t("termsContent14")}`,
      ],
    },
    {
      title: `${t("termsTitle2")}`,
      content: [
        `${t("termsContent21")}`,
        `${t("termsContent22")}`,
        `${t("termsContent23")}`,
      ],
    },
    {
      title: `${t("termsTitle3")}`,
      content: [
        `${t("termsContent31")}`,
        `${t("termsContent32")}`,
        `${t("termsContent33")}`,
      ],
    },
    {
      title: `${t("termsTitle4")}`,
      content: [
        `${t("termsContent41")}`,
        `${t("termsContent42")}`,
        `${t("termsContent43")}`,
      ],
    },
    {
      title: `${t("termsTitle5")}`,
      content: [
        `${t("termsContent51")}`,
        `${t("termsContent52")}`,
        `${t("termsContent53")}`,
      ],
    },
  ];
  return (
    <Layout>
      <main className="termsConditon">
        <div className="left">
          <h1>{t("termsH1")}</h1>
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
          <p>{t("termLeftP")}</p>
          <h4>{t("termLeftH4")}</h4>
        </div>
      </main>
    </Layout>
  );
};

export default TermsConditions;
