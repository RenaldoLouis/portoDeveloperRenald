import React from "react";
import toyota from '../../assets/images/toyota.png';

const Timeline = (props) => {
    return (
        <div className="container">
            <div className="timeline">
                <div className="timelineContainer left-container">
                    <img alt="toyota" src={toyota}></img>
                    <div className="text-box">
                        <h2>ALphabet.inc</h2>
                        <small>2018-2019</small>
                        <p style={{ overflowWrap: "anywhere" }}>adasdasdaksjdojfsodivowimvoivdsnvoiejij</p>
                    </div>
                    <span className="left-container-arrow"></span>
                </div>
                <div className="timelineContainer right-container">
                    <img alt="toyota" src={toyota}></img>
                    <div className="text-box">
                        <h2>ALphabet.inc</h2>
                        <small>2018-2019</small>
                        <p style={{ overflowWrap: "anywhere" }}>adasdasdaksjdojfsodivowimvoivdsnvoiejij</p>
                    </div>
                    <span className="right-container-arrow"></span>
                </div>
                <div className="timelineContainer left-container">
                    <img alt="toyota" src={toyota}></img>
                    <div className="text-box">
                        <h2>ALphabet.inc</h2>
                        <small>2018-2019</small>
                        <p style={{ overflowWrap: "anywhere" }}>adasdasdaksjdojfsodivowimvoivdsnvoiejij</p>
                    </div>
                    <span className="left-container-arrow"></span>
                </div>
                <div className="timelineContainer right-container">
                    <img alt="toyota" src={toyota}></img>
                    <div className="text-box">
                        <h2>ALphabet.inc</h2>
                        <small>2018-2019</small>
                        <p style={{ overflowWrap: "anywhere" }}>adasdasdaksjdojfsodivowimvoivdsnvoiejij</p>
                    </div>
                    <span className="right-container-arrow"></span>
                </div>
            </div>
        </div>
    )
}

export default Timeline;