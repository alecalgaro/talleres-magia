import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFound = () => {
	return (
		<Container>
			<h2>No existe la página a la que intentas acceder</h2>
			<Link to="/">Volver al inicio</Link>
		</Container>
	);
};

export default NotFound;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	background-color: var(--grey);

	h2 {
		font-size: 2.5rem;
		text-align: center;
		padding: 0 2rem;
		margin-bottom: 2rem;
	}

	a {
		color: var(--color1);
		font-size: 2rem;
	}
`;
