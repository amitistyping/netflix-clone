import React, { useState } from 'react';
import Signin from '../Signin/Signin';
import netflixlogo from '../../images/netflixlogo.png';
import './login.css';

const Login = () => {
	const [signIn, setSignIn] = useState(true);

	return (
		<div className='loginScreen'>
			<header className='loginScreen__header'>
				<div className='loginScreen__headerLogoContainer'>
					<img className='loginScreen__headerlogo' src={netflixlogo} alt='login picture' />
				</div>
				<div className='loginScreen__headerButtonContainer'>
					<button className='loginScreen__headerButton'>Sign In</button>
				</div>
			</header>
			{signIn ? (
				<Signin />
			) : (
				<div className='loginScreen__body'>
					<div className='loginScreen__bodyContent'>
						<h1>Unlimited films, TV programmes and more.</h1>
						<h3>Watch anywhere. Cancel anytime.</h3>
						<p>Ready to watch? Enter email to create or restart your membership.</p>
						<div className='loginScreen__input'>
							<form>
								<input type='email' placeholder='EMAIL ADDRESS' />
								<button className='loginScreen__inputButton'>GET STARTED</button>
							</form>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Login;
