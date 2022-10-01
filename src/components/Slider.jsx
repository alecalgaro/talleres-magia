import React from "react";
import styled from "styled-components";

const Slider = () => {
	// Tengo que obtener las imagenes desde el json segun el juego
	const images = [
		"https://picsum.photos/id/1015/400",
		"https://picsum.photos/id/1025/400",
		"https://picsum.photos/id/1018/400",
	];

	return (
		<Container>
			{images.map((image, index) => {
				return <img key={index} className="item" src={image} alt="imagen slider" />;
			})}
		</Container>
	);
};

export default Slider;

const Container = styled.div`
	display: flex;
	overflow: auto;
	width: 100%;
	scroll-snap-type: x mandatory;

	padding: 24px;
	gap: 12px;
	scroll-padding: 24px;

	@media (min-width: 576px) {
		width: 60%;
	}

	@media (min-width: 768px) {
		width: 70%;
	}

	@media (min-width: 992px) {
		width: 60%;
	}

	img {
		flex: 0 0 100%;
		width: 100%;
		scroll-snap-align: start;
	}
`;
