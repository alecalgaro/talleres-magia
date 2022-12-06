import React from "react";
import styled from "styled-components";
import imgLogoWhatsapp from "../../img/icon-whatsapp.webp";
import logo_header from "../../img/logo_header.webp";

const Header = () => {
	return (
		<ContainerHeader>
			<h1>
				<img
					className="img_logo"
					src={logo_header}
					alt="Logo del proyecto de talleres de magia con propósito"
				/>
			</h1>
			<h3 className="subtitle">
				Talleres de magia <br />
				<div className="rotate-words">
					<span className="uno">católica</span>
					<span className="dos">educativa</span>
					<span className="tres">familiar</span>
				</div>
			</h3>
			<a
				href="https://wa.me/+5493456474803?text=Hola!%20Deseo%20adquirir%20un%20taller%20de%20magia"
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
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	margin: 0 2rem;
	overflow-x: hidden;
	overflow-y: hidden;

	.img_logo {
		width: 100%;
		max-width: 680px;
		padding: 0 2rem;
		animation: scale 0.5s ease forwards;
	}

	@keyframes scale {
		from {
			transform: scale(0);
		}
		to {
			transform: scale(1);
		}
	}

	.subtitle {
		font-size: 3.2rem;
		padding: 3rem 1rem;
		color: var(--black);
		text-align: center;
		animation: scale 0.5s ease forwards;

		@media (min-width: 567px) {
			font-size: 4rem;
			padding: 1rem 1rem;
		}
	}

	.rotate-words {
		display: flex;
		justify-content: center;
		margin-left: 1rem;
	}

	.rotate-words span {
		font-size: 3.2rem;
		text-align: center;
		width: max-content;
		position: absolute;
		color: var(--primary);
		text-shadow: 3.5px 2px 0 var(--black);
		opacity: 0;
		transform-origin: 10% 75%;
		animation: rotateWords 9s var(--d) linear infinite;

		@media (min-width: 567px) {
			font-size: 4rem;
		}
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
