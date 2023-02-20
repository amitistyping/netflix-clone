import React from 'react';
import './nav.css';
import netflixlogo from '../../images/netflixlogo.png';
import netflixavatar from '../../images/netflixavatar.png';

const Nav = () => {
	return (
		<div className='nav nav__black'>
			<div className='nav__contents'>
				<img className='nav__logo' src={netflixlogo} alt='logo' />
				<img className='nav__avatar' src={netflixavatar} alt='avatar' />
			</div>
		</div>
	);
};

export default Nav;
