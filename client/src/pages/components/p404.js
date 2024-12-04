import React from "react";
import { FcGlobe } from 'react-icons/fc'
import { AiFillAlert, AiFillHome } from 'react-icons/ai'
import { FiAlertTriangle } from 'react-icons/fi'
import { Link } from "react-router-dom";

import Page404 from './pg404.css'
const page404 = () => {
    return (
        <div className="containerr">
            <FcGlobe />
            <div className="alert">
                <FiAlertTriangle/>
            </div>
            <div className="texts">
                <h1>there is not such place on the  Earth !</h1>
                <p>please go back to the <Link to={'/'}>Home</Link> page</p>
                <br/>
                <Link to={'/'}><div className="btn">
                    <AiFillHome />
                    <p>Home</p>
                </div></Link>
            </div>
        </div>
    )
}

export default page404