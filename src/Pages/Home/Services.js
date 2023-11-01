import React from "react";
import codeBlock from "../../assets/images/codeBlock.jpg"

const Services = () => {

    return (
        <>
            <div className="sectionTitleContainer">
                <span className="sectionTitle">
                    Services
                </span>
            </div>
            <div class="container">
                <div className="row ServicesContainer">
                    <div className="col servicesWhiteBox">
                        <div className="servicesHeader">
                            <img src={codeBlock} alt="codeBlock" style={{ marginRight: 42 }}></img>
                            <div>
                                Website Full Stack Development
                            </div>
                        </div>
                        <div style={{ margin: 25 }}>
                            <ol>
                                <li>Building responsive Single-Page-Apps (SPA) & PWA in React</li>
                                <li>Building Awesome Mobile Application using Flutter</li>
                                <li>Building RESTful APIs with Springboot and Docker</li>
                            </ol>
                        </div>
                    </div>
                    <div className="col servicesWhiteBox">
                        <div className="servicesHeader">
                            <img src={codeBlock} alt="codeBlock" style={{ marginRight: 42 }}></img>
                            <div>
                                Mobile Application Full Stack Development
                            </div>
                        </div>
                        <div style={{ margin: 25 }}>
                            <ol>
                                <li>Building responsive Single-Page-Apps (SPA) & PWA in React</li>
                                <li>Building Awesome Mobile Application using Flutter</li>
                                <li>Building RESTful APIs with Springboot and Docker</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;