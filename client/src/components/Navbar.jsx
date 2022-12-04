import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import contactvcf from '../pages/contactvcf.vcf';
import myAvatar from '../images/avataaars.png';

function Navbar() {
    const home = () => document.getElementById('home');
    const about = () => document.getElementById('about');
    const skills = () => document.getElementById('skills');
    const projects = () => document.getElementById('projects');
    const contactme = () => document.getElementById('contactMe');
    const [navbar, setNavbar] = useState(true);

    const handleNavbarToggle = (e) =>{
        setNavbar(!navbar);
    }

    return(
        <>
        <div className='navbar-container'>
            <Link to='/'><img src={myAvatar} className='nav-logo' alt='Andrews Avatar Navbar'/></Link>
            <ul>
                <Link to='/' id='navbar-link'><li onClick={() =>{home().scrollIntoView({behavior: 'smooth'})}}>Home</li></Link>
                <Link to='/' id='navbar-link'><li onClick={() =>{about().scrollIntoView({behavior: 'smooth'})}}>About</li></Link>
                <Link to='/' id='navbar-link'><li onClick={() => {skills().scrollIntoView({behavior: 'smooth'})}}>Skills</li></Link>
                <Link to='/' id='navbar-link'><li onClick={() => {projects().scrollIntoView({behavior: 'smooth'})}}>Projects</li></Link>
                <Link to='/' id='navbar-link'><li onClick={() => {contactme().scrollIntoView({behavior: 'smooth'})}}>Contact</li></Link>
                <Link to='/login' id='navbar-link'><li id='navbar-login-btn'>Login</li></Link>
            </ul>
            <div className={`navbar-toggle ${navbar ? '' : 'open'}`} onClick={handleNavbarToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div className={`navbar-header ${navbar ? 'navbar-header-hide' : ''}`}>
            <img src={myAvatar} className='navbar-header-logo' alt='Andrews Avatar Navabr mobile'/>
            <h1>Andrew Schweitzer</h1>
            <h4>Software Engineer | Cyber Security | Student</h4>
            <ul>
                <Link className='navbar-header-item' to='/'>Home</Link>
                <Link className='navbar-header-item' to='/about'>About</Link>
                <Link className='navbar-header-item' to='/projects'>Projects</Link>
                <Link className='navbar-header-item' to='/contact'>Contact</Link>
                <Link className='navbar-header-item' to='/login'>Login</Link>
            </ul>
            <a href={contactvcf} download='Andrew_Schweitzer'>
                <button className='navbar-vcf-btn'>Download Contact Card</button>
            </a>
            <h5>Designed and built by Andrew Schweitzer</h5>
        </div>
        </>
    )
}


export default Navbar;