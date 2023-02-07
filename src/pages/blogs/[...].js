import React from "react";
import Footer from "../../components/App/Footer";
import Layout from "../../components/App/Layout";
import PageBanner from "../../components/common/PageBanner";
import BlogSidebar from "../../components/BlogContent/BlogSidebar";
import ReactMarkdown from "react-markdown";
const blogDetails = ({ serverData }) => {
  let { title, content } = serverData.OurBlog;
  console.log(serverData.OurBlog);
  return (
    <Layout pageName="blog Details">
      <PageBanner
        pageTitle="Blog Details"
        homePageText="Home"
        homePageUrl="/"
        activePageText={title}
      />
      <section className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <ReactMarkdown children={content} />
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
      <Footer footer={serverData.footer} />
    </Layout>
  );
};
export async function getServerData(context) {
  try {
    const footer = await fetch(`${process.env.GATSBY_API_URL}address`);
    const OurBlog = await fetch(
      `${process.env.GATSBY_API_URL}blogs/${context.params["*"]}`
    );
    return {
      props: {
        footer: await footer.json(),
        OurBlog: await OurBlog.json(),
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
export const Head = () => <title>Home Page</title>;
export default blogDetails;
