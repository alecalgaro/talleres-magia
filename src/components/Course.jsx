import React from "react";
import styled from "styled-components";
import Title from "./Title";

const Course = ({ title, textBtn, item1, item2, item3 }) => {
	return (
		<ContainerCourse>
			<Title title={title} />
			<button>{textBtn}</button>
			<div>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64">
					<circle cx="32" cy="32" r="22" stroke="var(--color1)" strokeWidth="4"></circle>
					<path
						fill="var(--color3)"
						d="M22.914 31.586a2 2 0 1 0-2.828 2.828l2.828-2.828ZM29.5 41l-1.414 1.414a2 2 0 0 0 3.148-.417L29.5 41Zm13.234-19.003a2 2 0 1 0-3.468-1.994l3.468 1.994ZM20.086 34.414l8 8 2.828-2.828-8-8-2.828 2.828Zm11.148 7.583 11.5-20-3.468-1.994-11.5 20 3.468 1.994Z"
					></path>
				</svg>
				<div>
					<p>{item1}</p>
				</div>
			</div>
			<div>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64">
					<circle cx="32" cy="32" r="22" stroke="var(--color1)" strokeWidth="4"></circle>
					<path
						fill="var(--color3)"
						d="M22.914 31.586a2 2 0 1 0-2.828 2.828l2.828-2.828ZM29.5 41l-1.414 1.414a2 2 0 0 0 3.148-.417L29.5 41Zm13.234-19.003a2 2 0 1 0-3.468-1.994l3.468 1.994ZM20.086 34.414l8 8 2.828-2.828-8-8-2.828 2.828Zm11.148 7.583 11.5-20-3.468-1.994-11.5 20 3.468 1.994Z"
					></path>
				</svg>
				<div>
					<p>{item2}</p>
				</div>
			</div>
			<div>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64">
					<circle cx="32" cy="32" r="22" stroke="var(--color1)" strokeWidth="4"></circle>
					<path
						fill="var(--color3)"
						d="M22.914 31.586a2 2 0 1 0-2.828 2.828l2.828-2.828ZM29.5 41l-1.414 1.414a2 2 0 0 0 3.148-.417L29.5 41Zm13.234-19.003a2 2 0 1 0-3.468-1.994l3.468 1.994ZM20.086 34.414l8 8 2.828-2.828-8-8-2.828 2.828Zm11.148 7.583 11.5-20-3.468-1.994-11.5 20 3.468 1.994Z"
					></path>
				</svg>
				<div>
					<p>{item3}</p>
				</div>
			</div>
		</ContainerCourse>
	);
};

export default Course;

const ContainerCourse = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 0 2rem 6rem 2rem;

	button {
		font-size: 1.6rem;
		text-transform: uppercase;
		background-color: var(--color1);
		color: var(--color5);
		padding: 1rem 1rem 0.5rem 1rem;
		border: none;
		border-radius: 1rem;
		margin-bottom: 1rem;
		transform: rotate(-1deg);
		cursor: pointer;
		transition: all 0.3s;

		&:hover {
			transform: scale(1.1);
		}
	}

	div {
		display: flex;
		align-items: center;
		justify-content: center;

		svg {
			width: 3rem;
		}

		p {
			font-size: 1.8rem;
			padding-left: 1rem;
		}
	}
`;
