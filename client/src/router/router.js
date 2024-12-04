// import {} from 'react-router'
import React, { useState, useEffect, useContext, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Outlet, useSearchParams, useLocation } from 'react-router-dom'

import AuthContext from "../Contexts/AuthContext"
import Home from "../pages/Home";
// import Direct from "../pages/Direct/Direct"

import Navbar from '../pages/components/Navbar'
import P404 from '../pages/components/p404'
import LeftSideBar from '../pages/components/LeftSideBar'
import RightSideBar from '../pages/components/RightSideBar'
import RegisterForm from '../pages/components/register'

const Direct = lazy(() => import('../pages/Direct/Direct'));
const Router = props => {
    const { isAuth } = useContext(AuthContext)

    let names = ['parham', 'ali', 'reza']
    return (
        <BrowserRouter>
            <Navbar />
            <div className='components'>
                <LeftSideBar />
                <div className='main'>
                    <Routes>
                        <Route path='/'>
                            <Route path='/' element={<Home />} />
                            <Route path='/direct'
                                element={
                                    <Suspense fallback={() => { return (<h1></h1>) }}>
                                        <Direct />
                                    </Suspense>
                                } />

                            <Route path='register' element={
                                <RegisterForm />
                            } />
                            <Route path='*' element={<P404 />} />

                        </Route>

                    </Routes>
                </div>
                <RightSideBar />
            </div>
        </BrowserRouter>
    )
}
export default Router