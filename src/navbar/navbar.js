import React from "react";

import { NavLink } from "react-router-dom";

import './navbar.css';

export const Navbar = (props) =>  {
    return (
        <div className="navbar-div">
            <ul >
            	<NavLink to="/login"><li className="navbar-li">Login</li></NavLink>
                <li className="navbar-li"><a href="#">Blogs</a></li>
                <li className="navbar-li"><a href="#">Explore</a></li>
                <NavLink to="/"><li className="navbar-li"><a href="#">Home</a></li></NavLink>
            </ul>
        </div>
    );
}