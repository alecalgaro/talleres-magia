import React from "react";
import styled from "styled-components";

const Footer = () => {
	return (
		<ContainerFooter>
			<p>
				Sitio web desarrollado por
				<a href="https://alejandrocalgaro.netlify.app/"> Alejandro Calgaro</a>
			</p>
		</ContainerFooter>
	);
};

export default Footer;

const ContainerFooter = styled.footer`
	width: 100%;
	text-align: center;
	border-top: 1px solid var(--color4);

	p {
		padding: 2rem;
		font-size: 1.4rem;
	}

	a {
		font-style: italic;
		color: var(--color1);
	}
`;