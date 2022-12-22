import '../App.css';
import './RegisterPage.css';
import { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth, usersCollectionRef } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Register() {
    // All useRef's
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    // All useStates
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [infoModal, setInfoModal] = useState(false);
    const navigate = useNavigate();

    // User sign up function
    const firebaseSignUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setError('');
                setLoading(true);
                setDoc(doc(usersCollectionRef, `${user.uid}`), {
                    emailAddress: user.email,
                    displayName: user.displayName,
                    emailVerified: user.emailVerified,
                    profileImageURL: user.photoURL
                })
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

    // Register form function, checks password
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

    // Sets page title
    useEffect(() =>{
        document.title = 'Andrew Schweitzer | Register'
    }, [])

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
                    {/* <input ref={usernameRef} className='register-form-input' id='register-username' type='text' placeholder='Username' name='username' required/>
                    <label id='register-username-label'>Username</label> */}

                    <input ref={emailRef} className='register-form-input' id='register-email' type='email' placeholder='Email Address' name='email' required/>
                    <label id='register-email-label'>Email Address</label>

                    <input ref={passwordRef} className='register-form-input' id='register-password' type='password' placeholder='Password' name='password' required/>
                    <label id='register-password-label'>Password</label>

                    <input ref={passwordConfirmRef} className='register-form-input' id='register-confirmPassword' type='password' placeholder='Confirm password' name='confirmPassword' required/>
                    <label  id='register-confirmPassword-label'>Confirm Password</label>

                    <input className='register-form-submit-btn' type='submit' value='Register Now' disabled={loading} />
                    {error && <label className='register-error-label'>{error}</label>}
                </form>
                <div className={`${error ? 'display-none' : 'login-page-box-route'}`}>
                    <h3>Already have an account?</h3>
                    <Link to='/login'><button id='login-page-route-btn'>Login Now</button></Link>
                    <h4 onClick={()=>{setInfoModal(true)}}>Why do I need an account?</h4>
                </div>
            </div>
        </div>
        <div className={`${infoModal ? 'info-modal-container' : 'display-none'}`}>
            <div className="info-modal-box">
                <h1>Why do you need an account?</h1>
                <p>I figured people would ask the above question... that's why I made this modal. All of my applications, that require a database, require you to create an account here. This is because all my applications are connected. So instead of you creating 10 different accounts for different projects of mine or applications, you only have to create one.</p>
                <button onClick={()=>{setInfoModal(false)}}>Close</button>
            </div>
        </div>
        </>
    )
}

export default Register;