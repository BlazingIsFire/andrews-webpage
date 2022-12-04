import '../App.css';
import './LoginPage.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <>
        <div className='login-page-container'>
            <div className='login-page-box'>
                <h1>Login:</h1>
                <form >
                    <input className='login-form-input' id='login-email' type='email' placeholder='Email Address' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <label htmlFor='email' id='email-label'>Email Address</label>
                    <input className='login-form-input' id='login-password' type='password' placeholder='Password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <label htmlFor='password' id='password-label'>Password</label>
                    <input className='login-form-submit-btn' type='submit' value='Sign In' />
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