import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import HomePage from "./components/HomePage";
import CoursePage from "./components/CoursePage";
import GamePage from "./components/GamePage";
import NotFound from "./components/NotFound";
import LoginPage from "./components/LoginPage";

import firebaseApp from "./credentials";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp);

function App() {
	const [user, setUser] = useState(null);

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
			}
		});
	}, []);

	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<HomePage user={user} />} />

				{/* A las rutas de cursos te permite ingresar solo si hay una cuenta de usuario abierta 
        y si se presiona uno de los botones, pero si se escribe la ruta en la barra de busqueda del 
        navegador no pude hacer que funcione solo cuando hay una cuenta abierta porque cuando evaluo "user"
        al comienzo es "null" y me ejecuta el Navigate. Igual no es tan importante porque es mas normal
        que ingresen desde los botones de cada taller */}
				<Route
					path="/magia/:courseName"
					element={user ? <CoursePage /> : <Navigate to="/" replace />}
				/>

				<Route path="/magia/catolica/:idGame" element={<GamePage course="catholic" />} />
				<Route path="/magia/familiar/:idGame" element={<GamePage course="family" />} />
				<Route path="/magia/educativa/:idGame" element={<GamePage course="educational" />} />

				<Route path="/login" element={<LoginPage />} />

				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;

const GlobalStyle = createGlobalStyle`
  :root {
    --color1:#487aa1;
    --color2:#00A8CC;
    --color3:#282828;
    --color4:#7c8071;
    --color5:#f7f7f7;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    scroll-behavior: smooth;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
    background-color: var(--color5);
  }

  section[id] {
    scroll-margin-top: 80px;
  }

  a {
    text-decoration: none;
  }

  p{
    color: var(--color3);
  }
`;
