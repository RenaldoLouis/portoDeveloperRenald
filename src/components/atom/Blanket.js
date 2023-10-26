import React from "react";

const Blanket = props => {
    const { currentlyHoveredText = null } = props;
    return (
        <div style={{ display: currentlyHoveredText === null ? "none" : "", position: "absolute", zIndex: 5, background: "rgba(0,0,0,0.8)", width: "100vw", height: "100vh" }} />
    )
}

export default Blanket;