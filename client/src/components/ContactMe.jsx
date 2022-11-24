import '../App.css';
import { ReactComponent as LinkedInLogo } from '../images/linkedin.svg';

function ContactMe() {
    
    return(
        <>
        <div className='contact-container' id='contactMe'>
            <div className='contact-box'>
                <h1>Want to connect?</h1>
                <button id='contact-me-btn'>Contact Me </button>
                <a>
                    <LinkedInLogo title='LinkedIn Profile' id='linkedinprofile-svg'/>
                </a>
            </div>
            <div className='contact-container-footer'>
                <h7>Designed and built by <a href='https://github.com/BlazingIsFire' target='_blank' title='Github'>Andrew Schweitzer</a>.</h7>
            </div>
        </div>
        </>
    )   
}

export default ContactMe;