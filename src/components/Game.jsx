import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Title from "./Title";
import GameDetails from "./GameDetails";
import Slider from "./Slider";

import games_catholic from "./data/magic_catholic.json";
import games_family from "./data/magic_family.json";
import games_educational from "./data/magic_educational.json";

const Game = ({ course }) => {
	const { idGame } = useParams();
	let games;

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
					<ContainerModal key={game.idGame}>
						<ContainerGame>
							<Title title={game.title} />

							{/* Deberia recibir como props las imagenes tambien */}
							<Slider />
							<GameDetails title="Video" video={game.video} />
							<GameDetails
								title="Efecto"
								// text1={game.effect.map((effect) => effect.p)}
								text1={game.effect}
								text2={game.realization}
								text3={game.comments}
							/>
							<GameDetails title="Recursos" text1={game.resources} />
							<GameDetails title="Realización" text1={game.realization} />
							<GameDetails title="Comentarios" text1={game.comments} />
						</ContainerGame>
					</ContainerModal>
				) : null
			)}
		</>
	);
};

export default Game;

const ContainerModal = styled.div`
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

	@media (min-width: 768px) {
		width: 60%;
	}

	@media (min-width: 1200px) {
		width: 40%;
	}
`;
