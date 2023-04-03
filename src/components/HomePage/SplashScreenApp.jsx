import React from "react";
import styled from "styled-components";

const SplashScreenApp = () => {
	return (
		<SplashScreen>
			<span className="loader"></span>
		</SplashScreen>
	);
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
	background-color: var(--white);

	.loader {
		padding-right: 6.4rem;
	}

	.loader::after,
	.loader::before {
		animation: loader 1s linear infinite;
		content: "";
		border: 2px solid var(--primary);
		width: 64px;
		height: 64px;
		position: absolute;
		border-radius: 50%;
	}

	.loader::after {
		opacity: 0;
		animation-delay: 1s;
	}

	@keyframes loader {
		0% {
			transform: scale(0);
			opacity: 1;
		}
		100% {
			transform: scale(1);
			opacity: 0;
		}
	}
`;
