import React, { useState } from "react";
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

	onAuthStateChanged(auth, (userFirebase) => {
		if (userFirebase) {
			// si hay una sesion iniciada (o cuando se inicia sesion)
			setUser(userFirebase);
		} else {
			// si no hay una sesion iniciada (o cuando se cierra sesion)
			setUser(null);
		}
	});

	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<HomePage user={user} />} />
				<Route path="/magia/:courseName" element={<CoursePage />} />
				<Route path="/magia/catolica/:idGame" element={<GamePage course="catholic" />} />
				<Route path="/magia/familiar/:idGame" element={<GamePage course="family" />} />
				<Route path="/magia/educativa/:idGame" element={<GamePage course="educational" />} />

				{/* A LoginPage le tengo que pasar un prop title para saber si voy a crear una cuenta o ingresar */}
				<Route path="/login" element={<LoginPage />} />

				{/* Cuando tenga hecha la parte de usuarios, aplico la siguiente validacion en las rutas para 
        que se pueda acceder solo si tiene un usuario, caso contrario te redirige a la pagina de inicio "/" 
        Ya lo probe usando una variable const user = false y funciona*/}
				{/* <Route path="/otra" element={user ? <CoursePage /> : <Navigate to="/" replace /> } /> */}

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
