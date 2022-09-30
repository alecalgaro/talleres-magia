import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import GameItem from "./GameItem";
import Title from "./Title";
import Footer from "./Footer";

import course from "./data/courses.json";
import games_catholic from "./data/magic_catholic.json";
import games_family from "./data/magic_family.json";
import games_educational from "./data/magic_educational.json";

const CoursePage = () => {
	const { courseName } = useParams();

	let games;

	if (courseName == "catolica") {
		games = games_catholic;
	} else if (courseName == "familiar") {
		games = games_family;
	} else {
		games = games_educational;
	}

	return (
		<>
			<Navbar />
			<main>
				<ContainerGamePage>
					<Title title={"Magia " + courseName} />
					<img
						src="https://res.cloudinary.com/alecalgaro/image/upload/v1656639900/En%20busca%20de%20la%20santidad/logo-header-es_w8rpgq.webp"
						alt="logo curso"
					/>
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

	img {
		width: 80%;
		@media (min-width: 768px) {
			width: 60%;
		}
		@media (min-width: 992px) {
			width: 50%;
		}
		@media (min-width: 1200px) {
			width: 30%;
		}
	}
`;

const GamesContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	width: 90%;

	@media (min-width: 768px) {
		width: 70%;
	}

	@media (min-width: 992px) {
		width: 50%;
	}
`;
