import React from 'react'
import Footer from '../components/App/Footer';
import Layout from '../components/App/Layout';
import PageBanner from '../components/common/PageBanner';
import TechnologySection from '../components/TechnologySection';

const technology = ({serverData}) => {
  return (
    <Layout pageName="technology" seoData={serverData?.seoDetails}>
      <PageBanner />
      <TechnologySection technologySection={serverData.technologySection}/>
      <Footer footer={serverData.footer} />
    </Layout>
  )
}

export async function getServerData() {
    try {
      const seoDetails = await fetch(`${process.env.GATSBY_API_URL}seo`);
      const footer = await fetch(`${process.env.GATSBY_API_URL}address`);
      const technologySection = await fetch(`${process.env.GATSBY_API_URL}technology`);
        
      return {
        props: {
          seoDetails: await seoDetails.json(),
          footer: await footer.json(),
          technologySection: await technologySection.json()
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
  // export const Head = () => <title>Technology Page</title>;
export default technology