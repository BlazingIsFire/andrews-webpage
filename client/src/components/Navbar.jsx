import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import myAvatar from '../images/avataaars.png';

function Navbar() {
    const home = () => document.getElementById('home');
    const about = () => document.getElementById('about');
    const skills = () => document.getElementById('skills');
    const projects = () => document.getElementById('projects');
    const [navbar, setNavbar] = useState(true);

    const handleNavbarToggle = (e) =>{
        setNavbar(!navbar);
    }

    return(
        <>
        <div className='navbar-container'>
            <Link to='/'><img src={myAvatar} className='nav-logo'/></Link>
            <ul>
                <li onClick={() =>{home().scrollIntoView({behavior: 'smooth'})}}>Home</li>
                <li onClick={() =>{about().scrollIntoView({behavior: 'smooth'})}}>About</li>
                <li onClick={() => {skills().scrollIntoView({behavior: 'smooth'})}}>Skills</li>
                <li onClick={() => {projects().scrollIntoView({behavior: 'smooth'})}}>Projects</li>
                <li id='navbar-login-btn'>Login</li>
            </ul>
            <div className={`navbar-toggle ${navbar ? '' : 'open'}`} onClick={handleNavbarToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div className={`navbar-header ${navbar ? 'navbar-header-hide' : ''}`}>
            <ul>
                <Link className='navbar-header-item' to='/'>Home</Link>
                <Link className='navbar-header-item' to='/about'>About</Link>
                <Link className='navbar-header-item' to='/skills'>Skills</Link>
                <Link className='navbar-header-item' to='/projects'>Projects</Link>
                <Link className='navbar-header-item' to='/login'>Login</Link>
            </ul>
        </div>
        </>
    )
}


export default Navbar;