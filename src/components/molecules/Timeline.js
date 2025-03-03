import React from "react";
import bnilife from '../../assets/images/bnilife.png';
import proint from '../../assets/images/proint.jpeg';
import tenxers from '../../assets/images/10xers.jpeg';
import apcs from '../../assets/images/apcsLogo.png';
import commsult from '../../assets/images/commsult.jpeg';

const Timeline = (props) => {
    return (
        <div className="container">
            <div className="timeline">
                <div className="timelineContainer left-container">
                    <img alt="bnilife" style={{ background: "white" }} src={bnilife}></img>
                    <div className="text-box">
                        <h2>BNI Life</h2>
                        <div>Dec 2019 - Jul 2020</div>
                        <h5>Data Analyst</h5>
                        <p style={{ overflowWrap: "anywhere" }}>Data Preparation and Data Visualization using Tableau</p>
                    </div>
                    <span className="left-container-arrow"></span>
                </div>
                <div className="timelineContainer right-container">
                    <img alt="proint" src={proint}></img>
                    <div className="text-box">
                        <h2>PT. Pro-Int Dinamika</h2>
                        <div>Jul 2020 - Jan 2021</div>
                        <h5>Software Developer</h5>
                        <p style={{ overflowWrap: "anywhere" }}>Developing Webiste for human resource management using C# and .NET</p>
                    </div>
                    <span className="right-container-arrow"></span>
                </div>
                <div className="timelineContainer left-container">
                    <img alt="tenxers" src={tenxers}></img>
                    <div className="text-box">
                        <h2>10Xers Labs</h2>
                        <div>Feb 2022 - Sep 2022</div>
                        <h5>Software Developer</h5>
                        <p style={{ overflowWrap: "anywhere" }}>Develop multiple mobile apps and website to help business in India and Arab</p>
                    </div>
                    <span className="left-container-arrow"></span>
                </div>
                <div className="timelineContainer right-container">
                    <img alt="APCS" src={apcs}></img>
                    <div className="text-box">
                        <h2>APCS Studio</h2>
                        <div>May 2024 - Present</div>
                        <h5>IT Manager</h5>
                        <p style={{ overflowWrap: "anywhere" }}>Developed a responsive company website with a ticketing system, email notifications, and data-driven UX improvements, enhancing event management and user engagement.</p>
                    </div>
                    <span className="left-container-arrow"></span>
                </div>
                <div className="timelineContainer left-container">
                    <img alt="commsult" src={commsult}></img>
                    <div className="text-box">
                        <h2>commsult AG</h2>
                        <div>Jun 2021 - Present</div>
                        <h5>Full Stack Developer</h5>
                        <p style={{ overflowWrap: "anywhere" }}>Develop SaaS system to help Beverage business in german</p>
                    </div>
                    <span className="right-container-arrow"></span>
                </div>
            </div>
        </div >
    )
}

export default Timeline;