import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// imports de react-toastify:
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// imports de Firebase:
import firebaseApp from "../../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const Form = ({ type }) => {
	const navigate = useNavigate();

	// Notificaciones (alert) de react-toastify:
	const notify_error = (message) => {
		toast.error(message, {
			position: "top-center",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			className: "toast_form",
		});
	};

	const notify_info = (message) => {
		toast.info(message, {
			position: "top-center",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			className: "toast_form",
		});
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	async function createUser(data) {
		// gracias a handleSubmit de react-hook-form, en "data" obtiene los datos del formulario (como un objeto)

		// -Busco si alguien con ese email ya adquirio un taller (lo registro yo en Firebase cuando paga un taller)
		// -Si el usuario quiso crear una cuenta pero no compro antes un taller no estara registrado su correo
		// en Firebase, por lo tanto le muestro un alert (notify).
		// Y va dentro de un try-catch porque si ya existe una cuenta con ese correo y se intenta crear otra, se
		// captura el error que da Firebase en el catch y le muestro una notificacion.
		try {
			if (await findUser(data.email)) {
				// con await porque debe esperar a obtener la respuesta
				// Crear usuario:
				notify_info("Creando cuenta...");
				const user = await createUserWithEmailAndPassword(auth, data.email, data.password);

				if (user) {
					await signInWithEmailAndPassword(auth, data.email, data.password);
					navigate("/");
				}
			} else {
				notify_error("Debes adquirir un taller antes de crear una cuenta");
			}
		} catch (error) {
			notify_error("Ya existe un usuario registrado con ese correo");
		}
	}

	async function login(data) {
		// gracias a handleSubmit de react-hook-form, en "data" obtiene los datos del formulario (como un objeto)
		try {
			notify_info("Iniciando sesión...");
			const user = await signInWithEmailAndPassword(auth, data.email, data.password);
			navigate("/");
		} catch (error) {
			notify_error("No existe un usuario registrado con esos datos");
		}
	}

	// Busca si hay un documento para ese usuario que se quiere crear (lo agrego yo en Firebase cuando compran un taller)
	async function findUser(email) {
		// Crear referencia al documento:
		const docRef = doc(firestore, `users/${email}`);
		// Buscar documento:
		const result = await getDoc(docRef);
		// En ambos casos, si existe o no el documento, Firebase nos devuelve un objeto, por eso verificamos si existe:
		if (result.exists()) {
			// Codigo cuando si existe:
			return true;
		} else {
			// Codigo cuando no existe:
			return false;
		}
	}

	return (
		<>
			<ContainerForm>
				<form onSubmit={type === "create" ? handleSubmit(createUser) : handleSubmit(login)}>
					<label htmlFor="">Correo</label>
					<input
						autoFocus
						type="email"
						placeholder="Ingrese un correo"
						{...register("email", { required: true })}
					/>
					{errors.email?.type === "required" && <small>El campo no puede quedar vacío</small>}

					<label htmlFor="">Contraseña</label>
					<input
						type="password"
						placeholder="Ingrese una contraseña"
						{...register("password", {
							required: true,
							minLength: 6,
						})}
					/>
					{errors.password?.type === "required" && <small>El campo no puede quedar vacío</small>}
					{errors.password?.type === "minLength" && (
						<small>La contaseña debe tener al menos 6 caracteres</small>
					)}

					{type === "create" ? (
						<>
							<button type="submit">Crear cuenta</button>
						</>
					) : (
						<button type="submit">Ingresar</button>
					)}
				</form>
				{/* Componente de notificacion de react-toastify. 
				El limit={1} es para que solo aparezca un toast a la vez */}
				<ToastContainer limit={1} />
			</ContainerForm>
		</>
	);
};

export default Form;

const ContainerForm = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80%;

	form {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 35rem;
		margin-top: 2rem;

		label {
			font-size: 2rem;
			margin: 2rem 0 0.6rem 0;
			padding-left: 0.2rem;

			@media (min-width: 768px) {
				font-size: 1.8rem;
			}
		}

		input {
			font-size: 1.8rem;
			border: 2px solid var(--primary);
			border-radius: 6px;
			padding: 0.5rem;

			transition: all 0.3s;
			&:focus {
				outline: none;
				border-color: var(--secondary);
			}

			@media (min-width: 768px) {
				font-size: 1.6rem;
			}
		}

		button {
			width: 16rem;
			font-size: 1.6rem;
			text-transform: uppercase;
			background-color: var(--primary);
			color: var(--white);
			padding: 0.8rem;
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
			color: #da0000;
			margin-top: 0.6rem;
			padding-left: 0.2rem;
			font-size: 1.6rem;

			@media (min-width: 768px) {
				font-size: 1.4rem;
			}
		}
	}

	.toast_form {
		font-size: 1.4rem;
		text-align: center;
		margin: 2rem;
		position: relative;
		top: 50px;
	}
`;
