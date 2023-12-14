import React, { useContext, useEffect, useState } from "react";
import navbarIcon from '../../assets/images/FRLIcon.svg';
import { DataContext } from "../../context/DataContext";
import 'boxicons'

const Navbar = React.forwardRef((props) => {
    const { handleClick, listNavbarMenu, activeSection } = props;
    const DataContextValue = useContext(DataContext)

    const [selectedItem, setSelectedItem] = useState("menuNavbar1");
    const [navbarElement, setNavbarElement] = useState(null);
    const [pageIsScrolledDOwn, setPageIsScrolledDOwn] = useState(false);
    const [isShowMobileNavbar, setIsShowMobileNavbar] = useState(false);
    const [isIconColorBlack, setIsIconColorBlack] = useState(false);

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
            if (window.scrollY === 0 && !isShowMobileNavbar) {
                navbarElement.classList.remove("whiteBackground");
                setPageIsScrolledDOwn(false)
            } else {
                navbarElement.classList.add("whiteBackground");
                setPageIsScrolledDOwn(true)
            }

            var li = document.getElementById('navbar');
            const substr = 'whiteBackground';

            let backgroundNavbarIsWhite = li.className.includes(substr);

            if (backgroundNavbarIsWhite) {
                setIsIconColorBlack(true)
            } else {
                setIsIconColorBlack(false)
            }
        }
    });

    useEffect(() => {
        if (isShowMobileNavbar) {
            if (navbarElement) {
                navbarElement.classList.add("whiteBackground");
            }
        } else {
            if (navbarElement && window.scrollY === 0) {
                navbarElement.classList.remove("whiteBackground");
            }
        }

        var li = document.getElementById('navbar');
        const substr = 'whiteBackground';

        let backgroundNavbarIsWhite = li.className.includes(substr);

        if (backgroundNavbarIsWhite) {
            setIsIconColorBlack(true)
        } else {
            setIsIconColorBlack(false)
        }

    }, [isShowMobileNavbar, navbarElement])

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

    const handleShowMobileNavbar = () => {
        setIsShowMobileNavbar(true)
    }
    const handleCloseMobileNavbar = () => {
        setIsShowMobileNavbar(false)
    }

    return (
        <>
            <nav id="navbar" className="easeInTransition navbar">
                <img className="logoContainer" src={navbarIcon} alt="ang" ></img>

                {DataContextValue.windowWidth <= 650 ?
                    (
                        isShowMobileNavbar ?
                            (
                                <box-icon name="x" onClick={handleCloseMobileNavbar} style={{ fill: isIconColorBlack ? "" : "white" }}></box-icon>
                            )
                            :
                            (
                                <box-icon name="menu" onClick={handleShowMobileNavbar} style={{ fill: isIconColorBlack ? "" : "white" }}></box-icon>
                            )

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
            <div className={`navbarMobile ${isShowMobileNavbar ? 'show' : ''}`} style={{ display: DataContextValue.windowWidth <= 650 ? "" : "none" }}>
                {listNavbarMenu.map((eachMenu, index) => (
                    <div onClick={() => isShowMobileNavbar ? handleClickNavbar(eachMenu, `menuNavbar${index + 1}`) : {}}>
                        <div
                            style={{ color: "black", cursor: "pointer", margin: "8px 0px 8px 0px" }}
                        >
                            {eachMenu.title}
                        </div>
                    </div>
                ))}
            </div >
        </>
    )
})

export default Navbar;