import React, { useEffect, useRef } from "react";
import codeBlock from "../../assets/images/codeBlock.jpg"

const Services = (props) => {
    const { navbarRef } = props

    const boxRef1 = useRef([]);

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
                            entry.target.classList.add('animate__fadeInTopRight');
                        } else {
                            entry.target.classList.add('animate__animated');
                            entry.target.classList.add('animate__fadeInTopLeft');
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
            <div class="container">
                <div className="row ServicesContainer">
                    {servicesData.map((service, index) => (
                        <div ref={(el) => boxRef1.current[index] = el} className="col servicesWhiteBox">
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
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services;