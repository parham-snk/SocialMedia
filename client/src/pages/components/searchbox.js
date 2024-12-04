import React from "react";
import './searchbox.css'
import { Link } from "react-router-dom";
const searchBox = props => {

    const searchitems = (props.list).map((item, index) => {
        return (
            <li className="search-item" key={index}>
                <Link to={item}>{item}</Link>
            </li>
        )
    })

    return (
        <div className="search-box">

            {searchitems}

        </div>
    )
}

export default searchBox