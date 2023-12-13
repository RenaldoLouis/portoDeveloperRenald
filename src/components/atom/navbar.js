import React, { useContext, useEffect, useState } from "react";
import navbarIcon from '../../assets/images/FRLIcon.svg';
import { DataContext } from "../../context/DataContext";

const Navbar = React.forwardRef((props) => {
    const { handleClick, listNavbarMenu, activeSection } = props;
    const DataContextValue = useContext(DataContext)

    const [selectedItem, setSelectedItem] = useState("menuNavbar1");
    const [navbarElement, setNavbarElement] = useState(null);
    const [pageIsScrolledDOwn, setPageIsScrolledDOwn] = useState(false);

    const handleClickNavbar = (eachMenu, itemId) => {
        handleClick(eachMenu.title);
        setSelectedItem(itemId);
    }

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

    useEffect(() => {
        switch (activeSection) {
            case "Home":
                setSelectedItem("menuNavbar1")
                break;
            case "Services":
                setSelectedItem("menuNavbar2")
                break;
            case "Projects":
                setSelectedItem("menuNavbar3")
                break;
            case "Experience":
                setSelectedItem("menuNavbar4")
                break;
            case "Contact":
                setSelectedItem("menuNavbar5")
                break;
            default:
                setSelectedItem("menuNavbar1")
        }
    }, [activeSection])

    return (
        <nav id="navbar" className="easeInTransition navbar">
            <img className="logoContainer" src={navbarIcon} alt="ang" ></img>

            {DataContextValue.windowWidth <= 650 ?
                (
                    <div>
                        asd
                    </div>
                )
                :
                (
                    <ul className="nav nav-pills">
                        {listNavbarMenu.map((eachMenu, index) => (
                            <li className="nav-item" onClick={() => handleClickNavbar(eachMenu, `menuNavbar${index + 1}`)}>
                                <div
                                    className={`easeInTransition nav-link ${buttonBackground(index)}`}
                                    style={{ color: textColor(index), cursor: "pointer" }}
                                >
                                    {eachMenu.title}
                                </div>
                            </li>
                        ))}
                    </ul>
                )
            }

        </nav>
    )
})

export default Navbar;