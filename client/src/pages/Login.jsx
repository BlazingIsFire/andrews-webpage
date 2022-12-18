import '../App.css';
import './LoginPage.css';
import { useState, useRef, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const firebaseSignIn = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                setLoading(true);
                return navigate('/dashboard');
            })
            .catch((firebaseError) =>{
                const errorCode = firebaseError.code;
                switch(errorCode){
                    case 'auth/user-not-found':
                        setError('That email does not exist.')
                        break;
                    case 'auth/wrong-password':
                        setError('The password entered is incorrect.')
                        break;
                    default:
                        console.log(errorCode);
                        break;
                }
            })
    }

    const handleLogin = async (e) =>{
        e.preventDefault()
        try{
            await firebaseSignIn(emailRef.current.value, passwordRef.current.value)
        } catch {
            return error;
        }
        setLoading(false);
    }

    useEffect(() =>{
        if(currentUser){
            navigate('/dashboard');
        } else {
            return undefined;
        }
    })

    // -- Out of service function --
    // const handleOutOfService = () =>{
    //     alert('Sorry, this service is temporarily unavailable. Please check back soon!');
    // }

    return(
        <>
        <div className='login-page-container'>
            <div className='login-page-box'>
                <h1>Login:</h1>
                <form onSubmit={handleLogin} >
                    <input ref={emailRef} className='login-form-input' id='login-email' type='email' placeholder='Email Address' name='email' required/>
                    <label htmlFor='email' id='email-label'>Email Address</label>
                    <input ref={passwordRef} className='login-form-input' id='login-password' type='password' placeholder='Password' name='password' required/>
                    <label htmlFor='password' id='password-label'>Password</label>
                    <input disabled={loading} className='login-form-submit-btn' type='submit' value='Sign In' />
                    {error && <label className='login-error-label'>{error}</label>}
                </form>
                <div className='login-page-box-register'>
                    <h3>Don't have an account?</h3>
                    <Link to='/register'><button id='login-page-register-btn'>Register Now</button></Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;