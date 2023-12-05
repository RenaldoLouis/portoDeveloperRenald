import React, { useEffect, useState } from "react";

const Projects = React.forwardRef((props, ref) => {

    const [preElement, setPreElement] = useState(null);

    const projectData = [
        {
            title: "Jumlaty", desc: "Ecommerce for Grocery"
        },
        {
            title: "Hisabi", desc: "Record & Track Inventory"
        },
        {
            title: "RawatKulit", desc: "Informative Web"
        },
        {
            title: "Masareefy", desc: "Track Expenses"
        },
        {
            title: "Alphaverse", desc: "NFT Wallet"
        },

    ]

    useEffect(() => {
        if (preElement) {
            preElement.addEventListener("mousemove", (e) => {
                rotateElement(e, preElement);
            });
        }
    }, [preElement])

    function rotateElement(event, element) {
        // get mouse position
        const x = event.clientX;
        const y = event.clientY;
        // console.log(x, y)

        // find the middle
        const middleX = window.innerWidth / 2;
        const middleY = window.innerHeight / 2;
        // console.log(middleX, middleY)

        // get offset from middle as a percentage
        // and tone it down a little
        const offsetX = ((x - middleX) / middleX) * 45;
        const offsetY = ((y - middleY) / middleY) * 45;
        // console.log(offsetX, offsetY);

        if (element) {
            // set rotation
            element.style.setProperty("--rotateX", offsetX + "deg");
            element.style.setProperty("--rotateY", -1 * offsetY + "deg");
        }
    }

    const handleAddAnimation = (title) => {
        const pre = document.getElementById(title);
        setPreElement(pre)
    }

    const handleRemoveAnimation = (title) => {
        const pre = document.getElementById(title);
        // setPreElement(null)
        if (pre) {
            pre.style.setProperty("--rotateX", 0 + "deg");
            pre.style.setProperty("--rotateY", -1 * 0 + "deg");
        }
    }
    return (
        <div ref={(el) => ref.current["Projects"] = el}>
            <div className="sectionTitleContainer">
                <span className="sectionTitle">
                    Projects
                </span>
            </div>
            <div className="container">
                <div className=" projectCardContainer">
                    {projectData.map((eachProject) => (
                        <pre onMouseLeave={() => handleRemoveAnimation(eachProject.title)} onMouseEnter={() => handleAddAnimation(eachProject.title)} id={eachProject.title} className="projectCard">
                            <div className="projectExpContainer">
                                <div>
                                    <div class="title-text">{eachProject.title}</div>
                                    <div class="text">{eachProject.desc}</div>
                                </div>
                                <div className="seeAppButon">
                                    SEE APP
                                </div>
                            </div>
                        </pre>
                    ))}
                </div>
            </div>
        </div>
    )
})

export default Projects;