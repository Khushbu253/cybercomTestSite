import React from "react";
import AboutBenefits from "../components/AboutUs/AboutBenefits";
import AboutServices from "../components/AboutUs/AboutServices";
import AboutUsContent from "../components/AboutUs/AboutUsContent";
import Features from "../components/AboutUs/Features";
import TeamMembers from "../components/AboutUs/TeamMembers";
import QualityPolicy from "../components/AboutUs/QualityPolicy";
import Footer from "../components/App/Footer";
import Layout from "../components/App/Layout";
import PageBanner from "../components/common/PageBanner";
import Partner from "../components/AboutUs/Partner";

const AboutUs = ({ serverData }) => {
  console.log(serverData,"serverData?.seoDetails")
  return (
    <Layout pageName="about" seoData={serverData?.seoDetails}>
      <PageBanner />
      <AboutServices
        servicesOne={serverData.servicesOne}
        servicesTwo={serverData.servicesTwo}
      />
      <AboutUsContent aboutContent={serverData.aboutContent}/>
      <Features/>
      <AboutBenefits />
      <QualityPolicy aboutUsPage={serverData.aboutUsPage} />
      <TeamMembers teamMembers={serverData.teamMembers}/>
      <Partner partner={serverData.partner} />
      <Footer footer={serverData.footer} />
    </Layout>
  );
};
export async function getServerData() {
  try {
    const seoDetails = await fetch(`${process.env.GATSBY_API_URL}seo`);
    const footer = await fetch(`${process.env.GATSBY_API_URL}address`);
    const servicesOne = await fetch(
      `${process.env.GATSBY_API_URL}about-us-page`
    );
    const servicesTwo = await fetch(
      `${process.env.GATSBY_API_URL}services-two`
    );
    const aboutContent = await fetch(
        `${process.env.GATSBY_API_URL}aboutpagesectionone`
      );
      const aboutUsPage = await fetch(
        `${process.env.GATSBY_API_URL}about-us-page`
      );
      const teamMembers = await fetch(
        `${process.env.GATSBY_API_URL}team-style-1`
      );
      const partner = await fetch(
        `${process.env.GATSBY_API_URL}team-style-1`
      );

      
    return {
      props: {
        seoDetails: await seoDetails.json(),
        footer: await footer.json(),
        servicesOne: await servicesOne.json(),
        servicesTwo: await servicesTwo.json(),
        aboutContent:await aboutContent.json(),
        aboutUsPage:await aboutUsPage.json(),
        teamMembers:await teamMembers.json(),
        partner:await partner.json(),
      },
    };
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}
// export const Head = () => <title>AboutUs Page</title>;
export default AboutUs;
