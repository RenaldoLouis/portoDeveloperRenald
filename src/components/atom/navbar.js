import React, { useEffect, useState } from "react";
import navbarIcon from '../../assets/images/FRLIcon.svg';

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

const Navbar = () => {
    const [selectedItem, setSelectedItem] = useState("menuNavbar1");
    const handleClickNavbar = (itemId) => {
        setSelectedItem(itemId);
    }
    const [navbarElement, setNavbarElement] = useState(null);
    const [pageIsScrolledDOwn, setPageIsScrolledDOwn] = useState(false);

    useEffect(() => {
        var element = document.getElementById("navbar");
        setNavbarElement(element);
    }, [])

    window.addEventListener("scroll", function () {
        if (navbarElement) {
            if (window.scrollY === 0) {
                navbarElement.classList.remove("whiteBackground");
                setPageIsScrolledDOwn(false)
            } else {
                navbarElement.classList.add("whiteBackground");
                setPageIsScrolledDOwn(true)
            }
        }
    });

    const textColor = (index) => {
        if (pageIsScrolledDOwn) {
            return selectedItem === `menuNavbar${index + 1}` ? "white" : "black"
        } else {
            return selectedItem === `menuNavbar${index + 1}` ? "black" : "white"
        }
    }

    const buttonBackground = (index) => {
        if (pageIsScrolledDOwn) {
            return selectedItem === `menuNavbar${index + 1}` ? "activeBlack" : ""
        } else {
            return selectedItem === `menuNavbar${index + 1}` ? "active" : ""
        }
    }

    return (
        <nav id="navbar" className="easeInTransition navbar">
            <img className="logoContainer" src={navbarIcon} alt="ang" ></img>

            <ul className="nav nav-pills">
                {listNavbarMenu.map((eachMenu, index) => (
                    <li className="nav-item" onClick={() => handleClickNavbar(`menuNavbar${index + 1}`)}>
                        <div
                            className={`easeInTransition nav-link ${buttonBackground(index)}`}
                            style={{ color: textColor(index), cursor: "pointer" }}
                        >
                            {eachMenu.title}
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;