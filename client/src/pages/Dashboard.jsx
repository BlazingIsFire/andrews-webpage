import React, { useRef, useState } from "react";
import './DashboardPage.css';
import { auth, storage } from '../firebase';
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useAuth } from "../contexts/AuthContext";
import UserPNG from '../images/user.png';
import '../App.css';

function Dashboard() {
    // Auth context
    const { currentUser } = useAuth();
    // All useState variables
    const [emailModal, setEmailModal] = useState(false);
    const [passwordResetModal, setPasswordResetModal] = useState(false);
    const [profileImg, setProfileImg] = useState(currentUser.photoURL);
    const [profileImageUpload, setProfileImageUpload] = useState();
    const [status, setStatus] = useState('');
    const [imageStatus, setImageStatus] = useState('');
    const [profileImageURL, setProfileImageURL] = useState(null);
    const [fileUploadName, setFileUploadName] = useState('No file selected.');
    const [fileUploadError, setFileUploadError] = useState('');
    // All ref variables
    const accountFileUploadRef = useRef();
    const usernameRef = useRef();
    const profileImagesStorageRef = ref(storage, `profileImages/${currentUser.uid}-image.png`);

    // Load uploaded file name function
    const handleFileUploadInput = (e) => {
        const file = e.target.files[0];
        const fileName = file.name;
        setFileUploadName(`File selected: ${fileName}`);
        setProfileImageUpload(file);
    }
    // Uploading image to database
    const handleProfileImageUpload = async (e) =>{
        if(fileUploadName === 'No file selected.'){
            setFileUploadError('No file has been selected.')
        } else {
            setFileUploadError('');
            await uploadBytes(profileImagesStorageRef, profileImageUpload)
            .then(async (snapshot) =>{
                await getDownloadURL(profileImagesStorageRef).then(async (url) =>{
                    setProfileImageURL(url);
                    setProfileImg(url);
                    await updateProfile(currentUser, {
                        photoURL: profileImageURL
                    }).then(() =>{
                        return setImageStatus('Profile Image Updated!')
                    }).catch((updateError) =>{
                        return console.log(updateError.code + ' Error updating profile.')
                    })
                }).catch((urlError) =>{
                    console.log(urlError.code + ' Error finding image URL.')
                })
            }).catch((uploadError) =>{
                console.log(uploadError.code + ' Error uploading image.')
            })
        }
        
    }

    // Verify email function
    const handleVerifyEmail = async () =>{
        await sendEmailVerification(currentUser)
            .then(() =>{
                setEmailModal(true)
            })
    }

    // Change Password function
    const handleChangePassword = async () =>{
        await sendPasswordResetEmail(auth, currentUser.email)
            .then(() =>{
                setPasswordResetModal(true)
            })
            .catch((error) =>{
                const errorCode = error.code;
                console.log(errorCode)
            })
    }

    // Update displayName / Username
    const handleUpdateAccountForm = async (e) => {
        e.preventDefault();
        await updateProfile(currentUser, {
            displayName: usernameRef.current.value
        }).then(()=>{
            return setStatus('Username updated!')
        }).catch((error) =>{
            return console.log(error);
        })
    }

    return(
        <>
        <div className='account-dashboard-container-web'>
            <h1>Account Dashboard:</h1>
            <div className="dashboard-page-box">
                <div className="dashboard-box-left">
                    <img className="account-profile-img" src={profileImg  ? profileImg : UserPNG} alt='Profile Display'/>
                    <div className="upload-img-buttons-container">
                        <label className="account-file-upload-input">Upload file
                            <input ref={accountFileUploadRef} type='file' accept=".png, .jpg, .jpeg" onChange={handleFileUploadInput}/>
                        </label>
                        <button className="account-file-submit-btn" onClick={handleProfileImageUpload}>Update Image</button>
                    </div>
                    {fileUploadName}
                    <h4 className={imageStatus ? imageStatus : 'display-none'} id="imageStatus-display">{imageStatus}</h4>
                    <h4 className={fileUploadError ? fileUploadError : 'display-none'} id="fileUploadError-display">{fileUploadError}</h4>
                </div>
                <div className="dashboard-box-right">
                    <form id='dashboard-form' onSubmit={handleUpdateAccountForm}>
                        <label className="account-input-label">Username:</label>
                        <input ref={usernameRef} className='account-input' type='text' defaultValue={currentUser.displayName === null ? 'No username set.' : currentUser.displayName} id='account-username-input' required/>
                        <label className="account-input-label">Email Address:</label>
                        <input className='account-input' type='email' value={currentUser.email === null ? 'Undefined' : currentUser.email} id='account-email-input' disabled/>
                        <input className="account-update-btn" type='submit' id="account-input-update" value='Update information'/>
                    </form>
                    <div className="dashboard-box-right-bottom">
                        <button className="account-update-btn-bottom" onClick={handleVerifyEmail}>Verify Email</button>
                        <button className="account-update-btn-bottom" onClick={handleChangePassword}>Change Password</button>
                    </div>
                    <h4>{status}</h4>
                </div>
            </div>
        </div>
        <div className={`${emailModal ? `email-modal-container` : 'display-none'}`}>
            <div className="email-modal-box">
                <h1>Verification Email sent to:</h1>
                <h4>{currentUser.email}</h4>
                <button className="email-modal-close-btn" onClick={() =>{setEmailModal(false)}}>Close</button>
            </div>
        </div>
        <div className={`${passwordResetModal ? `password-reset-modal-container` : 'display-none'}`}>
            <div className="password-reset-modal-box">
                <h1>Password Reset Email sent to:</h1>
                <h4>{currentUser.email}</h4>
                <button className="password-reset-modal-close-btn" onClick={() =>{setPasswordResetModal(false)}}>Close</button>
            </div>
        </div>
        </>
    )
}

export default Dashboard;