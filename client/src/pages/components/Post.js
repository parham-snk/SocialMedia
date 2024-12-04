import React, { useState } from "react";
import { MdVerified } from "react-icons/md";
import { FaHeart, FaRegHeart, FaReply, FaCommentDots } from "react-icons/fa";

const Post = props => {
    const [liked, setLiked] = useState()
    return (
        <div className="post">

            <figure>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5LtfelQSVB9E2yZocROi1gPdu_Fr3oj_ug&s" />
                <figcaption>
                    <div className="header">
                        <div className="user">
                            <h3>username</h3>
                            <MdVerified />
                            <h5>@userId</h5>
                        </div>
                        <div className="date">
                            Few Minuts Ago !
                        </div>
                    </div>
                    <div className="content">
                        <div className="caption">
                            <p>
                                This is a post !
                            </p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2hnAfmLqmPTB3Bx7-dNKvCZLPI79BqCiI2w&s" />
                        </div>
                        <div className="controlles">
                            <div className={liked ? 'control like' : 'control'} onClick={() => { setLiked(!liked) }}>
                                {liked ? <FaHeart /> : <FaRegHeart />}

                                <p>Like</p>
                            </div><div className="control">
                                <FaReply />
                                <p>Reply</p>
                            </div><div className="control">
                                <FaCommentDots />
                                <p>
                                    Comments (45)
                                </p>
                            </div>
                        </div>
                    </div>
                </figcaption>
            </figure>

        </div>
    )
}
export default React.memo(Post);