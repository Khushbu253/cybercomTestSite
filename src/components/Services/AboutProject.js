import React from 'react'
import {Link} from 'gatsby'
// import { graphql, useStaticQuery } from "gatsby"
import shape from '../../assets/images/shape/circle-shape1.png'
import StartProjectBanner from '../../assets/images/start-project-portfolio.png'
import Contact from '../../assets/images/service-contact.png'
import People from '../../assets/images/services/people.png'
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";


const query = gql`
{
    startYourProject {
      images {
        id,
        name,
        alternativeText,
        formats,
        width,
        height,
        ext,
        url,
        previewUrl,
        mime,
        size
      }
      title
      shortText
      btnText
      btnLink
    }
}
`;


const AboutProject = ({startYourProject}) => {
    
    const {
        images, title, shortText, btnText, btnLink
    } = startYourProject 

    return (
        <div className="project-start-area custom-project-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12">
                        <div className="project-start-image">
                            <img src={Contact} alt="contact" />
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div className="project-start-content project-start-service-content">
                            <h2>Let us know about your project</h2>
                            <p>We would love to listen and help you achieve your ecommerce goal.</p>
                            
                            <Link to={btnLink} className="default-btn">
                                <i className="flaticon-cc-team">
                                    <img src={People} alt="people"></img></i> 
                                    Hire Team Cybercom
                                <span></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
         
        </div>
    )
}

export default AboutProject