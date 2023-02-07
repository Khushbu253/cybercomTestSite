import React from 'react'
import Footer from '../components/App/Footer';
import Layout from '../components/App/Layout';
import PageBanner from '../components/common/PageBanner';
import ProjectStartArea from '../components/Index/ProjectStartArea';
import PartnershipContent from '../components/partnership/PartnershipContent';
import PartnershipFeatures from '../components/partnership/PartnershipFeatures';
import PartnershipGrowth from '../components/partnership/PartnershipGrowth';
import PartnershipModal from '../components/partnership/PartnershipModal';

const partnership = ({ serverData }) => {
  return (
    <Layout pageName="partnership" seoData={serverData?.seoDetails}>
      <PageBanner />
      <PartnershipGrowth partnershipGrowth={serverData.partnershipGrowth}/>
      <PartnershipContent partnershipGrowth={serverData.partnershipGrowth}/>
      <PartnershipModal partnershipModal={serverData.partnershipModal}/>
      <PartnershipFeatures partnershipFeatures={serverData.partnershipFeatures}/>
      <ProjectStartArea ProjectStartArea={serverData.ProjectStartArea} />
      <Footer footer={serverData.footer} />
    </Layout>
  )
}
export async function getServerData() {
    try {
      const seoDetails = await fetch(`${process.env.GATSBY_API_URL}seo`);
      const footer = await fetch(`${process.env.GATSBY_API_URL}address`);
      const partnershipGrowth = await fetch(
        `${process.env.GATSBY_API_URL}partnership-section-1`
      );
      const partnershipModal = await fetch(
        `${process.env.GATSBY_API_URL}partnership-section-2`
      );
      const partnershipFeatures = await fetch(
        `${process.env.GATSBY_API_URL}partnership-section-3`
      );
      const ProjectStartArea = await fetch(
        `${process.env.GATSBY_API_URL}start-your-project`
      );
      
        
      return {
        props: {
          seoDetails: await seoDetails.json(),
          footer: await footer.json(),
          partnershipGrowth: await partnershipGrowth.json(),
          partnershipModal: await partnershipModal.json(),
          partnershipFeatures: await partnershipFeatures.json(),
          ProjectStartArea: await ProjectStartArea.json(),
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
  // export const Head = () => <title>Partnership Page</title>;
export default partnership