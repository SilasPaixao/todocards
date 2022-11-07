import React,{useState} from "react";
import {GlobalContext} from "./GlobalContext";

export const GlobalProvider = (props)=>{
    const [darkMode, setDarkMode] = useState(false);

    
    
    return(
        <GlobalContext.Provider value={{darkMode, setDarkMode}}>
            {props.children}
        </GlobalContext.Provider>
    )
}


