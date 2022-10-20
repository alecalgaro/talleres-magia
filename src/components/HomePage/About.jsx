import React from "react";
import styled from "styled-components";
import Title from "../General/Title";
import imgPerfil from "../../img/img-perfil.webp";

const About = () => {
	return (
		<ContainerAbout id="sobre-mi">
			<Title title="Sobre mí" />
			<img src={imgPerfil} alt="Foto de perfil" />
			<h3>Alejandro Calgaro</h3>
			<p>
				Tengo 26 años, soy de la ciudad de Chajari (Entre Ríos). Me recibí de Analista en
				Informática Aplicada y continúo estudiando Ingeniería en Informática (FICH - UNL, Santa Fe).
				<br /> <br />A los 15 años comencé a aprender juegos de magia sencillos como algunos de los
				que verás en estos talleres, y luego seguí estudiando y aprendiendo a través de libros,
				cursos y conferencias online, etc. Hace 9 años aproximadamente que realizo shows de magia en
				cumpleaños infantiles, festejos familiares, cumpleaños de 15, encuentros de jóvenes y otros
				tipos de eventos.
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
