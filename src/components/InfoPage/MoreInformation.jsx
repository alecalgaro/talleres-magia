import React from "react";
import styled from "styled-components";
import Navbar from "../General/Navbar";
import Title from "../General/Title";
import InfoCatholicMagic from "./InfoCatholicMagic";
import InfoFamilyMagic from "./InfoFamilyMagic";
import InfoEducationalMagic from "./InfoEducationalMagic";
import Footer from "../HomePage/Footer";
import { Helmet } from "react-helmet";

const MoreInformation = ({ course }) => {
	var title;
	var type;
	if (course == "catholic") {
		type = "católica";
		title = "Con magia el Evangelio se contagia";
	} else if (course == "family") {
		type = "familiar";
		title = "Titulo magia familiar";
	} else {
		type = "educativa";
		title = "Titulo magia educativa";
	}

	return (
		<>
			<Helmet>
				<title>{"Información - Magia " + type}</title>
				<meta
					name="description"
					content={"Página de información sobre el taller de magia " + type}
				/>
			</Helmet>

			<Navbar page="game" />
			<main>
				<ContainerMoreInformation>
					{course === "catholic" ? (
						<InfoCatholicMagic />
					) : course === "family" ? (
						<InfoFamilyMagic />
					) : (
						<InfoEducationalMagic />
					)}
				</ContainerMoreInformation>
			</main>
			<Footer />
		</>
	);
};

export default MoreInformation;

const ContainerMoreInformation = styled.section`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	margin: 7rem 0 3rem 0;

	h1 {
		font-size: 3.5rem;
		margin: 0 2rem 2rem 2rem;
		font-weight: 600;
		color: var(--primary);
		text-shadow: 2px 2px 0px var(--black);
		text-align: center;
	}
`;
