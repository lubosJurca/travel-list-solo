import React from "react"
import globe from "./images/logo.png"



export default function Navbar(){
    return (
        <div className="navbar">
            <img src={globe} />
            <p>my travel journal</p>
        </div>
    )
}