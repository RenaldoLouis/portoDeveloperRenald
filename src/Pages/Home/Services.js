import React, { useEffect, useRef } from "react";
import codeBlock from "../../assets/images/codeBlock.jpg"

const Services = React.forwardRef((props, navbarRef) => {

    const boxRef1 = useRef([]);

    const servicesData = [
        {
            title: "Website Full Stack Development",
            skills1: "Building responsive Single-Page-Apps (SPA) & PWA in React",
            skills2: "Building Awesome Mobile Application using Flutter",
            skills3: "Building RESTful APIs with Springboot and Docker",
        },
        {
            title: "Mobile Application Full Stack Development",
            skills1: "Building Robust App using Flutter",
            skills2: "Build secure mobile apps using firebase and golang",
            skills3: "Create App integrated with any 3rd party apps like Discord,Google Maps,etc",
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
        <>
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
                                <ol>
                                    <li>{service.skills1}</li>
                                    <li>{service.skills2}</li>
                                    <li>{service.skills3}</li>
                                </ol>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
})

export default Services;