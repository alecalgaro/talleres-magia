// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCgKkKpk1roD5iaW5Eb5BbyrGKliNqtNeI",
	authDomain: "talleres-magia.firebaseapp.com",
	projectId: "talleres-magia",
	storageBucket: "talleres-magia.appspot.com",
	messagingSenderId: "368020632335",
	appId: "1:368020632335:web:cf8f621ff8fa5b85ca847a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
