import React from "react";

const Projects = () => {

    const projectData = [
        {
            title: "Jumlaty", desc: "Ecommerce for Grocery"
        },
        {
            title: "Hisabi", desc: "Record & Track Inventory"
        },
        {
            title: "RawatKulit", desc: "Informative Web"
        },
        {
            title: "Masareefy", desc: "Track Expenses"
        },
        {
            title: "Alphaverse", desc: "NFT Wallet"
        },

    ]

    return (
        <>
            <div className="sectionTitleContainer">
                <span className="sectionTitle">
                    Projects
                </span>
            </div>
            <div className="container">
                <div className=" projectCardContainer">
                    {projectData.map((eachProject) => (
                        <div id={eachProject.title} className="projectCard">
                            <div className="projectExpContainer">
                                <div>
                                    <div class="title-text">{eachProject.title}</div>
                                    <div class="text">{eachProject.desc}</div>
                                </div>
                                <div className="seeAppButon">
                                    SEE APP
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects;