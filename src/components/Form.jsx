import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Form = ({ type }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const customSubmit = (data) => {
		// gracias a handleSubmit de la libreria, en "data" obtiene los datos del formulario
		console.log(data);
	};

	return (
		<>
			<ContainerForm>
				<form onSubmit={handleSubmit(customSubmit)}>
					<label htmlFor="">Correo</label>
					<input
						type="email"
						placeholder="Ingrese un correo"
						{...register("email", { required: true })}
					/>
					{errors.email?.type === "required" && <small>El campo no puede quedar vacío</small>}

					<label htmlFor="">Contraseña</label>
					<input
						type="password"
						placeholder="Ingrese una contraseña"
						{...register("password", { required: true })}
					/>
					{errors.password?.type === "required" && <small>El campo no puede quedar vacío</small>}

					{type === "create" ? (
						<>
							<label htmlFor="">Código</label>
							<input
								type="text"
								placeholder="Ingrese el código recibido"
								{...register("code", { required: true })}
							/>
							{errors.code?.type === "required" && <small>El campo no puede quedar vacío</small>}

							<button type="submit">Crear cuenta</button>
						</>
					) : (
						<button type="submit">Ingresar</button>
					)}
				</form>
			</ContainerForm>
		</>
	);
};

export default Form;

const ContainerForm = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 70%;

	form {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-top: 3rem;

		@media (min-width: 768px) {
			width: 80%;
		}

		@media (min-width: 992px) {
			width: 50%;
		}

		label {
			font-size: 2rem;
			margin: 2rem 0 0.6rem 0;
			padding-left: 0.2rem;
		}

		input {
			font-size: 1.8rem;
			border: 2px solid var(--color1);
			border-radius: 6px;
			padding: 0.5rem 0.2rem;
		}

		button {
			width: 16rem;
			font-size: 1.6rem;
			text-transform: uppercase;
			background-color: var(--color1);
			color: var(--color5);
			padding: 1rem 1rem 0.5rem 1rem;
			border: none;
			border-radius: 1rem;
			margin: 2rem 0 1rem 0;

			cursor: pointer;
			transition: all 0.3s;

			&:hover {
				opacity: 0.8;
			}
		}

		small {
			color: red;
			margin-top: 0.6rem;
			padding-left: 0.2rem;
			font-size: 1.6rem;

			@media (min-width: 768px) {
				font-size: 1.4rem;
			}
		}
	}
`;
