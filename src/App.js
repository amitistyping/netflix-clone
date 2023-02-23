import React, { useEffect } from 'react';
import HomeScreen from './components/HomeScreen/HomeScreen';
import Login from './components/Login/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { auth } from './firebase/firebase';

const router = createBrowserRouter([
	{
		exact: true,
		path: '/',
		element: <HomeScreen />,
	},
	{
		exact: true,
		path: '/login',
		element: <Login />,
	},
]);

function App() {
	const user = null;

	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				console.log(userAuth);
			} else {
				
			}
		});
	}, []);

	return (
		<div className='app'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
