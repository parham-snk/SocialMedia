import React from "react";
import {Link} from 'react-router-dom'
import { IoMdExit } from "react-icons/io";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
const Modal = props => {
    return (
        <div className="eccounts">

            <div className="eccount">
                <figure>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu91U1pA6XCQh3M65eynACLt22hooZei1M5w&s" />
                    <figcaption>
                        <div className="username">
                            parham
                        </div>
                        <div className="action">
                            <div onClick={() => {

                            }}>
                                <IoCheckmarkCircleSharp/>
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </div>
            <div className="eccount">
                <figure>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu91U1pA6XCQh3M65eynACLt22hooZei1M5w&s" />
                    <figcaption>
                        <div className="username">
                            parham
                        </div>
                        <div className="action">
                            <div onClick={() => {

                            }}>
                               
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </div>
            <div className="eccount">
                <figure>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu91U1pA6XCQh3M65eynACLt22hooZei1M5w&s" />
                    <figcaption>
                        <div className="username">
                            parham
                        </div>
                        <div className="action">
                            <div onClick={() => {

                            }}>
                                
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </div>

            <div className="footer">
                <Link to='manage-eccounts'>
                    manage eccounts
                </Link>
            </div>
        </div>
    )
}

export default Modal