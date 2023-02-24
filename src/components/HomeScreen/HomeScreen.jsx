import React from 'react';
import Nav from '../Nav/Nav';
import Banner from '../Banner/Banner';
import Row from '../Row/Row';
import { requestsWithAttr } from './homeScreenConstants';
import './homescreen.css';

const HomeScreen = () => {
	return (
		<div className='homescreen'>
			<Nav />
			<Banner />
			{requestsWithAttr.map((requestWithAttr) => (
				<Row
					key={requestWithAttr.title}
					title={requestWithAttr.title}
					fetchURL={requestWithAttr.fetchURL}
					isLargeRow={requestWithAttr.isLargeRow}
				/>
			))}
		</div>
	);
};

export default HomeScreen;
