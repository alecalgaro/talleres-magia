import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import HomePage from "./components/HomePage/HomePage";
import CoursePage from "./components/CoursePage/CoursePage";
import GamePage from "./components/GamePage/GamePage";
import NotFound from "./components/General/NotFound";
import LoginPage from "./components/LoginPage/LoginPage";
import MoreInformation from "./components/InfoPage/MoreInformation";

// imports de react-toastify:
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// imports de Firebase:
import firebaseApp from "./firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp);

function App() {
	const [user, setUser] = useState(null);
	const [enableToast, setEnableToast] = useState(true);
	const routePath = useLocation();

	// Notificacion de react-toastify
	const notify = (message) => {
		toast(message, {
			position: "top-center",
			delay: 800,
			autoClose: false,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			className: "toast_header",
		});
	};

	// Cada vez que se renderiza la App voy a comprobar con Firebase si tiene una sesion iniciada,
	// porque sino cada vez que se renderiza este componente se coloca como null por defecto en useState(null)
	useEffect(() => {
		// Funcion que se ejecuta cada vez que Firebase detecta un cambio en la autenticacion:
		onAuthStateChanged(auth, (userFirebase) => {
			if (userFirebase) {
				// si hay una sesion iniciada (o cuando se inicia sesion)
				setUser(userFirebase);
			} else {
				// si no hay una sesion iniciada (o cuando se cierra sesion)
				setUser(null);
				// Si no hay una sesion iniciada y aun no se mostro el toast, muestro para indicar como adquirir un taller
				if (enableToast === true) {
					notify(
						"Para adquirir uno de los talleres, haz click en el botón de Whatsapp que encontrarás abajo a la derecha o en la sección de contacto. Muchas gracias!"
					);
					// cambio el state para que no se vuelva a mostrar luego de cerrarlo:
					setEnableToast(false);
				}
			}
		});
	}, []);

	// Este useEffect es para que al cambiar de ruta se vaya siempre a la parte superior de la pagina
	// por eso es cada vez que cambia el routePath (obtenido de useLocation)
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [routePath]);

	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<HomePage user={user} />} />

				{user && <Route path="/:courseName" element={<CoursePage />} />}

				<Route path="/catolica/info" element={<MoreInformation course="catholic" />} />
				<Route path="/familiar/info" element={<MoreInformation course="family" />} />
				<Route path="/educativa/info" element={<MoreInformation course="educational" />} />

				<Route path="/catolica/:idGame" element={<GamePage course="catholic" />} />
				<Route path="/familiar/:idGame" element={<GamePage course="family" />} />
				<Route path="/educativa/:idGame" element={<GamePage course="educational" />} />

				<Route path="/login" element={<LoginPage />} />

				<Route path="*" element={<NotFound />} />
			</Routes>

			{/* Componente de notificacion de react-toastify. 
				El limit={1} es para que solo aparezca un toast a la vez */}
			<ToastContainer limit={1} />
		</>
	);
}

export default App;

const GlobalStyle = createGlobalStyle`
  :root {
	--primary:#2277cc;
	--secondary: #3399ff;
    --black:#282828;
    --grey:#bababa;
    --white:#fafafa;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
    background-color: var(--white);

	// estilos para los toast (de Home y Login)
	.toast_header, .toast_form {
		font-size: 1.4rem;
		text-align: center;
		margin: 2rem;
		position: relative;
		top: 50px;
	}

	// sobreescribo el z-indez de abajo para que no me tapa el Navbar
	.Toastify__toast-container {
		z-index: 1;
	}
  }

  section[id] {
    scroll-margin-top: 80px;
  }

  a {
    text-decoration: none;
  }

  p{
    color: var(--black);
  }
`;
