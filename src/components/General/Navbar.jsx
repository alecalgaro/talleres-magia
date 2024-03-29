import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logo_navbar from "../../img/logo_navbar.webp";

import firebaseApp from "../../firebaseConfig";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(firebaseApp);

function Navbar({ user, page }) {
	const navigate = useNavigate();
	return (
		<>
			<NavContainer>
				{user === null && page === "home" ? (
					<>
						<div className="menu_izq">
							<a href="#talleres">Talleres</a>
							<a href="#sobre-mi">Sobre mi</a>
						</div>
						<a href="#">
							<img src={logo_navbar} alt="logo" />
						</a>
						<div className="menu_der">
							<a href="#contacto">Contacto</a>
							<Link to="/login">Ingresar</Link>
						</div>
					</>
				) : user !== null && page === "home" ? (
					<>
						<div className="menu_izq">
							<a href="#talleres">Talleres</a>
							<a href="#sobre-mi">Sobre mi</a>
						</div>
						<a href="#">
							<img src={logo_navbar} alt="logo" />
						</a>
						<div className="menu_der">
							<a href="#contacto">Contacto</a>
							<button onClick={() => signOut(auth)}>
								<Link to="/">Salir</Link>
							</button>
						</div>
					</>
				) : page === "game" ? (
					<>
						<div className="back">
							{/* Boton para volver hacia atras usando navigate(-1), como la flecha para volver hacia atras */}
							<button className="btn-back" onClick={() => navigate(-1)}>
								Volver
							</button>
						</div>
					</>
				) : (
					<>
						<div className="menu_izq">
							<Link to="/">Inicio</Link>
						</div>
						<Link to="/">
							<img src={logo_navbar} alt="logo" />
						</Link>
						<div className="menu_der">
							<button onClick={() => signOut(auth)}>
								<Link to="/">Salir</Link>
							</button>
						</div>
					</>
				)}
			</NavContainer>
		</>
	);
}

export default Navbar;

const NavContainer = styled.nav`
	position: fixed;
	top: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 4.2rem;
	background-color: var(--white);
	box-shadow: 4px 4px 5px #e5e5e5; // si la barra se pone abajo, seria -4px en lugar de +4px
	opacity: 0.95;
	z-index: 10;

	a,
	.btn-back {
		color: var(--black);
		display: block;
		font-size: 1.2rem;
		text-transform: uppercase;
		font-weight: 600;
		margin: 0.5rem 0.6rem 0 0.6rem;
		text-decoration: none;
		transition: letter-spacing 0.3s;
		cursor: pointer;

		&:hover {
			color: var(--secondary);
		}
	}

	@media (min-width: 576px) {
		a {
			font-size: 1.3rem;
			margin: 0.5rem 1rem 0 1rem;
		}
	}

	@media (min-width: 768px) {
		a {
			margin: 0.5rem 1.4rem 0 1.4rem;
		}
	}

	@media (min-width: 992px) {
		a {
			margin: 0.5rem 2rem 0 2rem;
		}
	}

	div {
		display: flex;
	}

	img {
		width: 4rem;
	}

	button {
		border: none;
		background-color: var(--white);
	}

	.back {
		position: absolute;
		left: 0;
		margin-left: 1rem;
	}
`;
