import React from 'react'
import starIcon from '../../assets/images/star-icon.png'
import Image from "gatsby-image"


const AboutServices = (props) => {

const aboutUsPage= props.servicesOne
    const servicesTwo = props.servicesTwo
    return (
        <React.Fragment>
        {/* Service Left Image Style */}
        <div className="about-area pt-70">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-img">
                            {/* <Image fluid={servicesOne.image?.formats?.small?.url || servicesOne.image?.url} /> */}
                            <img src={aboutUsPage.sectionOneImage?.formats?.small?.url || aboutUsPage.sectionOneImage?.url} />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">
                                <span className="sub-title">
                                   {aboutUsPage.title}
                                </span>
                                
                                <h1>{aboutUsPage.header}</h1>
                                <p>{aboutUsPage.description}</p>
                                <ul className="about-list mb-0">
                                    {aboutUsPage.points.map(service => (
                                        <li key={service.id}>
                                            <i className={service.icon}></i>
                                            {service.point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Service Left Image Style */}

        {/* Service Right Image Style */}
        {/* <div className="our-mission-area pb-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="our-mission-content">
                            <div className="content">
                                <span className="sub-title">
                                    <img src={starIcon} alt="icon" /> {servicesTwo.simpleText}
                                </span>
                                
                                <h2>{servicesTwo.header}</h2>
                                <p>{servicesTwo.helpText}</p>

                                <ul className="our-mission-list mb-0">
                                    {servicesTwo.services.map(service => (
                                        <li key={service.id}>
                                            <i className={service.icon}></i>
                                            {service.services}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="our-mission-image">
                            <img src={servicesTwo.image?.formats?.small?.url || servicesTwo.image?.url} />
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        {/* End Service Right Image Style */}
    </React.Fragment>
    )
}

export default AboutServices;