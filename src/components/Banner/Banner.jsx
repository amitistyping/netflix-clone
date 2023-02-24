import React from 'react';
import requests from '../../api/api';
import axios from '../../api/axios';
import './banner.css';

//class based component as required by rubrik for NSCC's assignment

class Banner extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movie: null,
		};
	}

	async componentDidMount() {
		const movie = await this.fetchData();
		this.setState({ movie });
	}

	async fetchData() {
		const request = await axios.get(requests.fetchNetflixOriginals);
		return request.data.results[Math.floor(Math.random() * request.data.results.length - 1)];
	}

	render() {
		return (
			<>
				{this.state.movie ? (
					<header
						className='banner'
						style={{
							backgroundSize: 'cover',
							backgroundImage: `url("https://image.tmdb.org/t/p/original/${this.state.movie.backdrop_path}")`,
							backgroundPosition: 'top',
						}}
					>
						<div className='banner__contents'>
							<div className='banner__title'>
								{this.state.movie.title || this.state.movie.name || this.state.movie.original_name}
							</div>
							<div className='banner__buttons'>
								<button className='banner__button'>Play</button>
								<button className='banner__button'>More info</button>
							</div>
							<h1 className='banner__description'>
								{this.state.movie.overview.length > 180
									? this.state.movie.overview.substring(0, 180) + '...'
									: this.state.movie.overview}
							</h1>
						</div>

						<div className='banner__fadeBottom'></div>
					</header>
				) : (
					<p>loading</p>
				)}
			</>
		);
	}
}

export default Banner;
