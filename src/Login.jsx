import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from './firebase';
import './Login.css';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();

    const loginToApp = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password).catch((err) => {
			alert(err);
		});
	};

	const register = () => {
		if (!name) {
			return alert('Please enter a full name');
		}

		console.log('register the user');

		createUserWithEmailAndPassword(auth, email, password)
			.then((userAuth) => {
				updateProfile(userAuth.user, {
					displayName: name,
					photoURL: profilePic,
				})
					.then(
						dispatch(
							login({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: name,
								photoURL: profilePic,
							})
						)
					)
					.catch((error) => {
						console.log('user not updated');
					});
			})
			.catch((err) => {
				alert(err);
			});
	};


  return (
    <>
        <div className="login_logo">
            <img src="https://www.pngkey.com/png/full/32-324267_design-manager-linkedin-linkedin.png" alt="" />
        </div>
        <div className="login">
            <div className="login_header">
                <h1>Sign in</h1>
                <p>Stay updated on your professional world</p>
            </div>
           <form>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name (Required)" type="text" />
                <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder="Profile Pic URL (Optional)" type="text" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
                <button onClick={loginToApp} type="submit">Sign In</button>
           </form>
        </div>
        <p className="login_register">New to Linkedin?{"   "}
            <span className="login_register_span" onClick={register}>Join now</span>
        </p>
    </>
  )
}

export default Login