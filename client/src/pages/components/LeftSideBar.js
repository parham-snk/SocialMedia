import React from "react";
import './leftsidebar.css'

import bcg from './imgs/test.jpg'
import { Link } from "react-router-dom";
const SideBar = props => {
    return (
        <div className="side-bar">
            <div className="userPannel">
                <figure>
                    <img src={bcg} />
                    <figcaption>
                        <div id="profile">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu91U1pA6XCQh3M65eynACLt22hooZei1M5w&s" />
                            <br/>
                            <br/>

                            <p>username</p>
                            <p>userId</p>
                            <p>Bio</p>
                            <br/>
                            <div className="followes">
                                <div className="F">
                                    <p>1144</p>
                                    <p>following</p>
                                </div>
                                <div className="F">
                                    <p>1144</p>
                                    <p>followers</p>
                                </div>
                            </div>
                            <Link to={'/profile'}>My Profile</Link>
                        </div>
                    </figcaption>
                </figure>
            </div>
            <div className="requestPannel">
                <div className="caption">
                    <h2>Who is Follows you?</h2>
                </div>
            </div>
        </div>
    )
}
export default SideBar