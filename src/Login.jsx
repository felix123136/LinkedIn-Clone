import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from './firebase';
import './Login.css';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import Footer from './Footer';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
	const [signup, setSignup] = useState(false);
    const dispatch = useDispatch();

    const loginToApp = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password).catch((err) => {
			alert(err);
		});
	};

	const register = (e) => {
		e.preventDefault();
		if (!name) {
			return alert('Please enter a full name');
		}

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
					.catch((e) => {
						console.log(e);
					});
			})
			.catch((e) => {
				alert(e);
			});
	};

  return (<>
	{!signup ? (
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
						<input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
						<input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
						<label htmlFor="forgotPassword">Forgot password?</label>
						<button onClick={loginToApp} type="submit">Sign In</button>
				</form>
			</div>
			<p className="login_register">New to LinkedIn?{"   "}
				<span className="login_register_span" onClick={() => setSignup(true)}>Join now</span>
			</p>
			<Footer />
		</>
	) : (
		<>
			<div className="register_logo">
				<img src="https://www.pngkey.com/png/full/32-324267_design-manager-linkedin-linkedin.png" alt="" />
			</div>
			<h1 className="register_heading">Make the most of your professional life</h1>
			<div className="register">
				<form>
						<label htmlFor="full-name">Full Name (Required)</label>
						<input value={name} onChange={(e) => setName(e.target.value)} type="text" />
						<label htmlFor="profile-pic">Profile Picture URL (Optional)</label>
						<input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} type="text" />
						<label htmlFor="email">Email</label>
						<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
						<label htmlFor="password">Password</label>
						<input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
						<button onClick={register}>Agree & Join</button>
				</form>
				<p className="new_register">Already on LinkedIn?{"   "}
					<span className="new_register_span" onClick={() => {setSignup(false)}}>Sign in</span>
				</p>
			</div>
			<Footer />
		</>
	)}
	</>
  )
}

export default Login