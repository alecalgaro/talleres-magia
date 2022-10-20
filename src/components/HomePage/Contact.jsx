import React from "react";
import styled from "styled-components";
import Title from "../General/Title";
import iconWhatsapp from "../../img/icon-whatsapp.webp";
import iconInstagram from "../../img/icon-instagram.webp";

const Contact = () => {
	return (
		<ContainerContact id="contacto">
			<Title title="Contacto" />
			<p>
				Si deseas adquirir algún taller o realizar una consulta, podes comunicarte a través de
				Whatsapp o instagram presionando el ícono correspondiente.
			</p>
			<div>
				<a href="https://www.instagram.com/alecalgaro/" target="_blank">
					<img src={iconInstagram} alt="icono instagram" />
				</a>
				<a
					href="https://wa.me/+5493456474803?text=Hola!%20Deseo%20adquirir%20un%20taller%20de%20magia"
					target="_blank"
				>
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
		margin-top: 2.5rem;
	}

	img {
		width: 6rem;
		cursor: pointer;
		transition: all 0.3s;

		&:hover {
			opacity: 0.8;
		}
	}
`;
