import { useState } from 'react';
import '../App.css';
import myAvatar from '../images/avataaars.png';

function Navbar() {
    const about = document.getElementById('about');
    const home = document.getElementById('home');
    const skills = document.getElementById('skills');
    const [navbar, setNavbar] = useState(true);


    const handleNavbarToggle = (e) =>{
        if(navbar === true){setNavbar(false);} else if(navbar === false){setNavbar(true);}
    }

    return(
        <>
        <div className='navbar-container'>
            <img src={myAvatar} className='nav-logo'/>
            <ul>
                <li onClick={() =>{home.scrollIntoView({behavior: 'smooth'})}}>Home</li>
                <li onClick={() =>{about.scrollIntoView({behavior: 'smooth'})}}>About</li>
                <li onClick={() => {skills.scrollIntoView({behavior: 'smooth'})}}>Skills</li>
                <li>Projects</li>
                <li id='navbar-login-btn'>Login</li>
            </ul>
            <div className='navbar-toggle' onClick={handleNavbarToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div className={`navbar-header ${navbar ? 'navbar-header-hide' : ''}`}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Login</li>
            </ul>
        </div>
        </>
    )
}


export default Navbar;