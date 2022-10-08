import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import Navbar from "../General/Navbar";
import GameItem from "./GameItem";
import Footer from "../HomePage/Footer";
import { Helmet } from "react-helmet";

import games_catholic from "../../data/magic_catholic.json";
import games_family from "../../data/magic_family.json";
import games_educational from "../../data/magic_educational.json";

const CoursePage = () => {
	const { courseName } = useParams();

	var games;
	var title;

	// Elijo el titulo del taller y de que archivo obtener la informacion:
	if (courseName == "catolica") {
		games = games_catholic;
		title = "Con magia el Evangelio se contagia";
	} else if (courseName == "familiar") {
		games = games_family;
		title = "Titulo magia familiar";
	} else {
		games = games_educational;
		title = "Titulo magia educativa";
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
					<h1>{title}</h1>
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
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	margin: 10rem 0;

	h1 {
		font-size: 3.5rem;
		margin: 0 2rem 2rem 2rem;
		font-weight: 600;
		color: var(--primary);
		text-shadow: 2px 2px 0px var(--black);
		text-align: center;
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
