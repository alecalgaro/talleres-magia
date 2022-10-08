import React from "react";
import styled from "styled-components";

const Title = ({ title }) => {
	return <TitleSection>{title}</TitleSection>;
};

export default Title;

const TitleSection = styled.h2`
	padding: 1rem 1.5rem 0.5rem 1.5rem;
	margin: 0 2rem 3rem 2rem;
	font-weight: 600;
	font-size: 2.8rem;
	text-align: center;
	color: var(--white);
	background-color: var(--primary);
	transform: rotate(-1deg);
	// le agrego un borde para evitar que se vea mal el borde inclinado algunas veces en movil
	border: 2px solid var(--primary);

	@media (min-width: 768px) {
		font-size: 3.5rem;
	}
`;
