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

const Cover = React.forwardRef((props, ref) => {
    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const [currentlyHoveredText, setCurrentlyHoveredText] = useState(null)

    const handleHoverContent = (elementId) => {
        setCurrentlyHoveredText(elementId)
    }


    return (
        <div ref={(el) => ref.current["Home"] = el}>
            <div className="coverImageContainer">
                <div className="coverImage"></div>
                <div className="screenOverlay"></div>
                <div className="coverContent">
                    <span className="navbarText navbarText-medium" style={{ zIndex: 5 }}>A Full Stack Web Developer and Mobile App Developer</span>

                    <p onMouseLeave={() => handleHoverContent(null)} onMouseOver={() => handleHoverContent("text1")} id="text1" className="fancy navbarText navbarText-big nameTitle" style={{ zIndex: currentlyHoveredText === "text1" ? 7 : 5 }}>
                        <span className="outer">
                            <span className="inner" style={{ animationDelay: `${rand(-5000, 0)}ms` }}>
                                <span className="letter" style={{ animationDelay: `${1 * 1000}ms` }}>R</span>
                            </span>
                        </span>
                        <span className="outer">
                            <span className="inner" style={{ animationDelay: `${rand(-5000, 0)}ms` }}>
                                <span className="letter" style={{ animationDelay: `${2 * 1000}ms` }}>E</span>
                            </span>
                        </span>
                        <span className="outer">
                            <span className="inner" style={{ animationDelay: `${rand(-5000, 0)}ms` }}>
                                <span className="letter" style={{ animationDelay: `${3 * 1000}ms` }}>N</span>
                            </span>
                        </span>
                        <span className="outer">
                            <span className="inner" style={{ animationDelay: `${rand(-5000, 0)}ms` }}>
                                <span className="letter" style={{ animationDelay: `${4 * 1000}ms` }}>A</span>
                            </span>
                        </span>
                        <span className="outer">
                            <span className="inner" style={{ animationDelay: `${rand(-5000, 0)}ms` }}>
                                <span className="letter" style={{ animationDelay: `${5 * 1000}ms` }}>L</span>
                            </span>
                        </span>
                        <span className="outer">
                            <span className="inner" style={{ animationDelay: `${rand(-5000, 0)}ms` }}>
                                <span className="letter" style={{ animationDelay: `${6 * 1000}ms` }}>D</span>
                            </span>
                        </span>
                        <span className="outer">
                            <span className="inner" style={{ animationDelay: `${rand(-5000, 0)}ms` }}>
                                <span className="letter" style={{ animationDelay: `${7 * 1000}ms` }}>O</span>
                            </span>
                        </span>
                    </p>

                    <span onMouseLeave={() => handleHoverContent(null)} onMouseOver={() => handleHoverContent("text2")} id="text2" className="fancy navbarText navbarText-big nameTitle" style={{ zIndex: currentlyHoveredText === "text2" ? 7 : 5 }}>
                        <span className="outer">
                            <span className="inner" style={{ animationDelay: `${rand(-5000, 0)}ms` }}>
                                <span className="letter" style={{ animationDelay: `${1 * 1000}ms` }}>L</span>
                            </span>
                        </span>
                        <span className="outer">
                            <span className="inner" style={{ animationDelay: `${rand(-5000, 0)}ms` }}>
                                <span className="letter" style={{ animationDelay: `${2 * 1000}ms` }}>O</span>
                            </span>
                        </span>
                        <span className="outer">
                            <span className="inner" style={{ animationDelay: `${rand(-5000, 0)}ms` }}>
                                <span className="letter" style={{ animationDelay: `${3 * 1000}ms` }}>U</span>
                            </span>
                        </span>
                        <span className="outer">
                            <span className="inner" style={{ animationDelay: `${rand(-5000, 0)}ms` }}>
                                <span className="letter" style={{ animationDelay: `${4 * 1000}ms` }}>I</span>
                            </span>
                        </span>
                        <span className="outer">
                            <span className="inner" style={{ animationDelay: `${rand(-5000, 0)}ms` }}>
                                <span className="letter" style={{ animationDelay: `${5 * 1000}ms` }}>S</span>
                            </span>
                        </span>
                    </span>

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
})

export default Cover;