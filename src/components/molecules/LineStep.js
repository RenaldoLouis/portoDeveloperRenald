import React from "react";

const LineStep = (props) => {
    const { experienceData } = props
    return (
        <div className="container" style={{ paddingBottom: 300, marginTop: 65, width: "100vh" }}>
            <div class='line-container'>
                <div class='progress-line'>
                    {/* <div class='progress' style={{ width: "50%" }}/> */}
                    {experienceData.map((eachExperience) => (
                        <div key={eachExperience.title} class='status'>
                            <div class={`dot ${eachExperience.status === "current" ? "current pulse" : ""}`}>
                                <div style={{ marginTop: 64 }}>
                                    <div>
                                        {eachExperience.year}
                                    </div>
                                    <div className="titleExperience">
                                        {eachExperience.title}
                                    </div>
                                    <div className="experienceDetails">
                                        <div class="text-with-circle"> {eachExperience.company}<span class="circle"></span></div>
                                        <div style={{ marginLeft: 19, textWrap: "nowrap" }}>
                                            {eachExperience.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LineStep;