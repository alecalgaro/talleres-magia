import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Title from "./Title";

const Course = ({ title, route, textBtn, item1, item2, item3, enable }) => {
	return (
		<ContainerCourse>
			<Title title={title} />
			<Link to={"/magia/" + route}>
				{enable ? (
					<Button enable={enable}>{textBtn}</Button>
				) : (
					<Button enable={enable} disabled>
						{textBtn}
					</Button>
				)}
			</Link>
			<div className="container_items">
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64">
						<circle cx="32" cy="32" r="22" stroke="var(--primary)" strokeWidth="4"></circle>
						<path
							fill="var(--black)"
							d="M22.914 31.586a2 2 0 1 0-2.828 2.828l2.828-2.828ZM29.5 41l-1.414 1.414a2 2 0 0 0 3.148-.417L29.5 41Zm13.234-19.003a2 2 0 1 0-3.468-1.994l3.468 1.994ZM20.086 34.414l8 8 2.828-2.828-8-8-2.828 2.828Zm11.148 7.583 11.5-20-3.468-1.994-11.5 20 3.468 1.994Z"
						></path>
					</svg>
					<div>
						<p>{item1}</p>
					</div>
				</div>
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64">
						<circle cx="32" cy="32" r="22" stroke="var(--primary)" strokeWidth="4"></circle>
						<path
							fill="var(--black)"
							d="M22.914 31.586a2 2 0 1 0-2.828 2.828l2.828-2.828ZM29.5 41l-1.414 1.414a2 2 0 0 0 3.148-.417L29.5 41Zm13.234-19.003a2 2 0 1 0-3.468-1.994l3.468 1.994ZM20.086 34.414l8 8 2.828-2.828-8-8-2.828 2.828Zm11.148 7.583 11.5-20-3.468-1.994-11.5 20 3.468 1.994Z"
						></path>
					</svg>
					<div>
						<p>{item2}</p>
					</div>
				</div>
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64">
						<circle cx="32" cy="32" r="22" stroke="var(--primary)" strokeWidth="4"></circle>
						<path
							fill="var(--black)"
							d="M22.914 31.586a2 2 0 1 0-2.828 2.828l2.828-2.828ZM29.5 41l-1.414 1.414a2 2 0 0 0 3.148-.417L29.5 41Zm13.234-19.003a2 2 0 1 0-3.468-1.994l3.468 1.994ZM20.086 34.414l8 8 2.828-2.828-8-8-2.828 2.828Zm11.148 7.583 11.5-20-3.468-1.994-11.5 20 3.468 1.994Z"
						></path>
					</svg>
					<div>
						<p>{item3}</p>
					</div>
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

	div {
		display: flex;
		text-align: start;
		justify-content: center;

		svg {
			width: 3rem;
		}

		p {
			font-size: 1.8rem;
			padding: 0.8rem 0.5rem;
		}
	}

	.container_items {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-top: 1rem;
	}
`;

const Button = styled.button`
	font-size: 1.6rem;
	text-transform: uppercase;
	background-color: var(--primary);
	color: var(--white);
	padding: 1rem 1rem 0.5rem 1rem;
	border: none;
	border-radius: 1rem;
	transform: rotate(-1deg);
	transition: all 0.3s;
	cursor: ${(props) => (props.enable ? "pointer" : "not-allowed")};

	@media (hover: hover) {
		&:hover {
			transform: scale(1.1);
		}
	}
`;
