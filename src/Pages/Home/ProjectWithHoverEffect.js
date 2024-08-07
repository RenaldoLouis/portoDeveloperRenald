import React, { useEffect, useState } from "react";
import jumlatyLogo from "../../assets/images/jumlatyLogo.png"
import hisabiLogo from "../../assets/images/hisabi.jpg"
import apcsLogo from "../../assets/images/apcsLogo.png"
import rawatKulitLogo from "../../assets/images/rawatKulit.PNG"
import masareefyLogo from "../../assets/images/masareefy.png"
import ethereumLogo from "../../assets/images/ethereum.jpg"

const ProjectWithHoverEffect = (props) => {
    const { navbarRef } = props;

    const projectData = [
        {
            title: "Apcs Music", desc: "Orchestra Informational Website", image: `url(${apcsLogo})`, link: "https://www.apcsmusic.com/"
        },
        {
            title: "Jumlaty", desc: "Ecommerce for Grocery", image: `url(${jumlatyLogo})`, link: "https://play.google.com/store/apps/details?id=com.jumlaty.customer&hl=en&gl=US"
        },
        {
            title: "Hisabi", desc: "Application to Record & Track Inventory", image: `url(${hisabiLogo})`, link: "https://play.google.com/store/apps/details?id=com.hisabi&hl=en&gl=US"
        },
        {
            title: "RawatKulit", desc: "Informative Web", image: `url(${rawatKulitLogo})`, link: "https://rawatkulit.netlify.app/home"
        },
        {
            title: "Masareefy", desc: "Help Business to Track Expenses", image: `url(${masareefyLogo})`, link: "https://play.google.com/store/apps/details?id=com.appsqueue.masareef&hl=en&gl=US"
        },
        {
            title: "Alphaverse", desc: "NFT Wallet", image: `url(${ethereumLogo})`, link: ""
        },

    ]

    const handleOpenApp = (link) => {
        window.open(link);
    }

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
                        <div id={eachProject.title} className="projectCard" style={{ backgroundImage: eachProject.image }}>
                            <div className="projectExpContainer">
                                <div>
                                    <h2 className="title-text">{eachProject.title}</h2>
                                    <p className="text">{eachProject.desc}</p>
                                </div>
                                <div className="seeAppButonProject" style={{ cursor: eachProject.link === "" ? "default" : "", background: eachProject.link === "" ? "#545b62" : "" }} onClick={() => eachProject.link === "" ? null : handleOpenApp(eachProject.link)}>
                                    {eachProject.link === "" ? "COMING SOON" : "SEE APP"}
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