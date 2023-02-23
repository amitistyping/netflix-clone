import requests from '../../api/api';

export const requestsWithAttr = [
	{
		title: 'NETFLIX ORIGINALS',
		fetchURL: requests.fetchNetflixOriginals,
		isLargeRow: true,
	},
	{
		title: 'Trending Now',
		fetchURL: requests.fetchTrending,
	},
	{
		title: 'Top Rated',
		fetchURL: requests.fetchTopRated,
	},
	{
		title: 'Action Movies',
		fetchURL: requests.fetchActionMovies,
	},
	{
		title: 'Comedy Movies',
		fetchURL: requests.fetchComedyMovies,
	},
	{
		title: 'Horror Movies',
		fetchURL: requests.fetchHorrorMovies,
	},
	{
		title: 'Romance Movies',
		fetchURL: requests.fetchRomanceMovies,
	},
	{
		title: 'Documentaries',
		fetchURL: requests.fetchDocumentaries,
	},
];
