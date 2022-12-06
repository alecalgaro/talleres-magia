import React from "react";
import styled from "styled-components";
import logo from "../../img/logo_educational.webp";

const InfoEducationalMagic = () => {
	return (
		<>
			<ContainerInfo>
				<h1>
					<img src={logo} alt="Logo del proyecto de talleres de magia educativa" />
				</h1>
				<a href="" target="_blank">
					<Button disabled>Ver trailer</Button>
				</a>
				<br />
				<p>Aún no hay información sobre este taller</p>
			</ContainerInfo>
			;
		</>
	);
};

export default InfoEducationalMagic;

const ContainerInfo = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	h1 {
		margin: 0 !important;
	}

	img {
		width: 340px;
		margin: 1rem 1rem 0 1rem;
	}

	p {
		font-size: 1.6rem;
		width: 80%;
		margin-bottom: 3rem;
		max-width: 70rem;
	}

	.italic {
		font-style: italic;
	}

	h3 {
		font-size: 2rem;
		margin-bottom: 2rem;
		color: var(--black);
	}
`;

const Button = styled.button`
	font-size: 1.6rem;
	text-transform: uppercase;
	background-color: var(--primary);
	color: var(--white);
	padding: 1rem 1rem 0.5rem 1rem;
	margin: 0 0 1.5rem 0;
	border: none;
	border-radius: 1rem;
	//transform: rotate(-1deg);
	transition: all 0.3s;
	cursor: not-allowed;

	@media (hover: hover) {
		&:hover {
			transform: scale(1.1);
		}
	}
`;
