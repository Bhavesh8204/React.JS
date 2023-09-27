import React from "react"
import logo from "./logo.png"


function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} width="150px" height="60px" />
            </div>
            <div className="nav">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;