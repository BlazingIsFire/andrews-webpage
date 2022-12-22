import '../App.css';
import './ContactPage.css';
import emailjs from 'emailjs-com';
import contactvcf from './contactvcf.vcf';
import { useEffect } from 'react';
import { ReactComponent as PhoneSVG } from '../images/phone.svg';
import { ReactComponent as MailSVG } from '../images/mail.svg';

function Contact() {

    // Sends forms message to email api
    const handleSendMessage = (e) =>{
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_KEY, process.env.REACT_APP_EMAILJS_TEMPLATE_NAME, e.target, process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
        e.target.reset();
        alert('Message has been sent!');
    }

    // sets page title
    useEffect(() =>{
        document.title = 'Andrew Schweitzer | Contact'
    }, [])

    // const handleOutOfService = () =>{
    //     alert('Sorry, this service is temporarily unavailable. Please check back soon!');
    // }

    return(
        <>
        <div className='contact-page-container-web'>
            <div className='contact-page-box'>
                <div className='contact-box-left-container'>
                    <h1>Contact:</h1>
                    <div className='contact-box-left-subcontainer'>
                        <div className='contact-box-left'>
                            <PhoneSVG id='contact-phone'/>
                            <h2>(443)-645-8414</h2>
                        </div>
                        <div className='contact-box-left'>
                            <MailSVG id='contact-mail'/>
                            <h2 id='contact-email'>andrew@andrewschweitzer.tech</h2>
                        </div>
                        <a href={contactvcf} download='Andrew_Schweitzer'>
                            <button id='vcf-btn'>Download Contact Card</button>
                        </a>
                    </div>
                </div>
                <div className='contact-box-right-container'>
                    <h1>Leave me a message:</h1>
                    <form id='contact-form' onSubmit={handleSendMessage}>
                        <input className='contact-form-input' id='contact-full-name' placeholder='Full Name' type='text' name="name" required/>
                        <label htmlFor='name' className='contact-form-label-name'>Full Name</label>
                        <input className='contact-form-input' id='contact-email-address' placeholder='Email Address' type='email' name='email' required/>
                        <label htmlFor='email' className='contact-form-label-email'>Email Address</label>
                        <input className='contact-form-input' id='contact-subject' placeholder='Subject' type='text' name='subject' required/>
                        <label htmlFor='subject' className='contact-form-label-subject'>Subject</label>
                        <textarea name='message' id='contact-form-message' placeholder='Message' required/>
                        <label htmlFor='message' className='contact-form-label-message'>Message</label>
                        <div className='contact-form-submit-container'>
                            <input type='submit' id='contact-form-submit-btn' name='submit' value='Send Message'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        {/* Start of mobile version */}
        <div className='contact-page-container-mobile'>
            <h1>Contact Me:</h1>
            <div className='contact-box-left-subcontainer'>
                <div className='contact-box-left'>
                    <PhoneSVG id='contact-phone'/>
                    <h2>(443)-645-8414</h2>
                </div>
                <div className='contact-box-left'>
                    <MailSVG id='contact-mail'/>
                    <h2 id='contact-email'>andrew@andrewschweitzer.tech</h2>
                </div>
                <a href={contactvcf} download='Andrew_Schweitzer'>
                    <button id='vcf-btn'>Download Contact Card</button>
                </a>
            </div>
            <h1>Leave me a message:</h1>
                <form id='contact-form' onSubmit={handleSendMessage}>
                    <input className='contact-form-input' id='contact-full-name' placeholder='Full Name' type='text' name='name' required/>
                    <label htmlFor='name' className='contact-form-label-name'>Full Name</label>
                    <input className='contact-form-input' id='contact-email-address' placeholder='Email Address' type='email' name='email' required/>
                    <label htmlFor='email' className='contact-form-label-email'>Email Address</label>
                    <input className='contact-form-input' id='contact-subject' placeholder='Subject' type='text' name='subject' required/>
                    <label htmlFor='subject' className='contact-form-label-subject'>Subject</label>
                    <textarea name='message' id='contact-form-message' placeholder='Message' required/>
                    <label htmlFor='message' className='contact-form-label-message'>Message</label>
                    <div className='contact-form-submit-container'>
                        <input type='submit' id='contact-form-submit-btn' name='submit' value='Submit'/>
                    </div>
                </form>
        </div>
        </>
    )
}

export default Contact;