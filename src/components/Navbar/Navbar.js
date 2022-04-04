import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className='link-container'>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/'>Home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/reviews'>Reviews</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/dashboard'>Dashboard</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/blogs'>Blogs</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to='/about'>About</NavLink>
        </div>
        </nav>
    );
};

export default Navbar;