import React from "react";

const Pill = (props) => {
    const { name } = props
    return (
        <div className="pill">
            {name}
        </div>
    )
}

export default Pill;