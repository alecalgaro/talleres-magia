import React from "react";
import styled from "styled-components";

const Title = ({ title }) => {
	return <TitleSection>{title}</TitleSection>;
};

export default Title;

const TitleSection = styled.h2`
	/* padding: 1rem 1.5rem 0.5rem 1.5rem; */
	margin: 0 2rem 3rem 2rem;
	font-weight: 800;
	font-size: 2.8rem;
	text-align: center;
	color: var(--black);
	/* background-color: var(--primary); */
	transform: rotate(-1deg);
	text-transform: uppercase;
	@media (min-width: 768px) {
		font-size: 3.5rem;
	}

	&:after {
		content: "";
		display: block; // para que aparezca abajo
		background-color: var(--secondary);
		height: 8px;
		margin: -1.8rem 0 0 0;
	}
`;
