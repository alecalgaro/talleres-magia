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
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-brand-instagram"
						width="60"
						height="60"
						viewBox="0 0 24 24"
						stroke-width="1.2"
						stroke="#133757"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<rect x="4" y="4" width="16" height="16" rx="4" />
						<circle cx="12" cy="12" r="3" />
						<line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
					</svg>
				</a>
				<a
					href="https://wa.me/+5493456474803?text=Hola!%20Deseo%20adquirir%20un%20taller%20de%20magia"
					target="_blank"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-brand-whatsapp"
						width="60"
						height="60"
						viewBox="0 0 24 24"
						stroke-width="1.2"
						stroke="#133757"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
						<path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
					</svg>
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

	svg {
		cursor: pointer;
		transition: all 0.3s;

		&:hover {
			stroke: #3399ff;
		}
	}
`;
