import React from "react";

const msg = props => {
    return (
        <div className="msg user">
            <div className="m">
                {props.text}
                <div className="time">
                    <p>10.45</p>
                </div>
            </div>
        </div>
    )
}

export default msg