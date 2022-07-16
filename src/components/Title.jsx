import React from "react";
import styled from "styled-components";

const Title = ({ title }) => {
	return <TitleSection>{title}</TitleSection>;
};

export default Title;

const TitleSection = styled.h2`
	padding: 1rem 1.5rem 0.5rem 1.5rem;
	margin-bottom: 2rem;
	font-weight: 600;
	font-size: 3rem;
	text-align: center;
	color: var(--color5);
	background-color: var(--color1);
	transform: rotate(-1deg);

	@media (min-width: 768px) {
		font-size: 4rem;
	}
`;
