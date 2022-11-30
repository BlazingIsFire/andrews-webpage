import '../App.css';
import '../LoginPage.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(
        <>
        <div className='login-page-container'>
            <div className='login-page-box'>
                <h1>Login:</h1>
                <form >
                    <input className='login-form-input' id='login-username' type='text' placeholder='Username' name='username' value={username} onChange={(e) => setUsername(e.target.value)} required/>
                    <label htmlFor='username' id='username-label'>Username</label>
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