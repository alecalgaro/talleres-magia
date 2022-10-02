import React from "react";
import styled from "styled-components";

const GameItem = ({ idGame, titleGame }) => {
	return (
		<>
			<ContainerItem>
				<h3>{idGame}</h3>
				<p>{titleGame}</p>
			</ContainerItem>
		</>
	);
};

export default GameItem;

const ContainerItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 10rem;
	height: 10rem;
	margin: 2rem;
	gap: 0.5rem;
	border-radius: 1.5rem;
	box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
	cursor: pointer;
	transition: all 0.3s;

	&:hover {
		box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
	}

	h3 {
		font-size: 2.4rem;
		color: var(--black);
	}

	p {
		text-align: center;
		font-size: 1.6rem;
		margin: 0 0.5rem;
	}
`;
