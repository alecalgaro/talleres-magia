import React, { useState } from "react";
import styled from "styled-components";
import Form from "./Form";
import Navbar from "../General/Navbar";
import imgLogoWhatsapp from "../../img/icon-whatsapp.webp";
import { Helmet } from "react-helmet";

const LoginPage = () => {
	const [typeForm, setTypeForm] = useState("create");

	return (
		<>
			<Navbar />
			<main>
				<ContainerLogin>
					{typeForm === "create" ? (
						<>
							<Helmet>
								<title>Crear cuenta</title>
								<meta name="description" content="Página para registrarse como nuevo usuario" />
							</Helmet>

							<h1>Crear cuenta</h1>
							<Form type={typeForm} />
							<p>
								¿Ya tienes una cuenta creada? <br />
								<span onClick={() => setTypeForm("login")}>Presiona aquí para iniciar sesión</span>
							</p>
						</>
					) : (
						<>
							<Helmet>
								<title>Iniciar sesion</title>
								<meta name="description" content="Página para iniciar sesion" />
							</Helmet>

							<h1>Iniciar sesión</h1>
							<Form type={typeForm} />
							<p>
								¿Aún no tienes una cuenta creada? <br />
								<span onClick={() => setTypeForm("create")}>Presiona aquí para crearla</span>
							</p>
						</>
					)}
					<a
						href="https://wa.me/+5493456474803?text=Hola!%20Deseo%20adquirir%20un%20taller%20de%20magia"
						target="_blank"
					>
						<img className="btn-whatsapp" src={imgLogoWhatsapp} alt="Logo whatsapp" />
					</a>
				</ContainerLogin>
			</main>
		</>
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
	animation: scale 0.5s ease forwards;

	@keyframes scale {
		from {
			transform: scale(0);
		}
		to {
			transform: scale(1);
		}
	}

	h1 {
		font-size: 3.5rem;
		margin: 2rem 2rem 0 2rem;
		font-weight: 600;
		color: var(--primary);
		text-shadow: 2px 2px 0px var(--black);
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

	span {
		font-style: italic;
		color: var(--primary);
		cursor: pointer;
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
