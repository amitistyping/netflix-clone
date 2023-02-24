import React from 'react';
import { useNavigate } from 'react-router';
import './nav.css';
import netflixlogo from '../../images/netflixlogo.png';
import netflixavatar from '../../images/netflixavatar.png';

const Nav = () => {
	const navigate = useNavigate();

	return (
		<div className='nav nav__black'>
			<div className='nav__contents'>
				<img className='nav__logo' src={netflixlogo} alt='logo' />
				<img className='nav__avatar' src={netflixavatar} alt='avatar' onClick={() => navigate('/profile')} />
			</div>
		</div>
	);
};

export default Nav;
