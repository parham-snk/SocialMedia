import React,{useState,createContext} from "react";

let  Context=createContext()
const ContextProvider=props=>{
    const [isAuth,setAuth]=useState(false)
    const login=()=>{
        setAuth(true)
    }
    const logout=()=>{
        setAuth(false)
    }
    return(
        <Context.Provider value={{isAuth,login,logout}}>
            {props.children}
        </Context.Provider>
    )
}
export {ContextProvider}
export default Context