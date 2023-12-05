import React from "react";
import Cover from "../../components/molecules/Cover";
import Services from "./Services";
import Projects from "./Project";
import Experience from "./Experience";

const Content = React.forwardRef((props, ref) => {

    return (
        <div>
            <Cover ref={ref} />
            <div style={{ backgroundColor: "#E7E7E7" }}>
                <Services ref={ref} />
                <Projects ref={ref} />
                <Experience ref={ref} />
            </div>
        </div>
    )
})

export default Content;