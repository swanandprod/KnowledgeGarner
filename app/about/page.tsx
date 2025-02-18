import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About KnowledgeGarner"
        description="Welcome to KnowledgeGarner.com, where we help product leaders rescue, revitalize, and rethink their portfolios. If you’ve ever struggled with stagnant products, outdated offerings, or tough decisions about sunsetting, you’re in the right place."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
