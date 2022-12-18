import '../App.css';
import './RegisterPage.css';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Register() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const firebaseSignUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                setLoading(true);
                return navigate('/dashboard');
            })
            .catch((firebaseError) => {
                const errorCode = firebaseError.code;
                switch(errorCode){
                    case 'auth/email-already-in-use':
                        setError('This email is already in use.');
                        break;
                    case 'auth/invalid-email':
                        setError('The email provided is invalid.');
                        break;
                    case 'auth/operation-not-allowed':
                        setError('An error occured during sign up.');
                        break;
                    default:
                        console.log(errorCode);
                        break;
                }
            })
    }

    const handleRegister = async (e) =>{
        e.preventDefault()
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("The password's you entered do not match.");
        } else if (passwordRef.current.value.length < 6){
            return setError("Password is too short.")
        } else if (passwordRef.current.value.length > 25){
            return setError("Password is too long.")
        } else if (passwordRef.current.value.search(/\d/) === -1){
            return setError("Password must contain a number.")
        }
        try{
            await firebaseSignUp(emailRef.current.value, passwordRef.current.value)
        } catch {
            return error;
        }
        setLoading(false);
    }

    // -- Out of service alert when in development. --
    // const handleOutOfService = () =>{
    //     alert('Sorry, this service is temporarily unavailable. Please check back soon!');
    // }

    return(
        <>
        <div className='register-page-container'>
            <div className='register-page-box'>
                <h1>Register:</h1>
                <form onSubmit={handleRegister}>
                    <input ref={emailRef} className='register-form-input' id='register-email' type='email' placeholder='Email Address' name='email' required/>
                    <label htmlFor='email' id='register-email-label'>Email Address</label>

                    <input ref={passwordRef} className='register-form-input' id='register-password' type='password' placeholder='Password' name='password' required/>
                    <label htmlFor='password' id='register-password-label'>Password</label>

                    <input ref={passwordConfirmRef} className='register-form-input' id='register-confirmPassword' type='password' placeholder='Confirm password' name='confirmPassword' required/>
                    <label htmlFor='confirmPassword' id='register-confirmPassword-label'>Confirm Password</label>

                    <input className='register-form-submit-btn' type='submit' value='Register Now' disabled={loading} />
                    {error && <label className='register-error-label'>{error}</label>}
                </form>
            </div>
        </div>
        </>
    )
}

export default Register;