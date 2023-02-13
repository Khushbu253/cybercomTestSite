import * as React from "react";

const IndexPage = ({ serverData }) => {
  console.log(serverData?.footer?.description);
  return (
    <>
    <div>test static data</div>
     <div>{serverData?.footer?.description}---test</div>
    </>
    
  );
};

export default IndexPage

export const Head = () => <title>Home Page</title>

export async function getServerData() {
  try {
    const footer = await fetch(`https://dummyjson.com/products/1`);
    return {
      props: {
        footer: await footer.json(),
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



// import * as React from "react";
// // import Layout from "../components/App/Layout";
// // import Banner from "../components/Index/Banner";
// // import OurSolutions from "../components/Index/OurSolutions";
// // import OurFeatures from "../components/Index/OurFeatures";
// // import OurServices from "../components/Index/OurServices";
// // import RecentProjects from "../components/Index/RecentProjects";
// // import Testimonials from "../components/Index/Testimonials";
// // import Pricing from "../components/Index/Pricing";
// // import Partner from "../components/Index/Partner";
// // import OurBlog from "../components/Index/OurBlog";
// // import ProjectStartArea from "../components/Index/ProjectStartArea";
// // import Footer from "../components/App/Footer";
// // import SEO from "../components/SEO";

// const IndexPage = ({ serverData }) => {
//   console.log(serverData,"check url")

//   return (
//     <>
//     <h2>title - {serverData.test.title}</h2>
//     <h2>description - {serverData.test.description}</h2>
//     <h2>price - {serverData.test.price}</h2>
//     </>
//       // <Layout pageName="home" seoData={serverData?.seoDetails}>
     
//       //   <Banner data={serverData?.banner} />
//       //   <OurSolutions
//       //     data={serverData.solution}
//       //     serviceSolutions={serverData.serviceSolutions}
//       //   />
//       //   <OurServices
//       //     servicesOne={serverData.servicesOne}
//       //     servicesTwo={serverData.servicesTwo}
//       //   />
//       //   <OurFeatures data={serverData.features} />
//       //   <RecentProjects
//       //     recentProjects={serverData.recentProjects}
//       //     projects={serverData.projects}
//       //   />
//       //   <Pricing />
//       //   <Testimonials Testimonials={serverData.Testimonials} />
//       //   <Partner Partner={serverData.Partner} />

//       //   <OurBlog OurBlog={serverData.OurBlog} />
//       //   <ProjectStartArea ProjectStartArea={serverData.ProjectStartArea} />
//       //   <Footer footer={serverData.footer} />
//       // </Layout>
//   );
// };

// export default IndexPage;

// export async function getServerData() {

//   try {
//     // console.log(process.env.GATSBY_API_URL,"check url")
//     const test = await fetch(`https://dummyjson.com/products/1`);
//     // const seoDetails = await fetch(`https://api.cybercomcreation.com/seo`);
//     // const footer = await fetch(`https://api.cybercomcreation.com/address`);
//     // const banner = await fetch(`https://api.cybercomcreation.com/default-banner`);
//     // const solution = await fetch(`https://api.cybercomcreation.com/solution`);
//     // const serviceSolutions = await fetch(
//     //   `https://api.cybercomcreation.com/service-solutions`
//     // );
//     // const servicesOne = await fetch(
//     //   `https://api.cybercomcreation.com/services-one`
//     // );
//     // const servicesTwo = await fetch(
//     //   `https://api.cybercomcreation.com/services-two`
//     // );
//     // const features = await fetch(`https://api.cybercomcreation.com/our-features`);
//     // const RecentProjects = await fetch(
//     //   `https://api.cybercomcreation.com/recent-projects`
//     // );
//     // const projects = await fetch(`https://api.cybercomcreation.com/projects`);
//     // const Testimonials = await fetch(
//     //   `https://api.cybercomcreation.com/testimonials`
//     // );
//     // const Partner = await fetch(`https://api.cybercomcreation.com/partner`);
//     // const OurBlog = await fetch(`https://api.cybercomcreation.com/blogs`);
//     // const ProjectStartArea = await fetch(
//     //   `https://api.cybercomcreation.com/start-your-project`
//     // );
//     // if (!res.ok) {
//     //   throw new Error(`Response failed`)
//     // }

//     // console.log(servicesOne, servicesTwo);
//     return {
//       props: {
//         test: await test.json()
//         // seoDetails: await seoDetails.json(),
//         // footer: await footer.json(),
//         // banner: await banner.json(),
//         // solution: await solution.json(),
//         // serviceSolutions: await serviceSolutions.json(),
//         // features: await features.json(),
//         // servicesOne: await servicesOne.json(),
//         // servicesTwo: await servicesTwo.json(),
//         // recentProjects: await RecentProjects.json(),
//         // projects: await projects.json(),
//         // Testimonials: await Testimonials.json(),
//         // Partner: await Partner.json(),
//         // OurBlog: await OurBlog.json(),
//         // ProjectStartArea: await ProjectStartArea.json(),
//       },
//     };
//   } 
//   catch (error) {
//     return {
//       status: 500,
//       headers: {
//         "Cache-Control": "no-cache"
//       },
//       props: {},
//     };
//   }
// }
// // export const Head = () =><><meta name="check on ssr" content="test meta"/>  <title>Home Page</title></>;

