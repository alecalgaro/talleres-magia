import React, { useState } from "react";
import styled from "styled-components";

const GameDetails = ({ title, effect, resources, dialog, explication, comments, videos }) => {
	const [open, setOpen] = useState(false);

	// Desde GamePage voy a renderizar varios GameDetails enviando como props en cada uno
	// el titulo (video, efecto, recursos, etc.) y el contenido a renderizar en ese
	// detalle (son las tipo cards que se abren). Es por eso que en este componente
	// abajo compruebo cual de las props recibi para mostrar eso.

	return (
		<Container open={open} onClick={() => setOpen(!open)}>
			<div>
				<h2>{title}</h2>
				<svg
					fill="none"
					stroke="var(--secondary)"
					viewBox="0 0 24 24"
					data-darkreader-inline-stroke=""
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M19 9l-7 7-7-7"
					></path>
				</svg>
			</div>
			{videos
				? videos.map((video, index) => (
						<iframe
							key={index}
							// width="560"
							// height="315"
							src={video}
							title="Video del juego"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
				  ))
				: null}

			{effect ? effect.map((eff, index) => <p key={index}>{eff}</p>) : null}
			{dialog ? dialog.map((dia, index) => <p key={index}>{dia}</p>) : null}
			{resources ? resources.map((res, index) => <p key={index}>{res}</p>) : null}
			{explication ? explication.map((rea, index) => <p key={index}>{rea}</p>) : null}
			{comments ? comments.map((com, index) => <p key={index}>{com}</p>) : null}
		</Container>
	);
};

export default GameDetails;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	border: 2px solid var(--grey);
	border-radius: 1.5rem;
	margin: 1rem 0;
	cursor: pointer;
	transition: all 0.3s;

	&:hover {
		border-color: var(--secondary);
	}

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 80%;
	}

	svg {
		width: 2rem;
		height: 2rem;
		transition: all 0.3s;
		transform: ${(props) => (props.open ? "rotate(0)" : "rotate(90deg)")};
	}

	h2 {
		font-size: 2rem;
		color: var(--secondary);
		text-transform: uppercase;
		font-weight: 600;
		padding: 1.2rem 0;
		transition: all 0.3s;
	}

	p {
		font-size: 1.6rem;
		padding: 1rem 2rem 2rem 2rem;
		display: ${(props) => (props.open ? "hidden" : "none")};

		@media (min-width: 768px) {
			font-size: 1.8rem;
		}
	}

	iframe {
		padding: 0.5rem;
		width: 100%;
		height: 20rem;
		border: none;
		border-radius: 1.5rem;
		display: ${(props) => (props.open ? "hidden" : "none")};

		@media (min-width: 576px) {
			height: 35rem;
		}

		@media (min-width: 992px) {
			height: 40rem;
		}
	}
`;
