import React, { useEffect } from "react";
import linkedIn from '../../assets/images/cib_linkedin-in.svg';
import instagram from '../../assets/images/ri_instagram-fill.svg';
import github from '../../assets/images/teenyicons_github-solid.svg';

const Footer = (props) => {
    const { navbarRef } = props

    const handleClickSocMed = (link) => {
        window.open(link)
    }

    return (
        <div id="Contact" ref={(el) => navbarRef.current["Contact"] = el} className="footer">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6" style={{ textAlign: "start" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div className="sectionTitle" style={{ color: "white", marginRight: 8 }}>
                                Contact
                            </div>
                            <div style={{ background: "white", borderRadius: 25, padding: "0px 8px 0px 8px", height: "100%" }}>
                                <div style={{ color: "black", padding: "4px 2px 4px 0px", display: "flex", alignItems: "center" }}>
                                    <div className="pulse" style={{ width: 8, height: 8, background: "#3EE546", borderRadius: 35, margin: "0px 8px 0px 0px" }} />
                                    Online
                                </div>
                            </div>
                        </div>
                        <div style={{ marginBottom: 15 }}>
                            Discuss a project for just want to say hi? My inbox is open for all
                        </div>
                        <form action="mailto:renaldolouis555@gmail.com?subject=Customer Data"
                            method="POST"
                            enctype="text/plain"
                            name="EmailForm"
                            style={{ display: "grid" }}
                        >
                            <div>
                                Email
                            </div>
                            <input style={{ marginBottom: "10px" }} type="text" placeholder="Email" name="Email" />
                            <div>
                                Messages
                            </div>
                            <textarea style={{ marginBottom: "10px" }} type="text" placeholder="Message" name="Message"></textarea>
                            <button className="seeAppButon" type="submit" value="Send" style={{ marginLeft: 0, borderRadius: "0.25rem", padding: '6px', height: '100%' }}>Send</button>
                        </form>
                    </div>
                    <div class="col-sm-12 col-md-6" style={{ alignSelf: "center", marginTop: 50 }}>
                        <div style={{ marginBottom: 16 }}>
                            you can explore more about me through
                        </div>
                        <div className="contactContainer">
                            <div className="socialMediaContainer" onClick={() => handleClickSocMed("https://www.linkedin.com/in/renaldo-louis/")}>
                                <img src={linkedIn} alt="linkedin"></img>
                            </div>
                            <div className="socialMediaContainer" onClick={() => handleClickSocMed("https://github.com/RenaldoLouis")}>
                                <img src={github} alt="github"></img>
                            </div>
                            <div className="socialMediaContainer" onClick={() => handleClickSocMed("https://instagram.com/renaldo_louis?igshid=NGVhN2U2NjQ0Yg==")}>
                                <img src={instagram} alt="instagram"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer;