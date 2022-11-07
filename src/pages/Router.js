import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./Home";
import {Tasks} from "./Tasks";

export const Router = ()=>{
    return(
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/tasks" element={<Tasks />} />
          </Routes>
        
        </BrowserRouter>
    )
}