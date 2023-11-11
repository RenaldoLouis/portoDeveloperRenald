import React from "react";
import linkedIn from '../../assets/images/cib_linkedin-in.svg';
import instagram from '../../assets/images/ri_instagram-fill.svg';
import github from '../../assets/images/teenyicons_github-solid.svg';

const Footer = () => {

    return (
        <div className="footer">
            <div class="container">
                <div class="row">
                    <div class="col-7" style={{ textAlign: "start" }}>
                        Contact
                        Online
                        <div >
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
                            <button type="submit" value="Send" style={{ borderRadius: "0.25rem", padding: '6px', height: '100%' }}>Send</button>
                        </form>
                        <div className="seeAppButon">
                            SEE APP
                        </div>
                    </div>
                    <div class="col-5" style={{ alignSelf: "center" }}>
                        or you can contact me through
                        <div>
                            <img src={linkedIn} alt="linkedin"></img>
                            <img src={github} alt="github"></img>
                            <img src={instagram} alt="instagram"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;