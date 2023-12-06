import React, { useEffect, useState } from "react";
import jumlatyLogo from "../../assets/images/jumlatyLogo.png"
import hisabiLogo from "../../assets/images/hisabi.jpg"
import rawatKulitLogo from "../../assets/images/rawatKulit.PNG"
import masareefyLogo from "../../assets/images/masareefy.png"
import ethereumLogo from "../../assets/images/ethereum.jpg"

const ProjectWithHoverEffect = (props) => {
    const { navbarRef } = props;

    const projectData = [
        {
            title: "Jumlaty", desc: "Ecommerce for Grocery", link: `url(${jumlatyLogo})`
        },
        {
            title: "Hisabi", desc: "Record & Track Inventory", link: `url(${hisabiLogo})`
        },
        {
            title: "RawatKulit", desc: "Informative Web", link: `url(${rawatKulitLogo})`
        },
        {
            title: "Masareefy", desc: "Track Expenses", link: `url(${masareefyLogo})`
        },
        {
            title: "Alphaverse", desc: "NFT Wallet", link: `url(${ethereumLogo})`
        },

    ]

    return (
        <div id="Projects" ref={(el) => navbarRef.current["Projects"] = el}>
            <div className="sectionTitleContainer">
                <span className="sectionTitle">
                    Projects
                </span>
            </div>
            <div className="container">
                <div className=" projectCardContainer">
                    {projectData.map((eachProject) => (
                        <div id={eachProject.title} className="projectCard" style={{ backgroundImage: eachProject.link }}>
                            <div className="projectExpContainer">
                                <div>
                                    <h2 className="title-text">{eachProject.title}</h2>
                                    <p className="text">{eachProject.desc}</p>
                                </div>
                                <div className="seeAppButonProject">
                                    SEE APP
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectWithHoverEffect;