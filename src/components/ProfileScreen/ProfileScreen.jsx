import React from 'react';
import Nav from '../Nav/Nav';
import netflixavatar from '../../images/netflixavatar.png';
import './profilescreen.css';

const ProfileScreen = () => {
	return (
		<div className='profileScreen'>
			<Nav />
			<div className='profileScreen__body'>
				<div className='profileScreen__bodyContent'>
					<h1>Edit Profile</h1>
					<div className='profileScreen__infoContainer'>
						<div className='profileScreen__avatar'>
							<img src={netflixavatar} alt='avatar' />
						</div>
						<div className='profileScreen__info'>
							<p>Useremail@.com</p>
							<button>Sign out</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileScreen;
