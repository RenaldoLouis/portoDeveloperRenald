import React from "react";

const Projects = () => {

    const projectData = [
        {
            title: "Jumlaty", desc: "jumlaty desc"
        },
        {
            title: "Hisabi", desc: "jumlaty desc"
        },
        {
            title: "RawatKulit", desc: "jumlaty desc"
        },
        {
            title: "Masareefy", desc: "jumlaty desc"
        },
        {
            title: "Alphaverse", desc: "jumlaty desc"
        },

    ]

    return (
        <>
            <div className="sectionTitleContainer">
                <span className="sectionTitle">
                    Projects
                </span>
            </div>

            <div className=" projectCardContainer">
                <div className="projectCard">
                    <div className="projectExpContainer">
                        <p class="title-text">Jumlaty</p>
                        <p class="text">Ecommerce for Grocery</p>
                    </div>
                </div>
                <div className="projectCard">
                    <div className="projectExpContainer">
                        <p class="text">Your Text Here</p>

                    </div>
                </div>
            </div>
            <div className=" projectCardContainer">
                <div className="projectCard">
                    <div className="projectExpContainer">
                        <p class="text">Your Text Here</p>

                    </div>
                </div>
                <div className="projectCard">
                    <div className="projectExpContainer">
                        <p class="text">Your Text Here</p>

                    </div>
                </div>
            </div>
            <div className=" projectCardContainer">
                <div className="projectCard">
                    <div className="projectExpContainer">
                        <p class="text">Your Text Here</p>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Projects;