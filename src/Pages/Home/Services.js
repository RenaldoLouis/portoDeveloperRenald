import React, { useContext, useEffect, useRef } from "react";
import codeBlock from "../../assets/images/codeBlock.jpg"
import { DataContext } from "../../context/DataContext";

const Services = (props) => {
    const { navbarRef } = props

    const boxRef1 = useRef([]);
    const DataContextValue = useContext(DataContext)

    const servicesData = [
        {
            title: "Website Full Stack Development",
            skills: [
                {
                    skill: "Build responsive Single-Page-Apps (SPA) & PWA in React",
                },
                {

                    skill: "Create Any Complex System using nodeJs and react",
                },
                {
                    skill: "Build RESTful APIs with Golang and Docker",
                }
            ]

        },
        {
            title: "Mobile Application Full Stack Development",
            skills: [
                {
                    skill: "Build Robust App using Flutter",
                },
                {
                    skill: "Build secure mobile apps using flutter and golang with firebase",
                },
                {
                    skill: "Integrate application with any 3rd party apps like Discord,Google Maps,etc",
                }
            ]
        },
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        if (index === entries.length - 1) {
                            entry.target.classList.add('animate__animated');
                            entry.target.classList.add('animate__backInDown');
                        } else {
                            entry.target.classList.add('animate__animated');
                            entry.target.classList.add('animate__backInDown');
                        }
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0
            }
        );

        boxRef1.current.forEach((ref) => {
            observer.observe(ref);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div id="Services" ref={(el) => navbarRef.current["Services"] = el}>
            <div className="sectionTitleContainer">
                <span className="sectionTitle">
                    Services
                </span>
            </div >
            <div class="container px-4 text-center">
                <div className="row gx-5 gy-5">
                    {servicesData.map((service, index) => (
                        <div ref={(el) => boxRef1.current[index] = el} className="col-sm-12 col-md-6 ">
                            <div className="servicesWhiteBox">
                                <div className="servicesHeader">
                                    <img src={codeBlock} alt="codeBlock" style={{ marginRight: 42 }}></img>
                                    <div>
                                        {service.title}
                                    </div>
                                </div>
                                <div style={{ margin: 25 }}>
                                    <ol> {service.skills.map((eachServies) => (
                                        <li>{eachServies.skill}</li>
                                    ))}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services;