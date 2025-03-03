import React, { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../../context/DataContext";
import LineStep from "../../components/molecules/LineStep";
import Timeline from "../../components/molecules/Timeline";

const Experience = (props) => {
    const { navbarRef, activeSection } = props;

    const [isVisible, setIsvisible] = useState(false)

    useEffect(() => {
        if (activeSection === "Experience" || activeSection === "Contact") {
            setIsvisible(true)
        }
    }, [activeSection])

    return (
        <div id="Experience" ref={(el) => navbarRef.current["Experience"] = el} style={{ paddingBottom: 100 }}>
            <div className="sectionTitleContainer">
                <span className="sectionTitle">
                    Experience
                </span>
            </div>

            {isVisible && (
                <Timeline />
            )}

        </div>
    )
}

export default Experience;