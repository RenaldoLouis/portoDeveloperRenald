import React, { useState } from "react";
import Navbar from "../atom/navbar";
import Pill from "../atom/Pill";
import Blanket from "../atom/Blanket";

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

const Cover = () => {
    const [currentlyHoveredText, setCurrentlyHoveredText] = useState(null)

    const handleHoverContent = (elementId) => {
        setCurrentlyHoveredText(elementId)
    }

    return (
        <div>
            <div className="coverImageContainer">
                <div className="coverImage"></div>
                <div className="screenOverlay"></div>
                <Navbar />
                <div className="coverContent">
                    <span className="navbarText navbarText-medium" style={{ zIndex: 5 }}>A Full Stack Web Developer and Mobile App Developer</span>

                    <span onMouseLeave={() => handleHoverContent(null)} onMouseOver={() => handleHoverContent("text1")} id="text1" className="navbarText navbarText-big nameTitle" style={{ zIndex: currentlyHoveredText === "text1" ? 7 : 5 }}>Renaldo</span>
                    <span onMouseLeave={() => handleHoverContent(null)} onMouseOver={() => handleHoverContent("text2")} id="text2" className="navbarText navbarText-big nameTitle" style={{ zIndex: currentlyHoveredText === "text2" ? 7 : 5 }}>Louis</span>

                    <div className="resumeButtonContainer" style={{ zIndex: 5 }}>
                        SEE RESUME
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginTop: 55, zIndex: 5 }}>
                        <div className="whiteBox" />
                        <span style={{ margin: "0px 12px" }} className="navbarText navbarText-small">Building web & application with</span>
                        <div className="whiteBox" />
                    </div>
                    <div className="pillContainer" style={{ zIndex: 5 }}>
                        {softSkill.map((eachSkill, index) => (
                            <Pill key={index} name={eachSkill.name} />
                        ))}
                    </div>
                </div>

                <Blanket currentlyHoveredText={currentlyHoveredText} />
            </div>
        </div >
    )
}

export default Cover;