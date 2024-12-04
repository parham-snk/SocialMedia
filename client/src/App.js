
import React, { useContext, useEffect } from 'react';
import './App.css';
import { ContextProvider } from './Contexts/AuthContext'
import Router from "./router/router"
import { io } from 'socket.io-client'
import { createPortal } from 'react-dom';



function App() {
  const urls = ['/', 'call', 'blog']




  
  return (
    <React.Fragment>
      <ContextProvider>
        {/* <a href='#' onClick={send} style={{ color: 'white' }}>parham </a> */}
        <Router urls={urls} />
        
      </ContextProvider>
    </React.Fragment>
  );
}

export default App;
