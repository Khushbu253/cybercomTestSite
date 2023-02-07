import React from 'react'
import Footer from '../components/App/Footer';
import Layout from '../components/App/Layout';
import PageBanner from '../components/common/PageBanner';
import Portfolio from '../components/Work/Portfolio';
import Process from '../components/Work/Process';
import Project from '../components/Work/Project';
import StartProject from '../components/Work/StartProject';
import Testimonials from '../components/Work/Testimonials';

const work = ({serverData}) => {
  return (
    <Layout pageName="work" seoData={serverData?.seoDetails}>
      <PageBanner pageTitle="Work" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Work" />

      <Project projects={serverData.projects}/>
      <Portfolio portfolio={serverData.portfolio} portfolioProjects={serverData.portfolioProjects}/>
      <StartProject startYourProject={serverData.startYourProject}/>
      <Process howItWork={serverData.howItWork}/>
      <Testimonials testimonial={serverData.testimonial} />
      <Footer footer={serverData.footer} />
    </Layout>
  )
}

export async function getServerData() {
    try {
      const seoDetails = await fetch(`${process.env.GATSBY_API_URL}seo`);
      const footer = await fetch(`${process.env.GATSBY_API_URL}address`);
      const projects = await fetch(`${process.env.GATSBY_API_URL}work-section-1`);
      const portfolio = await fetch(`${process.env.GATSBY_API_URL}recent-projects`);
      const portfolioProjects = await fetch(`${process.env.GATSBY_API_URL}projects`);
      const startYourProject= await fetch(`${process.env.GATSBY_API_URL}start-your-project`);
      const howItWork= await fetch(`${process.env.GATSBY_API_URL}how-it-work`);
      const testimonial= await fetch(`${process.env.GATSBY_API_URL}testimonials`);
      return {
        props: {
          seoDetails: await seoDetails.json(),
          footer: await footer.json(),
          projects: await projects.json(),
          portfolio:await portfolio.json(),
          portfolioProjects:await portfolioProjects.json(),
          startYourProject:await startYourProject.json(),
          howItWork:await howItWork.json(),
          testimonial: await testimonial.json()
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
  // export const Head = () => <title>Work Page</title>;

export default work