import React, { useEffect, useState } from "react";
import { FcAbout, FcHome, FcButtingIn } from "react-icons/fc";
import { AiFillAppstore, AiOutlineCaretDown, AiFillGolden, AiFillMail, AiFillTwitterCircle, AiFillBell, AiFillHome } from "react-icons/ai";
import { Link, NavLink, useSearchParams } from "react-router-dom";

import EccountsModal from './eccounts'

import SearchBox from './searchbox'

const Navbar = props => {
    const [isEccontsModal, setEccountsMOdal] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const [searchBoxActive, setSearchBoxActive] = useState(false)
    let [searchItems, setSearchItems] = useState([])
    useEffect(() => {
        if (searchParams.get('q') != "") {
            let names = ['parham', 'ali', 'reza']
            let result = names.filter(name => name.toLowerCase().includes(searchParams.get('q')))
            if (result.length > 0) {
                setSearchBoxActive(true)
                setSearchItems(result)
            } else {
                setSearchBoxActive(false)
                setSearchItems([])
            }
        } else {
            setSearchBoxActive(false)
        }

    }, [searchParams])
    return (
        <nav>
            <div className="container">
                <div className="Icon">
                    <Link to={'/'}><AiFillTwitterCircle size={'3rem'} /><h1>social media</h1></Link>
                </div>
                <ul>
                    <input type="text" id="searchBox" placeholder="# Explore" onChange={el => {
                        setSearchParams({ q: el.target.value })
                    }} />
                    {searchBoxActive ? <SearchBox list={searchItems} /> : null}
                </ul>
                <div className="panel">
                    <div className="controlls">
                        <NavLink to={'/'}><div className="Home"><AiFillHome size={'1.5rem'} /></div></NavLink>
                        <NavLink to={'/chanals'}><AiFillGolden /></NavLink>
                        <NavLink to={'/direct'}><AiFillMail /></NavLink>
                        <NavLink to={'/notification'}><AiFillBell /><div className="count">10</div></NavLink>
                    </div>
                    <div className="userPannel">
                        <button onClick={() => setEccountsMOdal(!isEccontsModal)}>
                            <FcButtingIn />
                            <p>user104</p>
                            <AiOutlineCaretDown />
                        </button>
                        {isEccontsModal && <EccountsModal />}
                        <div className="appStore">
                            <AiFillAppstore />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;