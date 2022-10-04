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
	margin: 2rem 2rem;
	overflow-x: hidden;

	.title {
		font-size: 5rem;
		margin: 0 2rem;
		font-weight: 600;
		color: var(--primary);
		text-shadow: 4px 4px 0px var(--black);
		text-align: center;
	}

	.subtitle {
		font-size: 3rem;
		margin: 3rem 4rem;
		color: var(--black);
		text-align: start;
	}

	.rotate-words {
		display: inline;
		margin-left: 1rem;
	}

	.rotate-words span {
		font-size: 2.8rem;
		text-align: center;
		width: max-content;
		position: absolute;
		background-color: var(--primary);
		color: var(--white);
		padding-inline: 1rem;
		padding-top: 0.5rem;
		opacity: 0;
		transform-origin: 10% 75%;
		animation: rotateWords 9s var(--d) linear infinite;
	}

	.uno {
		--d: 0s;
	}
	.dos {
		--d: 3s;
	}
	.tres {
		--d: 6s;
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
		margin: 8rem 2rem 5rem 2rem;
		padding: 2rem;
		border-radius: 3rem;
		background-color: #ffffff;

		@media (min-width: 576px) {
			width: 70%;
		}

		@media (min-width: 992px) {
			width: 40%;
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
