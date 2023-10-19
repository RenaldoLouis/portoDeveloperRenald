import React, {useState} from "react";
import navbarIcon from '../../assets/images/FRLIcon.svg';

const listNavbarMenu = [
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

    return (
        <nav className="navbar">
            <img src={navbarIcon} alt="ang" ></img>

            <ul className="nav nav-pills">
                {listNavbarMenu.map((eachMenu, index) => (
                    <li className="nav-item" onClick={() => handleClickNavbar(`menuNavbar${index + 1}`)}>
                        <div className={`buttonTransition nav-link ${selectedItem === `menuNavbar${index + 1}` ? "active" : ""}`} style={{color: "black", cursor: "pointer"}}>
                            {eachMenu.title}
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;