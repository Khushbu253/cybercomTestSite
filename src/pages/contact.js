import React from 'react'
import Footer from '../components/App/Footer';
import Layout from '../components/App/Layout';
import PageBanner from '../components/common/PageBanner';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';

const contact = ({serverData}) => {
  return (
    <Layout pageName="contact" seoData={serverData?.seoDetails}>
      <PageBanner pageTitle="Work" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Work" />
            <ContactInfo address={serverData.address}/>
            <ContactForm />
                      <Footer footer={serverData.footer} />
    </Layout>
  )
}

export async function getServerData() {
    try {
      const seoDetails = await fetch(`${process.env.GATSBY_API_URL}seo`);
      const footer = await fetch(`${process.env.GATSBY_API_URL}address`);
      const address = await fetch(`${process.env.GATSBY_API_URL}address`);
      return {
        props: {
          seoDetails: await seoDetails.json(),
          footer: await footer.json(),
          address: await address.json(),
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
  export const Head = () => <title>Contact Page</title>;

export default contact