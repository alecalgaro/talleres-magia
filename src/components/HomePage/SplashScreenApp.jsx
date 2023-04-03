import React from "react";
import styled from "styled-components";

const SplashScreenApp = () => {
	return <SplashScreen />;
};

export default SplashScreenApp;

const SplashScreen = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0%;
	left: 0%;
	height: 100vh;
	width: 100vw;
	z-index: 99;
	background-color: var(--white);
`;
