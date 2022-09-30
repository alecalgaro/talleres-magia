import React from "react";
import styled from "styled-components";
import BtnCerrar from "../img/icon-close.webp";
import Title from "./Title";
import GameDetails from "./GameDetails";
import Slider from "./Slider";
import { motion } from "framer-motion";

const Modal = ({ setModal, titleGame, effect, resources, realization, comments, video }) => {
	const ocultarModal = () => {
		setModal(false);
	};

	return (
		<BgModal initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<BtnCerrarModal>
				<img
					className="imgBtnClose"
					src={BtnCerrar}
					alt="Botón para cerrar el modal"
					onClick={ocultarModal}
				/>
			</BtnCerrarModal>

			<ContainerModal>
				<ContainerGame>
					<Title title={titleGame} />
					<GameDetails title="Video" video={video} />
					{/* Deberia recibir como props el video y las imagenes, asi hacer lo que hice arriba con el video
					y tambien aca quitar el slider y hacer un GameDetails que reciba las imagenes y arme el slider
					como hice con el iframe del video en "GameDetails.jsx" */}
					<Slider />
					<GameDetails title="Efecto" text1={effect} text2={realization} text3={comments} />
					<GameDetails title="Recursos" text1={resources} />
					<GameDetails title="Realización" text1={realization} />
					<GameDetails title="Comentarios" text1={comments} />
				</ContainerGame>
			</ContainerModal>
		</BgModal>
	);
};

export default Modal;

const BgModal = styled(motion.div)`
	position: fixed;
	background-color: var(--color5);
	top: 40px;
	left: 0;
	right: 0;
	bottom: 0;
	overflow-y: scroll;
`;

const BtnCerrarModal = styled.div`
	position: absolute;
	left: 2rem;
	top: 2rem;
	width: 3.6rem;
	cursor: pointer;

	@media (min-width: 768px) {
		width: 4rem;
		height: 4rem;
	}

	.imgBtnClose {
		width: 100%;
	}
`;

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
