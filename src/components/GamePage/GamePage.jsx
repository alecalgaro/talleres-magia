import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import GameDetails from "./GameDetails";
import Slider from "./Slider";
import Navbar from "../General/Navbar";

import games_catholic from "../../data/magic_catholic.json";
import games_family from "../../data/magic_family.json";
import games_educational from "../../data/magic_educational.json";

const GamePage = ({ course }) => {
	const { idGame } = useParams();
	let games;

	// Elijo de que archivo obtener los datos:
	if (course == "catholic") {
		games = games_catholic;
	} else if (course == "family") {
		games = games_family;
	} else {
		games = games_educational;
	}

	return (
		<>
			{games.map((game) =>
				game.idGame == idGame ? (
					<ContainerPage key={game.idGame}>
						<Navbar page="game" />
						<ContainerGame>
							<h1>{game.title}</h1>
							<Slider images={game.images} />
							<GameDetails title="Video" videos={game.videos} />
							<GameDetails title="Efecto" effect={game.effect} />
							<GameDetails title="Recursos" resources={game.resources} />
							{course == "catholic" && <GameDetails title="Diálogo" resources={game.dialog} />}
							<GameDetails title="Explicación" explication={game.explication} />
							<GameDetails title="Comentarios" comments={game.comments} />
						</ContainerGame>
					</ContainerPage>
				) : null
			)}
		</>
	);
};

export default GamePage;

const ContainerPage = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	margin: 7rem 0 3rem 0;
`;

const ContainerGame = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 90%;
	max-width: 70rem;

	h1 {
		font-size: 3rem;
		text-align: center;
		color: var(--primary);
		text-shadow: 3px 2px 0 var(--shadow);
	}
`;
