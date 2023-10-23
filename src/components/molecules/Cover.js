import React from "react";
import Navbar from "../atom/navbar";
import Pill from "../atom/Pill";

const Cover = () => {
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
        <div>
            <div className="coverImageContainer">
                <div className="coverImage"></div>
                <div className="screenOverlay"></div>
                <Navbar />
                <div className="coverContent">
                    <span className="navbarText navbarText-medium">A Full Stack Web Developer and Mobile App Developer</span>
                    <span style={{ width: "32rem", lineHeight: "100%", textAlign: "center" }} className="navbarText navbarText-big">Renaldo Louis</span>
                    <div className="resumeButtonContainer">
                        SEE RESUME
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginTop: 55 }}>
                        <div className="whiteBox" />
                        <span style={{ margin: "0px 12px" }} className="navbarText navbarText-small">Building web & application with</span>
                        <div className="whiteBox" />
                    </div>
                    <div className="pillContainer">
                        {softSkill.map((eachSkill) => (
                            <Pill name={eachSkill.name} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cover;