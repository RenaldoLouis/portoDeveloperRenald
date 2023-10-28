import React from "react";
import Cover from "../../components/molecules/Cover";
import Services from "./Services";
import Projects from "./Project";
import Experience from "./Experience";

const Content = () => {
    return (
        <>
            <Cover />
            <div style={{ backgroundColor: "#E7E7E7" }}>
                <Services />
                <Projects />
                <Experience />
            </div>

            <div class="container">
                <div class="row">
                    <div class="col">
                        1 of 2
                    </div>
                    <div class="col">
                        2 of 2
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        1 of 3
                    </div>
                    <div class="col">
                        2 of 3
                    </div>
                    <div class="col">
                        3 of 3
                    </div>
                </div>

                <div class="row">
                    <div class="col align-self-start">
                        One of three columns
                    </div>
                    <div class="col align-self-center">
                        One of three columns
                    </div>
                    <div class="col align-self-end">
                        One of three columns
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content;