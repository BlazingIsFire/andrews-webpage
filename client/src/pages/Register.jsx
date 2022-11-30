import '../App.css';
import '../RegisterPage.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <>
        <div className='register-page-container'>
            <div className='register-page-box'>
                <h1>Register:</h1>
                <form>
                    <input className='register-form-input' id='register-username' type='text' placeholder='Username' name='username' value={username} onChange={(e) => setUsername(e.target.value)} required/>
                    <label htmlFor='username' id='register-username-label'>Username</label>

                    <input className='register-form-input' id='register-email' type='email' placeholder='Email Address' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <label htmlFor='email' id='email-label'>Email Address</label>

                    <input className='register-form-input' id='register-password' type='password' placeholder='Password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <label htmlFor='password' id='register-password-label'>Password</label>

                    <input className='register-form-submit-btn' type='submit' value='Register Now' />
                </form>
            </div>
        </div>
        </>
    )
}

export default Register;