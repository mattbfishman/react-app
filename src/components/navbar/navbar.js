import React from "react";

import { NavLink } from "react-router-dom";

import './navbar.css';

export const Navbar = (props) =>  {
    return (
        <div className="navbar-div">
            <ul >
            	<NavLink to="/login"><li className="navbar-li">Login</li></NavLink>
                <NavLink to="/"><li className="navbar-li">Blogs</li></NavLink>
                <NavLink to="/"><li className="navbar-li">Explore</li></NavLink>
                <NavLink to="/"><li className="navbar-li">Home</li></NavLink>
            </ul>
        </div>
    );
}