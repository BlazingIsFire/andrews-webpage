import '../App.css';
import React from 'react';
import secPlus from '../images/security_plus.png';
import md100 from '../images/md-100.png';
import awsCloudPrac from '../images/aws-practitioner.png';

function About() {
    return(
        <>
        <div className='about-container' id='about'>
            <h2 className='about-title'>A little bit about me...</h2>
            <p>Hi, my name is Andrew! I'm 20 years old, and I have <a href='https://www.crohnscolitisfoundation.org/what-is-crohns-disease' target="_blank" style={{color: '#a61bee'}}>Crohn's Disease</a>. Ever since I was 12 years old I have had an interest in technology, software engineering, cybersecurity, firefighting, and cars. I currently work for the Department of Defense and hold a Senior IT Specialist position. I am always looking to learn and improve myself.</p>
            <div className='about-badges-container'>
                <img src={secPlus} className='about-badge'/>
                <img src={md100} className='about-badge'/>
                <img src={awsCloudPrac} className='about-badge'/>
            </div>
        </div>
        <div className='about-ending-container' />
        </>
    )
}

export default About;