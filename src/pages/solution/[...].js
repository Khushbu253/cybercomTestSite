import React from "react";
import Footer from "../../components/App/Footer";
import Layout from "../../components/App/Layout";
import PageBanner from "../../components/common/PageBanner";
import BlogSidebar from "../../components/BlogContent/BlogSidebar";
import ReactMarkdown from "react-markdown";
import RelatedServices from "../../components/ServiceDetails/RelatedServices";
import ServiceSidebar from "../../components/ServiceDetails/ServiceSidebar";
const SolutionDetails = ({ serverData }) => {
  let { title, longText } = serverData.OurSolutions;
  console.log(serverData.OurSolutions,longText);
  return (
    <Layout pageName="blog Details">
      <PageBanner
        pageTitle="Blog Details"
        homePageText="Home"
        homePageUrl="/"
        activePageText={title}
      />
      <section className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <ReactMarkdown children={longText} />
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <ServiceSidebar />
                        </div>
                    </div>
                </div>
            </section>

            <RelatedServices />
      <Footer footer={serverData.footer} />
    </Layout>
  );
};
export async function getServerData(context) {
  try {
    const footer = await fetch(`${process.env.GATSBY_API_URL}address`);
    const OurSolutions = await fetch(
      `${process.env.GATSBY_API_URL}service-solutions/${context.params["*"]}`
    );
    return {
      props: {
        footer: await footer.json(),
        OurSolutions: await OurSolutions.json(),
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
export const Head = () => <title>Solution Page</title>;
export default SolutionDetails;