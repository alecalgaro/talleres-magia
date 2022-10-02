import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Header from "./Header";
import Course from "./Course";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

const HomePage = () => {
	return (
		<ContainerHome>
			<Navbar page="home" />
			<Header />
			<main>
				<section className="courses" id="talleres">
					<Course
						title="Magia católica"
						route="catolica"
						textBtn="Acceder"
						item1="Magia con objetos cotidianos"
						item2="Nuevas ideas para evangelizar"
						item3="Mensajes creativos y alegres"
					/>
					<Course
						title="Magia educativa"
						route="educativa"
						textBtn="Proximamente"
						item1="Magia con elementos de clases"
						item2="Más atención y entusiasmo"
						item3="Aprender de forma divertida"
					/>
					<Course
						title="Magia familiar"
						route="familiar"
						textBtn="Proximamente"
						item1="Magia para niños y adultos"
						item2="Momentos compartidos en familia"
						item3="Sonrisas y sorpresas garantizadas"
					/>
				</section>
				<About />
				<Contact />
			</main>
			<Footer />
		</ContainerHome>
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
