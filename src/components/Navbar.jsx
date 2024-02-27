import React from "react";
import '../css/Navbar.css';
import icon from '../assets/github.webp';

function Navbar(){
    return(
        <div>
            <div id="Nav">
                <img src={icon}></img>
                 <h1>GitSearcher</h1>
            </div>
        </div>
    );
}

export default Navbar;