import React from "react";
import Cover from "../../components/molecules/Cover";
import Services from "./Services";
import Projects from "./Project";
import Experience from "./Experience";

const Content = () => {
    return (
        <div>
            <Cover />
            <div style={{ backgroundColor: "#E7E7E7" }}>
                <Services />
                <Projects />
                <Experience />
            </div>


        </div>
    )
}

export default Content;