import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";

const HomePage = () => {
	return (
		<ContainerHome>
			<Navbar />
			<header>
				<Header />
			</header>
			<body>
				<About />
			</body>
		</ContainerHome>
	);
};

export default HomePage;

const ContainerHome = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
`;
