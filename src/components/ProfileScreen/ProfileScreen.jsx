import React from 'react';
import Nav from '../Nav/Nav';
import { auth } from '../../firebase/firebase';
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';
import netflixavatar from '../../images/netflixavatar.png';
import './profilescreen.css';

const ProfileScreen = () => {
    const user = useSelector(selectUser);
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
							<p>{user.email}</p>
							<button onClick={() => auth.signOut()}>Sign out</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileScreen;
