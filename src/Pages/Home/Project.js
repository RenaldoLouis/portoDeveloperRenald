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
            <div className=" projectCardContainer">
                <div className="projectCard">
                    <div className="projectExpContainer">
                        <div>
                            <div class="title-text">Jumlaty</div>
                            <div class="text">Ecommerce for Grocery</div>
                        </div>
                        <div className="seeAppButon">
                            SEE APP
                        </div>
                    </div>
                </div>
                <div className="projectCard">
                    <div className="projectExpContainer">
                        <div>
                            <div class="title-text">Jumlaty</div>
                            <div class="text">Ecommerce for Grocery</div>
                        </div>
                        <div className="seeAppButon">
                            SEE APP
                        </div>
                    </div>
                </div>
            </div>
            <div className=" projectCardContainer">
                <div className="projectCard">
                    <div className="projectExpContainer">
                        <div>
                            <div class="title-text">Jumlaty</div>
                            <div class="text">Ecommerce for Grocery</div>
                        </div>
                        <div className="seeAppButon">
                            SEE APP
                        </div>
                    </div>
                </div>
                <div className="projectCard">
                    <div className="projectExpContainer">
                        <div>
                            <div class="title-text">Jumlaty</div>
                            <div class="text">Ecommerce for Grocery</div>
                        </div>
                        <div className="seeAppButon">
                            SEE APP
                        </div>
                    </div>
                </div>
            </div>
            <div className=" projectCardContainer">
                <div className="projectCard">
                    <div className="projectExpContainer">
                        <div>
                            <div class="title-text">Jumlaty</div>
                            <div class="text">Ecommerce for Grocery</div>
                        </div>
                        <div className="seeAppButon">
                            SEE APP
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Projects;