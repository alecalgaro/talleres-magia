import React from "react";
import { Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import HomePage from "./components/HomePage";
import CoursePage from "./components/CoursePage";

function App() {
	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/taller" element={<CoursePage />} />
			</Routes>
		</>
	);
}

export default App;

const GlobalStyle = createGlobalStyle`
  :root {
    --color1:#487aa1;
    --color2:#00A8CC;
    --color3:#3d3c3b;
    --color4:#7c8071;
    --color5:#f7f7f7;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
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
