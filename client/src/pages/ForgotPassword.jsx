import React, { useRef, useState } from 'react';
import '../App.css';
import './ForgotPassword.css';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

function ForgotPassword() {
    const emailRef = useRef();
    const [emailSent, setEmailSent] = useState(false);
    const [emailStatus, setEmailStatus] = useState('');
    const [error, setError] = useState('');

    const firebasePasswordReset = (auth, email) =>{
        sendPasswordResetEmail(auth, email)
            .then(()=>{
                setError('');
                setEmailSent(true);
                return setEmailStatus('Password reset email sent!');
            }).catch((error)=>{
                const errorCode = error.code;
                switch(errorCode){
                    case 'auth/user-not-found':
                        setError('An account with that email does not exist.')
                        break;
                    default:
                        setError(errorCode)
                        break;
                }
            })
    }

    const handleForgotPassword = async (e) =>{
        e.preventDefault()
        try{
            await firebasePasswordReset(auth, emailRef.current.value)
        } catch{
            return error;
        }
    }
  return (
    <div className='password-reset-page-container'>
            <div className='password-reset-page-box'>
                <h1>Forgot Password:</h1>
                <form onSubmit={handleForgotPassword}>
                    <input ref={emailRef} className='password-reset-form-input' id='password-reset-email' type='email' placeholder='Email Address' required/>
                    <label id='email-label'>Email Address</label>
                    <div>
                        <input disabled={emailSent} className='password-reset-form-submit-btn' type='submit' value='Send email' />
                    </div>
                    <h4 className={emailStatus ? emailStatus : 'display-none'} id='password-reset-status'>{emailStatus}</h4>
                    <h4 className={error ? error : 'display-none'} id='password-reset-error'>{error}</h4>
                </form>
                <div className='login-page-box-route'>
                    <h3>Already have an account?</h3>
                    <Link to='/login'><button id='login-page-route-btn'>Login Now</button></Link>
                </div>
            </div>
        </div>
  )
}

export default ForgotPassword;