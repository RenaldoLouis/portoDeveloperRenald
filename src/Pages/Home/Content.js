import React from "react";
import Cover from "../../components/molecules/Cover";
import Services from "./Services";
import Projects from "./Project";
import Experience from "./Experience";

const Content = (props) => {
    const { navbarRef } = props;

    return (
        <div>
            <Cover navbarRef={navbarRef} />
            <div style={{ backgroundColor: "#E7E7E7" }}>
                <Services navbarRef={navbarRef} />
                <Projects navbarRef={navbarRef} />
                <Experience navbarRef={navbarRef} />
            </div>
        </div>
    )
}

export default Content;