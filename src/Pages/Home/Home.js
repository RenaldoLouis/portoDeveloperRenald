import React, { useRef } from "react";
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

    const handleClick = (menu) => {
        navbarRef.current[menu].scrollIntoView({ behavior: 'smooth' });
    };

    console.log("navbarRef", navbarRef)

    return (
        <div style={{ background: "black" }}>
            <Navbar ref={navbarRef} handleClick={handleClick} listNavbarMenu={listNavbarMenu} />
            <Content ref={navbarRef} />
            <Footer
                ref={navbarRef}
            />
        </div>
    )
}

export default Home;