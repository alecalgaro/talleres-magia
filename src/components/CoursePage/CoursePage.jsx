import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import Navbar from "../General/Navbar";
import GameItem from "./GameItem";
import Footer from "../HomePage/Footer";
import logo_catholic from "../../img/logo_catholic.webp";
import logo_family from "../../img/logo_family.webp";
import logo_educational from "../../img/logo_educational.webp";
import { Helmet } from "react-helmet";

import games_catholic from "../../data/magic_catholic.json";
import games_family from "../../data/magic_family.json";
import games_educational from "../../data/magic_educational.json";

const CoursePage = () => {
	const { courseName } = useParams();

	var games;
	var logo;

	// Elijo el logo del taller y de que archivo obtener la informacion:
	if (courseName == "catolica") {
		games = games_catholic;
		logo = logo_catholic;
	} else if (courseName == "familiar") {
		games = games_family;
		logo = logo_family;
	} else {
		games = games_educational;
		logo = logo_educational;
	}

	return (
		<>
			<Helmet>
				<title>{"Magia " + courseName}</title>
				<meta name="description" content={"Página del taller de magia " + courseName} />
			</Helmet>

			<Navbar />
			<main>
				<ContainerGamePage>
					<h1>
						<img src={logo} alt="Logo del taller de magia" />
					</h1>
					<GamesContainer>
						{games.map((game) => (
							<Link to={"/magia/" + courseName + "/" + game.idGame} key={game.idGame}>
								<GameItem idGame={game.idGame} titleGame={game.title} />
							</Link>
						))}
					</GamesContainer>
				</ContainerGamePage>
			</main>
			<Footer />
		</>
	);
};

export default CoursePage;

const ContainerGamePage = styled.section`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	margin: 8rem 0;
	animation: scale 0.5s ease forwards;

	img {
		width: 300px;
		margin: 0 1rem;
	}

	@keyframes scale {
		from {
			transform: scale(0);
		}
		to {
			transform: scale(1);
		}
	}
`;

const GamesContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	width: 90%;
	max-width: 70rem;
`;
