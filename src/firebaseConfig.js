// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Recordar que con Vite las variables de entorno deben llevar el prefijo "VITE"
// y para utilizarlas se debe usar import.meta.env.nombreVariable.
// Luego los valores de las variables se ingresan en Vercel desde Project Settings - Environment Variables
const firebaseConfig = {
	apiKey: import.meta.env.VITE_APP_FIREBASE_APIKEY,
	authDomain: import.meta.env.VITE_APP_FIREBASE_AUTHDOMAIN,
	projectId: import.meta.env.VITE_APP_FIREBASE_PROJECTID,
	storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGEBUCKET,
	messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGINGSENDERID,
	appId: import.meta.env.VITE_APP_FIREBASE_APPID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
