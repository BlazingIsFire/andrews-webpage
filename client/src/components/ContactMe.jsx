import '../App.css';
import { Link } from 'react-router-dom';
import { ReactComponent as LinkedInLogo } from '../images/linkedin.svg';

function ContactMe() {
    
    return(
        <>
        <div className='contact-container' id='contactMe'>
            <div className='contact-box'>
                <h1>Want to connect?</h1>
                <Link to='/contact'><button id='contact-me-btn'>Contact Me </button></Link>
                <a href='https://www.linkedin.com/in/andrew-schweitzer-48b06b23a/'>
                    <LinkedInLogo title='LinkedIn Profile' id='linkedinprofile-svg'/>
                </a>
            </div>
            <div className='contact-container-footer'>
                <h5>Designed and built by <a href='https://github.com/BlazingIsFire' target='_blank' rel='noreferrer' title='Github'>Andrew Schweitzer</a>.</h5>
            </div>
        </div>
        </>
    )   
}

export default ContactMe;