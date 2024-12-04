import React from 'react'
import './rightside.css'
import { Link } from 'react-router-dom';
import { AiFillSetting, } from 'react-icons/ai'
import { CiCircleMore } from "react-icons/ci";
const RightSideBar = props => {
    return (
        <div className="right-side-bar">
            <div className='header'>
                <h2>Trend for you</h2>
                <AiFillSetting />
            </div>
            <div className='tags'>
                <div className='category'>
                    <div className='tag'>
                        <div className='tagname'>
                            <h2>#Tag Name</h2>
                            <p className='tweets'>193.3 K tweets</p>
                        </div>
                        <div className='opt'>
                            <CiCircleMore />
                        </div>
                    </div>
                </div>

                <div className='category'>
                    <div className='tag'>
                        <div className='tagname'>
                            <h2>#Tag Name</h2>
                            <p className='tweets'>193.3 K tweets</p>
                        </div>
                        <div className='opt'>
                            <CiCircleMore />
                        </div>
                    </div>
                    <div className='tag'>
                        <div className='tagname'>
                            <h2>#Tag Name</h2>
                            <p className='tweets'>193.3 K tweets</p>
                        </div>
                        <div className='opt'>
                            <CiCircleMore />
                        </div>
                    </div>
                </div>
                <div className='category'>
                    <div className='tag'>
                        <div className='tagname'>
                            <h2>#Tag Name</h2>
                            <p className='tweets'>193.3 K tweets</p>
                        </div>
                        <div className='opt'>
                            <CiCircleMore />
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <Link to={'/alltags'}>Show all</Link>
                </div>
            </div>
        </div>
    )
}
export default RightSideBar;