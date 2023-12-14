import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import LineStep from "../../components/molecules/LineStep";
import Timeline from "../../components/molecules/Timeline";

const Experience = (props) => {
    const { navbarRef } = props;
    const DataContextValue = useContext(DataContext)

    const experienceData = [
        {
            year: "2020",
            title: "Data Analyst",
            company: "BNI Life",
            role: "internship",
            status: "done"
        },
        {
            year: "2020",
            title: "Software Developer",
            company: "Pro-Int Dinamika",
            role: "internship",
            status: "done"
        },
        {
            year: "2020",
            title: "Front-End Developer",
            company: "10XERS Company",
            role: "Part Time",
            status: "done"
        },
        {
            year: "2020",
            title: "Full-Stack Developer",
            company: "Commsult",
            role: "Full Time",
            status: "current"
        }
    ]
    return (
        <div id="Experience" ref={(el) => navbarRef.current["Experience"] = el} style={{ paddingBottom: 100 }}>
            <div className="sectionTitleContainer">
                <span className="sectionTitle">
                    Experience
                </span>
            </div>

            {/* <LineStep
                experienceData={experienceData}
            /> */}

            <Timeline />

        </div>
    )
}

export default Experience;