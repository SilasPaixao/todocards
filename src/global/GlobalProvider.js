import React,{useState} from "react";
import {GlobalContext} from "./GlobalContext";

export const GlobalProvider = (props)=>{
    const initialThemeMode = localStorage.getItem("themeValue")==='dark';
    const [darkMode, setDarkMode] = useState(initialThemeMode);

    
    
    return(
        <GlobalContext.Provider value={{darkMode, setDarkMode}}>
            {props.children}
        </GlobalContext.Provider>
    )
}


