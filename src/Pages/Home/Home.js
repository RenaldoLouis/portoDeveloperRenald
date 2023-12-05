import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/atom/navbar";
import Content from "./Content";
import Footer from "../../components/molecules/Footer";

const Home = () => {

    const listNavbarMenu = [
        {
            title: "Home"
        },
        {
            title: "Services"
        },
        {
            title: "Projects"
        },
        {
            title: "Experience"
        },
        {
            title: "Contact"
        },
    ]

    const navbarRef = useRef([]);

    const [activeSection, setActiveSection] = useState(null);


    const handleClick = (menu) => {
        navbarRef.current[menu].scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const indexOfSection = navbarRef.current.indexOf(entry.target);
                        let id = entry.target.id
                        setActiveSection(id)
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            }
        );

        listNavbarMenu.forEach((eachMenu) => {
            observer.observe(navbarRef.current[eachMenu.title]);
        })

        return () => {
            observer.disconnect();

        };
    }, []);

    return (
        <div style={{ background: "black" }}>
            <Navbar activeSection={activeSection} handleClick={handleClick} listNavbarMenu={listNavbarMenu} />
            <Content
                navbarRef={navbarRef}
            />
            <Footer
                navbarRef={navbarRef}
            />
        </div>
    )
}

export default Home;