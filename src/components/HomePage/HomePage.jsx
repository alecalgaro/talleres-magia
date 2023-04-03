import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SplashScreenApp from "./SplashScreenApp";
import Navbar from "../General/Navbar";
import Header from "./Header";
import Course from "./Course";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

// imports de Firebase:
import firebaseApp from "../../firebaseConfig";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const firestore = getFirestore(firebaseApp);

const HomePage = ({ user }) => {
	const [enable, setEnable] = useState([]);

	useEffect(() => {
		async function getEnables() {
			await findUser(user.email);
		}
		if (user === null) {
			// cuando se cierra la sesion user queda como null, asi que deshabilito todos
			setEnable([false, false, false]);
		} else {
			// sino llamo a esta funcion para revise si existe el user y vea que talleres tiene habilitados
			getEnables();
		}
	}, [user]);
	// se ejecuta cada vez que hay un cambio en "user" que viene de App, porque sino por ejemplo
	// al actualizar la pagina ocurria que no se tenia en cuenta los talleres habilitados

	// Busca si hay un documento para ese usuario que se quiere crear (lo agrego yo en Firebase cuando compran un taller)
	async function findUser(email) {
		// Crear referencia al documento:
		const docRef = doc(firestore, `users/${email}`);
		// Buscar documento:
		const result = await getDoc(docRef);
		// En ambos casos, si existe o no el documento, Firebase nos devuelve un objeto, por eso verificamos si existe:
		if (result.exists()) {
			// Codigo cuando si existe: obtengo los talleres que tiene habilitados y los guardo en el state
			const infoDoc = result.data();
			setEnable(infoDoc.enable);
		} else {
			// Codigo cuando no existe: dejo el state con todos los talleres deshabilitados
			setEnable([false, false, false]);
		}
	}

	return (
		<>
			{!user ? (
				<SplashScreenApp />
			) : (
				<ContainerHome>
					<Helmet>
						<title>Talleres de magia</title>
						<meta
							name="description"
							content="Talleres online de magia católica, familiar y educativa."
						/>
					</Helmet>

					<Navbar user={user} page="home" />
					<Header />
					<main>
						<section className="courses" id="talleres">
							<Course
								enable={enable[0]}
								enableMoreInfo={true}
								title="Magia católica"
								route="catolica"
								textBtn="Acceder"
								item1="Magia con objetos cotidianos"
								item2="Nuevas ideas para evangelizar"
								item3="Mensajes creativos y alegres"
							/>
							<Course
								enable={enable[1]}
								enableMoreInfo={false}
								title="Magia familiar"
								route="familiar"
								textBtn="Proximamente"
								item1="Magia para niños y adultos"
								item2="Momentos compartidos en familia"
								item3="Sonrisas y sorpresas garantizadas"
							/>
							<Course
								enable={enable[2]}
								enableMoreInfo={false}
								title="Magia educativa"
								route="educativa"
								textBtn="Proximamente"
								item1="Magia con elementos de clases"
								item2="Más atención y entusiasmo"
								item3="Aprender de forma divertida"
							/>
						</section>
						<About />
						<Contact />
					</main>
					<Footer />
				</ContainerHome>
			)}
		</>
	);
};

export default HomePage;

const ContainerHome = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;

	@media (min-width: 1200px) {
		.courses {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 8rem;
			margin: 10rem 0;

			h2 {
				font-size: 3rem;
			}
		}
	}
`;
