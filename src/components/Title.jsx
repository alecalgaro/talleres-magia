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
	font-size: 3rem;
	text-align: center;
	color: var(--white);
	background-color: var(--primary);
	transform: rotate(-1deg);

	@media (min-width: 768px) {
		font-size: 4rem;
	}
`;
