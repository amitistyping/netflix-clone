import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import './row.css';

const BASE_URL = 'https://image.tmdb.org/t/p/original/';

const Row = (props) => {
	const { title, fetchURL, isLargeRow } = props;
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		if (fetchURL) {
			(async () => {
				const request = await axios.get(fetchURL);
				setMovies(request.data.results);
			})();
		}
	}, [fetchURL]);
	return (
		<div className='row'>
			<h2>{title}</h2>
			<div className='row__posters'>
				{movies.map((movie) =>
					(movie.poster_path || movie.backdrop_path) && isLargeRow ? (
						<img
							key={movie.id}
							className='row__poster row__posterLarge'
							src={BASE_URL + movie.poster_path}
							alt='movie thumbnail'
						/>
					) : (
						<img
							key={movie.id}
							className='row__poster'
							src={BASE_URL + movie.backdrop_path}
							alt={movie.name}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default Row;
