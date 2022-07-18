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
			<Navbar />
			<Header />
			<main>
				<section className="courses" id="talleres">
					<Course
						title={"Magia católica"}
						textBtn={"Acceder"}
						item1={"Item1"}
						item2={"Item2"}
						item3={"Item3"}
					/>
					<Course
						title={"Magia educativa"}
						textBtn={"Proximamente"}
						item1={"Item1"}
						item2={"Item2"}
						item3={"Item3"}
					/>
					<Course
						title={"Magia familiar"}
						textBtn={"Proximamente"}
						item1={"Item1"}
						item2={"Item2"}
						item3={"Item3"}
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
			gap: 12rem;
			margin: 10rem 0;

			h2 {
				font-size: 3rem;
			}
		}
	}
`;
