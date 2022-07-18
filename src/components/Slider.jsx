import React, { useState } from "react";
import styled from "styled-components";
import btnArrow from "../img/btnArrow.webp";

const Slider = () => {
	const images = [
		"https://picsum.photos/id/1020/400",
		"https://picsum.photos/id/1025/400",
		"https://picsum.photos/id/1010/400",
	];

	const [currentImage, setCurrentImage] = useState(0);
	const cant = images?.length;

	if (!Array.isArray(images) || cant === 0) return;

	const nextImage = () => {
		setCurrentImage(currentImage === cant - 1 ? 0 : currentImage + 1);
	};

	const previousImage = () => {
		setCurrentImage(currentImage === 0 ? cant - 1 : currentImage - 1);
	};

	return (
		<SliderContainer>
			<button onClick={previousImage}>
				<img src={btnArrow} alt="icono flecha" />
			</button>
			{images.map((image, index) => {
				return (
					<div className={currentImage === index ? `${"slide"} ${"active"}` : "slide"}>
						{currentImage === index && <img key={index} src={image} alt="imagen slide" />}
					</div>
				);
			})}
			<button className="btnNext" onClick={nextImage}>
				<img src={btnArrow} alt="icono flecha" />
			</button>
		</SliderContainer>
	);
};

export default Slider;

const SliderContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin: 4rem 2rem;

	.slide {
		max-width: 100%;
		height: auto;
		opacity: 0;
		transition: opacity 0.75s ease-in-out;
	}

	.slide.active {
		opacity: 1;
	}

	img {
		width: 100%;
	}

	button {
		border: none;
		margin: 0 1rem;
		cursor: pointer;
	}

	.btnNext {
		transform: rotate(180deg);
	}
`;
