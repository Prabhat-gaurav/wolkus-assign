import React, { useEffect, useState } from "react";
import "./Nav.css"


function Nav(){
    const[show, handleShow]= useState(false);

    useEffect(() =>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY >100){
                handleShow(true);

            }else handleShow(false);
        });
        return () =>{
            window.removeEventListener("scroll");
        };
    },[]);

    return(
        <div className={`nav ${show && "nav__black"}`}>
            <h1 className="nav__logo">hi</h1>
            <h1 className="nav__avatar">logo</h1>
            <h1 className="nav__avatar">logo</h1>
            <h1 className="nav__avatar">logo</h1>
        </div>
    )
}

export default Nav;