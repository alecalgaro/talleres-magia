import React, { useState } from "react";
import styled from "styled-components";

const GameDetails = ({ title, text1, text2, text3, video }) => {
	const [open, setOpen] = useState(false);

	return (
		<Container open={open} onClick={() => setOpen(!open)}>
			<div>
				<h2>{title}</h2>
				<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" data-darkreader-inline-stroke="">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M19 9l-7 7-7-7"
					></path>
				</svg>
			</div>
			{video ? (
				<iframe
					// width="560"
					// height="315"
					src={video}
					title="Video del juego"
					// frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					// allowfullscreen
				></iframe>
			) : null}

			{/* {text1 ? text1.map((effect) => <p>{effect.p}</p>) : null} */}
			{text1 ? <p>{text1}</p> : null}
			{text2 ? <p>{text2}</p> : null}
			{text3 ? <p>{text3}</p> : null}
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
	border: 2px solid var(--color4);
	border-radius: 1.5rem;
	margin: 1rem 0;
	cursor: pointer;
	transition: all 0.3s;

	&:hover {
		border-color: var(--color2);
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
		color: var(--color2);
		text-transform: uppercase;
		font-weight: 600;
		padding: 2rem 0 1rem 0;
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
		padding: 1rem 1.5rem;
		width: 100%;
		height: 20rem;
		display: ${(props) => (props.open ? "hidden" : "none")};

		@media (min-width: 576px) {
			height: 35rem;
		}

		@media (min-width: 992px) {
			height: 40rem;
		}
	}
`;
