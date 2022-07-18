import React from "react";
import styled from "styled-components";
import Title from "./Title";
import iconWhatsapp from "../img/icon-whatsapp.png";
import iconInstagram from "../img/icon-instagram.png";

const Contact = () => {
	return (
		<ContainerContact id="contacto">
			<Title title="Contacto" />
			<p>
				Si deseas adquirir algún taller o realizar una consulta, podes comunicarte a través de los
				siguientes medios presionando el ícono correspondiente.
			</p>
			<div>
				<a href="">
					<img src={iconInstagram} alt="icono instagram" />
				</a>
				<a href="">
					<img src={iconWhatsapp} alt="icono whatsapp" />
				</a>
			</div>
		</ContainerContact>
	);
};

export default Contact;

const ContainerContact = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin: 10rem 0;

	p {
		width: 80%;
		font-size: 1.8rem;
		text-align: center;

		@media (min-width: 992px) {
			width: 50%;
		}
	}

	div {
		display: flex;
		gap: 5rem;
		margin-top: 2rem;
	}

	img {
		width: 4rem;
		cursor: pointer;
		transition: all 0.3s;

		&:hover {
			transform: scale(1.1);
		}
	}
`;
