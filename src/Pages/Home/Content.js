import React from "react";
import Cover from "../../components/molecules/Cover";
import Services from "./Services";
import Projects from "./Project";
import Experience from "./Experience";
import ProjectWithHoverEffect from "./ProjectWithHoverEffect";

const Content = (props) => {
    const { navbarRef, activeSection } = props;

    return (
        <div>
            <Cover navbarRef={navbarRef} />
            <div style={{ backgroundColor: "#E7E7E7" }}>
                <Services navbarRef={navbarRef} />
                {/* <Projects navbarRef={navbarRef} /> */}
                <ProjectWithHoverEffect navbarRef={navbarRef} />
                <Experience navbarRef={navbarRef} activeSection={activeSection} />
            </div>
        </div>
    )
}

export default Content;