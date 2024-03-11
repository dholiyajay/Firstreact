import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <div>

            <NavLink to="/">Home</NavLink>

            <NavLink to="/Producat">Producat</NavLink>

            <NavLink to="/Content">content</NavLink>


        </div>
    );
}

export default Header;