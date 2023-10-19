import React from "react";
import homeCard from "../../assets/images/background.jpg"
import Navbar from "../../components/atom/navbar";

const Content = () => {
    const softSkill = [
        {
            name: "Javascript"
        },
        {
            name: "Golang"
        },
        {
            name: "ReactJs"
        },
        {
            name: "React"
        },
        {
            name: "NodeJs"
        },
        {
            name: "Flutter"
        },
        {
            name: "Springboot"
        },

    ]
    return (
        <>
            <div className="coverImageContainer">
                <div className="coverImage"></div>
                <div className="screenOverlay"></div>
                <Navbar />
                <div className="coverContent">
                    <span className="navbarText navbarText-medium">A Full Stack Web Developer and Mobile App Developer</span>
                    <span className="navbarText navbarText-big">Fernando Renaldo Louis</span>
                    <div>
                        SEE RESUME
                    </div>
                    <span className="navbarText navbarText-small">Building web & application with</span>
                    <div>
                        {softSkill.map((eachSkill) => (
                            <div>
                                {eachSkill.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        1 of 2
                    </div>
                    <div class="col">
                        2 of 2
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        1 of 3
                    </div>
                    <div class="col">
                        2 of 3
                    </div>
                    <div class="col">
                        3 of 3
                    </div>
                </div>

                <div class="row">
                    <div class="col align-self-start">
                        One of three columns
                    </div>
                    <div class="col align-self-center">
                        One of three columns
                    </div>
                    <div class="col align-self-end">
                        One of three columns
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content;