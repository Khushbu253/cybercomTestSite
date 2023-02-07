import React from 'react'
import AboutFeatures1 from '../../assets/images/about/features/aboutFeatures1.png'
import AboutFeatures2 from '../../assets/images/about/features/aboutFeatures2.png'
import AboutFeatures3 from '../../assets/images/about/features/aboutFeatures3.png'
import AboutFeatures4 from '../../assets/images/about/features/aboutFeatures4.png'

const Features = () =>{
return(
        <React.Fragment>
            <section className="aboutUs-Features bg-fafafb pt-70 pb-70">
                <div className="section-title">
                    <span className="sub-title">
                        Our Features
                    </span>
                    <h2>Selecting a right IT partner is an assurance towards success</h2>
                    <p>We the team of Cybercom executes with a friendly approach, which helps you to achieve
                        your vision faster, precise, targeted and comprehensive IT solutions.
                    </p>
                </div>
                <div className="container">
                    <div className='pb-70 about-us-CustomFeature'>
                        <div className="row align-items-center custom-mb-20">
                        <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <div className="content">
                                        <h2>Overview</h2>
                                        <p>Cybercom was commenced by enterprising team of professionals with a strong focus on providing services and solutions for eCommerce businesses. Since selecting Magento as the eCommerce platform for growth, Cybercom has successfully deployed more than 700 eCommerce solutions for clients all over the world. Today Cybercom has grown its team of dedicated e-commerce specialists to more than 80 employees working in development center in Ahmedabad, India and have expanded our global reach through alliance partners in Singapore, USA,UK and Australia.</p>
                                        <p>Our full range of services begins with strategy consultation and extends through experience design, web and mobile application development, integrations, data handling, internet marketing and ongoing support. Cybercom offers complete set of eCommerce services that will elevate your business to the next level. We are fully focused on e-commerce and the technology ecosystem that supports it. we deliver next generation tools and exceptional experiences that enable consumers at every digital touch point</p>
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="about-img">
                                    <img src={AboutFeatures1} alt="AboutFeatures1" />
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-img">
                                    <img src={AboutFeatures2} alt="AboutFeatures2" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <div className="content">
                                        <p>Our focus is to address and overcome various industry and/or technological challenges through rigorous internal activities, research and solutions. We take holistic approach to create exceptional e-commerce experiences to maximize your online potential! By providing unique competitive advantage, we enable customers to leverage innovation to stay ahead of competition.</p>
                                        <p>We helps clients fulfil their eCommerce goals by offering online stores on Magento platform at a fraction of the cost and time compared to any alternative solutions. We seek to build sustained, successful relationships, giving each client customized solutions, strategic counsel and zealous service. Our objective is to deliver robust, scalable, viable and quality solutions while adhering to strict deadline.</p>
                                    </div>
                                    <div className='about-tag-line'>
                                        <p className='about-tag-lineText'>You can get highly skilled and stable workforce with lower overheads than any other part of the world.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pb-70 about-us-CustomFeature'>
                        <div className="row align-items-center custom-mb-20">
                        <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <div className="content">
                                        <h2>Corporate Facts</h2>
                                        <p>At Cybercom we’re constantly learning from international project experiences, which help us deliver better solutions to clients across diverse industries, different countries and cultures.
                                            Our experience has become successful antidote to traditional off-shore barriers such as time-zone, culture and language differences.</p>
                                        <p> We employ and foster qualified professionals, accredited with e-commerce domain and technical know-how. Our people are a major component of our success – and many of them have been with us for about 10 years. Team Cybercom brings together diverse people with varied skill set to promote collaboration, improve processes and accelerate their core competency to drive exceptional business results.</p>
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="about-img">
                                    <img src={AboutFeatures3} alt="AboutFeatures1" />
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-img">
                                    <img src={AboutFeatures4} alt="AboutFeatures2" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <div className="content">
                                        <p>Cybercom is equipped with high-tech and competent infrastructural facilities powered by latest softwares, tools and technology to deliver uninterrupted services in line with varied business needs of the clients. We focus on security, connectivity, reliability and scalability of our infrastructure to achieve high performance, continuous operation and take our business to next level.</p>
                                        <p>With extensive experience, e-commerce expertise, robust infrastructure and professional workforce we offer advanced services through innovative solutions, best business practices and cutting-edge technologies.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Features;