import React, { useContext, useState } from "react";
import Navbar from "../atom/navbar";
import Pill from "../atom/Pill";
import Blanket from "../atom/Blanket";
import { DataContext } from "../../context/DataContext";

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
        name: "NextJs"
    },
    {
        name: "Flutter"
    },
    {
        name: "Springboot"
    },
    {
        name: "Docker"
    },

]

const Cover = (props) => {
    const { navbarRef } = props
    const DataContextValue = useContext(DataContext)

    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const [currentlyHoveredText, setCurrentlyHoveredText] = useState(null)

    const handleHoverContent = (elementId) => {
        setCurrentlyHoveredText(elementId)
    }

    const handleClickOpenResume = () => {
        window.open("https://drive.google.com/file/d/1BanWLkT8ZikZQYJXUSGunUdNFtyOVBF-/view?usp=drive_link");
    }

    return (
        <div id="Home" ref={(el) => navbarRef.current["Home"] = el}>
            <div className="coverImageContainer">
                <div className="coverImage"></div>
                <div className="screenOverlay"></div>
                <div className="coverContent">
                    <span className="navbarText navbarText-medium" style={{ zIndex: 5, marginBottom: 16 }}>A Full Stack Web Developer and Mobile App Developer</span>

                    <p onMouseLeave={() => handleHoverContent(null)} onMouseOver={() => handleHoverContent("text1")} id="text1" className="fancy  nameTitle" style={{ zIndex: currentlyHoveredText === "text1" ? 7 : 5 }}>
                        <span className="outer">
                            <span className="inner" style={{ animationDelay: `${rand(-5000, 0)}ms` }}>
                                <span className="letter navbarText navbarText-big" style={{ animationDelay: `${1 * 1000}ms` }}>R</span>
                            </span>
                        </span>
                        <span className="outer">
                            <span className="inner" style={{ animationDelay: `${rand(-5000, 0)}ms` }}>
                                <span className="letter navbarText navbarText-big" style={{ animationDelay: `${2 * 1000}ms` }}>E</span>
                            </span>
                        </span>
                        <span className="outer">
                            <span className="inner" style={{ animationDelay: `${rand(-5000, 0)}ms` }}>
                                <span className="letter navbarText navbarText-big" style={{ animationDelay: `${3 * 1000}ms` }}>N</span>
                            </span>
                        </span>
                        <span className="outer">
                            <span className="inner" style={{ animationDelay: `${rand(-5000, 0)}ms` }}>
                                <span className="letter navbarText navbarText-big" style={{ animationDelay: `${4 * 1000}ms` }}>A</span>
                            </span>
                        </span>
                        <span className="outer">
                            <span className="inner" style={{ animationDelay: `${rand(-5000, 0)}ms` }}>
                                <span className="letter navbarText navbarText-big" style={{ animationDelay: `${5 * 1000}ms` }}>L</span>
                            </span>
                        </span>
                        <span className="outer">
                            <span className="inner" style={{ animationDelay: `${rand(-5000, 0)}ms` }}>
                                <span className="letter navbarText navbarText-big" style={{ animationDelay: `${6 * 1000}ms` }}>D</span>
                            </span>
                        </span>
                        <span className="outer">
                            <span className="inner" style={{ animationDelay: `${rand(-5000, 0)}ms` }}>
                                <span className="letter navbarText navbarText-big" style={{ animationDelay: `${7 * 1000}ms` }}>O</span>
                            </span>
                        </span>
                    </p>

                    <span onMouseLeave={() => handleHoverContent(null)} onMouseOver={() => handleHoverContent("text2")} id="text2" className="fancy nameTitle" style={{ zIndex: currentlyHoveredText === "text2" ? 7 : 5 }}>
                        <span className="outer2">
                            <span className="inner" style={{ animationDelay: `${rand(-5000, 0)}ms` }}>
                                <span className="letter navbarText navbarText-big" style={{ animationDelay: `${1 * 1000}ms` }}>L</span>
                            </span>
                        </span>
                        <span className="outer2">
                            <span className="inner" style={{ animationDelay: `${rand(-5000, 0)}ms` }}>
                                <span className="letter navbarText navbarText-big" style={{ animationDelay: `${2 * 1000}ms` }}>O</span>
                            </span>
                        </span>
                        <span className="outer2">
                            <span className="inner" style={{ animationDelay: `${rand(-5000, 0)}ms` }}>
                                <span className="letter navbarText navbarText-big" style={{ animationDelay: `${3 * 1000}ms` }}>U</span>
                            </span>
                        </span>
                        <span className="outer2">
                            <span className="inner" style={{ animationDelay: `${rand(-5000, 0)}ms` }}>
                                <span className="letter navbarText navbarText-big" style={{ animationDelay: `${4 * 1000}ms` }}>I</span>
                            </span>
                        </span>
                        <span className="outer2">
                            <span className="inner" style={{ animationDelay: `${rand(-5000, 0)}ms` }}>
                                <span className="letter navbarText navbarText-big" style={{ animationDelay: `${5 * 1000}ms` }}>S</span>
                            </span>
                        </span>
                    </span>

                    <div className="resumeButtonContainer" style={{ zIndex: 5, cursor: "pointer" }} onClick={handleClickOpenResume}>
                        SEE RESUME
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginTop: 10, zIndex: 5 }}>
                        <div className="whiteBox" />
                        <span style={{ margin: "0px 12px" }} className="navbarText navbarText-small">Building web & application with</span>
                        <div className="whiteBox" />
                    </div>

                    {DataContextValue.windowWidth <= 460 ?
                        (
                            <div className="scroll-container" >
                                <div className="scroll-text pillContainerScrollable" style={{ zIndex: 5 }}>
                                    {softSkill.map((eachSkill, index) => (
                                        <Pill key={index} name={eachSkill.name} />
                                    ))}
                                </div>
                            </div>
                        )
                        :
                        (
                            <div className="scroll-text pillContainer" style={{ zIndex: 5 }}>
                                {softSkill.map((eachSkill, index) => (
                                    <Pill key={index} name={eachSkill.name} />
                                ))}
                            </div>
                        )
                    }

                </div>

                <Blanket currentlyHoveredText={currentlyHoveredText} />
            </div>
        </div >
    )
}

export default Cover;