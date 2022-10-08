import React from "react";
import styled from "styled-components";

const InfoFamilyMagic = () => {
	return (
		<>
			<ContainerInfo>
				<h3>Subtítulo</h3>
				<p>Aún no hay información sobre este taller</p>
			</ContainerInfo>
			;
		</>
	);
};

export default InfoFamilyMagic;

const ContainerInfo = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin: 2rem 0;

	p {
		font-size: 1.6rem;
		width: 80%;
		margin-bottom: 3rem;

		@media (min-width: 768px) {
			font-size: 1.4rem;
			width: 60%;
		}

		@media (min-width: 992px) {
			width: 50%;
		}
	}

	.italic {
		font-style: italic;
	}

	h3 {
		font-size: 2rem;
		margin-bottom: 2rem;
	}
`;
