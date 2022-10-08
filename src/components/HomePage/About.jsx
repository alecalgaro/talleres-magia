import React from "react";
import styled from "styled-components";
import Title from "../General/Title";
import imgPerfil from "../../img/img-perfil.webp";

const About = () => {
	return (
		<ContainerAbout id="sobre-mi">
			<Title title="Sobre mí" />
			<img src={imgPerfil} alt="foto" />
			<h3>Alejandro Calgaro</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto enim voluptates, non
				nisi velit exercitationem eaque quam neque? Iusto natus officia molestias odit nam repellat
				minima cupiditate quo suscipit iste?
			</p>
		</ContainerAbout>
	);
};

export default About;

const ContainerAbout = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 10rem 0;

	img {
		width: 15rem;
		@media (min-width: 768px) {
			width: 18rem;
		}
	}

	h3 {
		padding: 1rem 1.5rem 0.5rem 1.5rem;
		font-weight: 600;
		font-size: 2rem;
		text-align: center;
		background-color: var(--primary);
		transform: rotate(-1deg);
		position: relative;
		bottom: 2rem;
		color: var(--white);

		@media (min-width: 768px) {
			font-size: 3rem;
			bottom: 3rem;
		}
	}

	p {
		font-size: 1.8rem;
		margin: 1rem 2rem;
		width: 90%;
		text-align: center;

		@media (min-width: 768px) {
			width: 70%;
		}
		@media (min-width: 992px) {
			width: 50%;
		}
	}
`;