import React from "react";
import { AiFillPicture, AiFillPlayCircle, AiFillSliders } from 'react-icons/ai'
import { FiPlayCircle } from "react-icons/fi";
import { IoIosListBox } from "react-icons/io";
import { RiCalendarScheduleFill } from 'react-icons/ri'

const AddPost = props => {
    return (
        <div className="APC">
            <figure >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu91U1pA6XCQh3M65eynACLt22hooZei1M5w&s" />
                <figcaption>
                    <input type="text" placeholder="what's happening ?" />
                    <div className="media">
                        <div className="item">
                            <AiFillPicture />
                            <p>Photo</p>
                        </div>
                        <div className="item">
                            <AiFillPlayCircle />
                            <p>Videos</p>
                        </div>
                        <div className="item">
                            <IoIosListBox />
                            <p>Threed</p>
                        </div>
                        <div className="item">
                            <RiCalendarScheduleFill />
                            <p>Schedule</p>
                        </div>


                    </div>
                </figcaption>
            </figure>
        </div>
    )
}

export default AddPost