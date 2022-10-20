import React from "react";
import styled from "styled-components";
import logo from "../../img/logo_family.webp";

const InfoFamilyMagic = () => {
	return (
		<>
			<ContainerInfo>
				<h1>
					<img src={logo} alt="Logo del proyecto de talleres de magia católica" />
				</h1>
				<p>Aún no hay información sobre este taller</p>
			</ContainerInfo>
		</>
	);
};

export default InfoFamilyMagic;

const ContainerInfo = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	h1 {
		margin: 0;
	}

	img {
		width: 300px;
		margin: 0 1rem;
	}

	p {
		font-size: 1.6rem;
		width: 80%;
		margin-bottom: 3rem;
		max-width: 70rem;
	}

	.italic {
		font-style: italic;
	}

	h3 {
		font-size: 2rem;
		margin-bottom: 2rem;
	}
`;
