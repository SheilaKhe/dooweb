import React, { useState } from "react";
import {Link} from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    // const [openMenu, setOpenMenu] = useState(false);
    function redirectHome(params) {
        window.location.header("/Home");
    }
  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
        <h3> <Link to="/"
        onClick={redirectHome}>Dooweb</Link> </h3>
        <div className="toggleButton">
            <button 
            onClick={() => {
                setExpandNavbar((prev) => !(prev)); 
            }}  
            
            className="menuBtn" >
                <span className="menu-bar-top"></span>
                <span className="menu-bar-bottom"></span>
            </button>
        </div>
        <div className="links">
            <Link className="menuItem" to="/Story"
            onClick={() => {
                setExpandNavbar((prev) => !(prev))
            }}>Story</Link>
            <Link className="menuItem" to="/Work"
            onClick={() => {
                setExpandNavbar((prev) => !(prev))
            }}>Work</Link>
            <Link className="menuItem" to="/Contact"
            onClick={() => {
                setExpandNavbar((prev) => !(prev))
            }}>Contact</Link>
        <div className="option-nav">
            <Link to="#" className='lang'>Fr</Link>
            <ul className="socials">
                <li><a href="">Instagram</a></li>
                <li><a href="">Dribble</a></li>
                <li><a href="">Behance</a></li>
            </ul>
            <button type='button'>Light</button>
        </div>
        </div>

    </div>
  )
}

export default Navbar