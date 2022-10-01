import React from "react";
import styled from "styled-components";
import Form from "./Form";

const LoginPage = ({ type }) => {
	return (
		<ContainerLogin>
			{type === "create" ? (
				<h1 className="title">Crear cuenta</h1>
			) : (
				<h1 className="title">Iniciar sesion</h1>
			)}

			{/* A Form le tengo que pasar como prop si voy a crear una cuenta o ingresar */}
			<Form type={type} />
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

	.title {
		font-size: 5rem;
		margin: 0 2rem;
		font-weight: 600;
		color: var(--color1);
		text-shadow: 3px 3px 0px var(--color3);
		text-align: center;
	}

	.subtitle {
		font-size: 4rem;
		margin: 2rem;
		text-align: justify;
	}
`;
