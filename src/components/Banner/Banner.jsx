import React from 'react';
import './banner.css';

//class based component as required by rubrik for NSCC's assignment

class Banner extends React.Component {
	render() {
		return (
			<header
				className='banner'
				style={{
					backgroundSize: 'cover',
					backgroundImage: `url('https://www.cine-tales.com/wp-content/uploads/Netflix.jpg')`,
					backgroundPosition: 'center center',
				}}
			>
				<div className='banner__contents'>
					<div className='banner__title'>banner title</div>
					<div className='banner__buttons'>
						<button className='banner__button'>Play</button>
						<button className='banner__button'>More info</button>
					</div>
					<h1 className='banner__description'>Banner description text</h1>
				</div>
				<div className='banner__fadeBottom'></div>
			</header>
		);
	}
}

export default Banner;
