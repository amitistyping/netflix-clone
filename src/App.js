import React, { useEffect } from 'react';
import HomeScreen from './components/HomeScreen/HomeScreen';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { auth } from './firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './components/ProfileScreen/ProfileScreen';

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				console.log(userAuth.uid, userAuth.email);
				dispatch(login({ uid: userAuth.uid, email: userAuth.email }));
			} else {
				dispatch(logout);
			}
		});
		return unsubscribe;
	}, [dispatch]);

	return (
		<Router>
			<div className='app'>
				{!user ? (
					<Login />
				) : (
					<Routes>
						<Route path='/' element={<HomeScreen />} />
						<Route path='/profile' element={<ProfileScreen />} />
					</Routes>
				)}
			</div>
		</Router>
	);
}

export default App;
