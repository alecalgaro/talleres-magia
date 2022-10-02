import React, { useState } from "react";
import styled from "styled-components";
import Form from "./Form";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";

const LoginPage = () => {
	const [typeForm, setTypeForm] = useState("create");

	return (
		<ContainerLogin>
			{typeForm === "create" ? (
				<>
					<Helmet>
						<title>Crear cuenta</title>
						<meta name="description" content="Página para registrarse como nuevo usuario" />
					</Helmet>

					<Navbar />
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

					<Navbar />
					<h1>Iniciar sesión</h1>
					<Form type={typeForm} />
					<p>
						¿Aún no tienes una cuenta creada? <br />
						<span onClick={() => setTypeForm("create")}>Presiona aquí para crearla</span>
					</p>
				</>
			)}
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

	span {
		font-style: italic;
		color: var(--color1);
		cursor: pointer;
	}
`;
