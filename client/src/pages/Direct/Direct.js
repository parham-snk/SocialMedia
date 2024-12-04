import React, { useEffect, useState, createElement } from "react";
import { createPortal, hydrate, render } from 'react-dom'
import { Link } from "react-router-dom";
import EmojiPicker from "emoji-picker-react";

import { TfiWrite } from "react-icons/tfi";
import { TbWritingSign } from "react-icons/tb";
import { MdAddPhotoAlternate } from "react-icons/md";
import { MdOutlineEmojiEmotions } from "react-icons/md";


import "./Direct.css"

import CientMsg from './msgs/client'
import USerMsg from './msgs/user'
import { io } from "socket.io-client";

let socket = io('http://localhost:8081')

socket.on('recieveMsg', msg => {
    console.log(msg)
    return render(createPortal(<USerMsg text={msg} />, document.getElementById('msgs')), document.createElement('div'), () => {
        document.getElementById('msgs').scrollTo({ top: document.getElementById("msgs").scrollHeight })

    })
})


const DirectPage = props => {
    const [emojiShow, setEmojyShow] = useState(false)
    const [broadCasts, setBroadCasts] = useState()
    const [msgs, setmsgs] = useState([])
    const [msg, setMsg] = useState()

    const [userTyping, setuserTyping] = useState(false)
    socket.on("typing", msg => {
        setuserTyping(true)
        setTimeout(() => {
            setuserTyping(false)

        }, 2000);
    })


    const sendMsg = e => {
        if (e.key == "Enter") {
            return render(createPortal(<CientMsg text={msg} />, document.getElementById("msgs")), document.createElement("div"), () => {
                document.getElementById('msgs').scrollTo({ top: document.getElementById("msgs").scrollHeight })
                document.getElementById('msg').value = "";
                socket.emit('msg', msg)
                setEmojyShow(false)
            });

        }
    }

    const typing = () => {
        socket.emit('typing', 'typing')
    }
    // msg.slice(0,50)+"..."
    return (
        <div className="direct">
            <div className="direct-header">
                <h2 className="direct__title">Direct</h2>
            </div>
            <div className="contents">
                <div className="list">
                    <div className="newmsg">
                        <button>write a massage ! <TbWritingSign /></button>
                    </div>

                    <Link to="">
                        <div className="broadCast">
                            <figure>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu91U1pA6XCQh3M65eynACLt22hooZei1M5w&s" />
                                <figcaption>
                                    <div className="username">
                                        username
                                    </div>
                                    <div className="msg">
                                        loremllooeoqroasdqwe . . .
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </Link>

                    <Link to="">
                        <div className="broadCast">
                            <figure>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu91U1pA6XCQh3M65eynACLt22hooZei1M5w&s" />
                                <figcaption>
                                    <div className="username">
                                        username
                                    </div>
                                    <div className="msg">
                                        loremllooeoqroasdqwe . . .
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </Link>




                </div>

                <div className="chat">
                    <div className="chat__header">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu91U1pA6XCQh3M65eynACLt22hooZei1M5w&s" />
                        <div className="user">
                            <h4 className="chat__title">parham</h4>
                            <p className="status online">online</p>
                        </div>
                    </div>

                    <div className="msgs" style={{ scrollBehavior: "smooth" }} id="msgs">

                        {userTyping &&
                            <div className="typing">
                                ...
                            </div>
                        }
                    </div>
                    <div className="inputBox">
                        <input type="text" id="msg" placeholder="type a message..."
                            onKeyUp={sendMsg}
                            onChange={(e) => {
                                setMsg(e.target.value)
                            }
                            }

                            onKeyDown={typing}
                        />

                        <MdOutlineEmojiEmotions style={{ color: emojiShow == true ? "black" : 'grey' }} onClick={() => {
                            setEmojyShow(!emojiShow)
                        }} />
                        {emojiShow &&
                            <EmojiPicker className="emojis" onEmojiClick={emoji => {
                                document.getElementById('msg').value += emoji.emoji
                                setMsg(msg+emoji.emoji)
                            }} />

                        }
                        <MdAddPhotoAlternate />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DirectPage
