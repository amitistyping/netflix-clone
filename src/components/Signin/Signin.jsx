import React, { useRef } from 'react';
import { auth } from '../../firebase/firebase';
import './signin.css';

const Signin = () => {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const signUp = async (e) => {
		try {
			e.preventDefault();
			const resp = await auth.createUserWithEmailAndPassword(
				emailRef.current.value,
				passwordRef.current.value
			);
			console.log(resp);
		} catch (error) {
			alert(error);
		}
	};

	const signIn = async (e) => {
		try {
			e.preventDefault();
			const resp = await auth.signInWithEmailAndPassword(
				emailRef.current.value,
				passwordRef.current.value
			);
			console.log(resp);
		} catch (error) {
			alert(error);
		}
	};

	return (
		<div className='signInContainer'>
			<div className='signInContainer__content'>
				<form>
					<h1>Sign In</h1>
					<input ref={emailRef} type='email' placeholder='email' />
					<input ref={passwordRef} type='password' placeholder='password' />
					<button type='submit' onClick={signIn}>
						Sign In
					</button>
					<h4>
						<span className='signInContainer__contentSignup'>New to Netflix?</span>{' '}
						<span className='signInContainer__contentSignupLink' onClick={signUp}>
							Sign up now.
						</span>
					</h4>
				</form>
			</div>
		</div>
	);
};

export default Signin;
