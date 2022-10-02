import React from "react";
import styled from "styled-components";
import Form from "./Form";
import Navbar from "./Navbar";
import imgLogoWhatsapp from "../img/icon-whatsapp.webp";
import { Helmet } from "react-helmet";

const LoginPage = ({ type }) => {
	return (
		<ContainerLogin>
			{type === "create" ? (
				<Helmet>
					<title>Crear cuenta</title>
					<meta name="description" content="Página para registrarse como nuevo usuario" />
				</Helmet>
			) : (
				<Helmet>
					<title>Iniciar sesion</title>
					<meta name="description" content="Página para iniciar sesion" />
				</Helmet>
			)}

			<Navbar />
			{type === "create" ? <h1>Crear cuenta</h1> : <h1>Iniciar sesion</h1>}

			<Form type={type} />

			{type === "create" ? (
				<>
					<p>Si aún no adquiriste el curso, haz click en el icono de Whatsapp para comunicarte</p>
					<a
						href="https://wa.me/3456474803?text=Quiero%20adquirir%20un%20taller%20de%20magia"
						target="_blank"
					>
						<img className="btn-whatsapp" src={imgLogoWhatsapp} alt="Logo whatsapp" />
					</a>
				</>
			) : null}
		</ContainerLogin>
	);
};

export default LoginPage;

const ContainerLogin = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	overflow-x: hidden;

	h1 {
		font-size: 3.5rem;
		margin: 2rem 2rem 0 2rem;
		font-weight: 600;
		color: var(--color1);
		text-shadow: 2px 2px 0px var(--color3);
		text-align: center;
	}

	p {
		font-size: 1.6rem;
		width: 80%;
		margin: 4rem 2rem;
		text-align: center;
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
