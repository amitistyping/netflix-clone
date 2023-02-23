import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBXSCwQ4E72fwLa-eTnNV-1UF2NTLC1MME',
	authDomain: 'netflixclone-f1036.firebaseapp.com',
	projectId: 'netflixclone-f1036',
	storageBucket: 'netflixclone-f1036.appspot.com',
	messagingSenderId: '518461051496',
	appId: '1:518461051496:web:63b35394966a9d3b5061dd',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
