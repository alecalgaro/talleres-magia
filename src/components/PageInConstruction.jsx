import React from "react";
import styled from "styled-components";

const PageInConstruction = () => {
	return (
		<Container>
			<h1>Magia con propósito</h1>
			<h2>Sitio web en desarrollo</h2>
		</Container>
	);
};

export default PageInConstruction;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;

	h1 {
		font-size: 2.4rem;
		color: var(--primary);
	}

	h2 {
		font-size: 2rem;
		color: var(--secondary);
	}
`;
