import React from "react";
import styled from "styled-components";
import imgLogoWhatsapp from "../img/icon-whatsapp.webp";

const Header = () => {
	return (
		<ContainerHeader>
			<h1 className="title">
				¡Te doy la bienvenida!
				<br />
			</h1>
			<h3 className="subtitle">
				Aquí encontrarás talleres de <br /> magia
				<div className="rotate-words">
					<span className="uno">católica</span>
					<span className="dos">educativa</span>
					<span className="tres">familiar</span>
				</div>
			</h3>
			<p className="description">
				Para adquirir alguno de los talleres, haz click en el botón de Whatsapp que encontrarás
				abajo a la derecha o en la sección de contacto. <br /> Muchas gracias!
			</p>
			<a
				href="https://wa.me/3456474803?text=Quiero%20adquirir%20un%20taller%20de%20magia"
				target="_blank"
			>
				<img className="btn-whatsapp" src={imgLogoWhatsapp} alt="Logo whatsapp" />
			</a>
		</ContainerHeader>
	);
};

export default Header;

const ContainerHeader = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	overflow-x: hidden;

	.title {
		font-size: 6rem;
		margin: 0 2rem;
		font-weight: 600;
		color: var(--color1);
		text-shadow: 4px 4px 0px var(--color3);
		text-align: center;
	}

	.subtitle {
		font-size: 4rem;
		margin: 2rem;
		text-align: justify;
	}

	.rotate-words {
		display: inline;
		margin-left: 1rem;
	}

	.rotate-words span {
		font-size: 3.5rem;
		text-align: center;
		width: max-content;
		position: absolute;
		background-color: var(--color1);
		color: var(--color5);
		padding-inline: 1rem;
		padding-top: 0.5rem;
		opacity: 0;
		transform-origin: 10% 75%;
		animation: rotateWords 12s var(--d) linear infinite;
	}

	.uno {
		--d: 0s;
	}
	.dos {
		--d: 4s;
	}
	.tres {
		--d: 8s;
	}

	@keyframes rotateWords {
		5% {
			opacity: 1;
		}
		10%,
		20% {
			opacity: 1;
			transform: rotate(3deg);
		}
		15% {
			transform: rotate(-1deg);
		}
		25% {
			opacity: 0;
			transform: translateY(9rem) rotate(10deg);
		}
	}

	.description {
		font-size: 2rem;
		text-align: center;
		margin: 10rem 2rem 5rem 2rem;

		@media (min-width: 576px) {
			width: 70%;
		}

		@media (min-width: 992px) {
			width: 50%;
		}
	}

	.btn-whatsapp {
		width: 6.4rem;
		position: fixed;
		bottom: 0;
		right: 0;
		margin: 2rem;
		z-index: 9;
		transition: all 0.3s;

		:hover {
			opacity: 0.8;
		}
	}
`;
