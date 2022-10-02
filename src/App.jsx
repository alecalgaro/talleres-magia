import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import HomePage from "./components/HomePage";
import CoursePage from "./components/CoursePage";
import Game from "./components/Game";
import NotFound from "./components/NotFound";
import LoginPage from "./components/LoginPage";

function App() {
	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/magia/:courseName" element={<CoursePage />} />
				<Route path="/magia/catolica/:idGame" element={<Game course="catholic" />} />
				<Route path="/magia/familiar/:idGame" element={<Game course="family" />} />
				<Route path="/magia/educativa/:idGame" element={<Game course="educational" />} />

				{/* A LoginPage le tengo que pasar un prop title para saber si voy a crear una cuenta o ingresar */}
				<Route path="/login" element={<LoginPage type="create" />} />

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
