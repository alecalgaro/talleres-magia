import React from "react";
import styled from "styled-components";
import logo from "../../img/logo_catholic.webp";

const InfoCatholicMagic = () => {
	return (
		<>
			<ContainerInfo>
				<h1>
					<img src={logo} alt="Logo del proyecto de talleres de magia católica" />
				</h1>
				<a href="https://www.youtube.com/watch?v=AeONUpbLFOU" target="_blank">
					<Button>Ver trailer</Button>
				</a>
				<br />
				<h3>Introducción al taller</h3>
				<p>
					Jesús siempre fue creativo con sus enseñanzas, le gusta sorprender, hacer que su mensaje
					llegue al corazón y que se recuerde lo que Él quiere transmitir. Y si hablamos de
					sorprender, seguramente algo que se nos viene a la mente es la magia.
					<br />
					Nuestra misión es llevar su mensaje a todas partes e intentar que llegue a cada persona, y
					considero que una gran forma de lograr esto es compartiéndolo con alegría e ilusión a
					través de la magia.
					<br />
					<br />
					La idea de este taller es compartirte parte de mi experiencia al usar la magia como una
					herramienta y recurso para transmitir ciertos mensajes, además de generar alguna sonrisa y
					sorpresa, y mostrarte algunas ideas creativas para que puedas aplicar a la hora de
					evangelizar de esta manera.
					<br />
					Te vas a encontrar juegos de magia sencillos utilizando objetos cotidianos, que podrás
					usar para romper el hielo al comenzar a hablar sobre algún tema, para incluir en una
					charla, en un encuentro, o simplemente para entretener y, al mismo tiempo, transmitir un
					mensaje.
					<br />
					La magia será una herramienta más que te permitirá llegar a las personas, lograr grandes
					cosas y compartir lindos momentos, pero nunca olvides que lo más importante es la persona
					que está detrás de ese juego y mensaje que vas a compartir: Jesús. Él es el verdadero
					protagonista.
					<br />
					<br />
					Te invito a descubrir una forma llamativa, divertida y creativa para hablar de Jesús y la
					alegría del Evangelio a través de la magia.
				</p>

				<h3>¿Magia y misión?</h3>
				<p className="italic">
					Nota: Para simplificar la escritura, cuando escriba “misionero” me estaré refiriendo al
					maestro/a, catequista, animador/a, guía de grupo, sacerdote, etc. que pueda llegar a leer
					o utilizar estas ideas, ya que es la palabra que nos une: ¡soy bautizado… soy misionero!
				</p>
				<p>
					Aunque no parezca, los magos y misioneros tienen algunas similitudes, los magos cuando
					salen al escenario buscan captar la atención del público y compartirles lo que desean a
					través de su magia. Los misioneros también tienen que salir al "escenario", que sería el
					aula, el encuentro, la reunión, captar la atención del público, que serían sus alumnos,
					niños/as del grupo, etc. y transmitirles el mensaje y los conocimientos que se desean
					(transmitirles a Jesús). Y que mejor que transmitírselos de una forma mágica para que
					nunca se lo olviden.
					<br /> <br />
					La evangelización no tiene por qué ser algo aburrido, sino que esta en nosotros lograr que
					sea algo diferente, llamativo, divertido, que ayude a captar la atención del otro y hacer
					que el mensaje que se comparte llegue a los destinatarios y permanezca en ellos.
					<br />
					<br />
					Sabemos que a los niños les encanta jugar (y a los no tan niños también), y ahí está el
					trabajo de nosotros como misioneros para conseguir que jueguen y que al mismo tiempo
					aprendan. Es por eso que, para trasmitir el mensaje, es importante que aprendamos a usar y
					aprovechar todas las herramientas que tenemos para poder lograrlo de la mejor manera
					posible, como si tuviéramos una caja de herramientas evangelizadoras de donde podemos
					elegir la adecuada para cada momento, y una de esas herramientas puede ser la magia.
					<br /> <br />
					Por otro lado, con la magia no se trata de engañar, sino de divertir, entretener, motivar,
					educar, transmitir mensajes, sentimientos o emociones y disfrutar de un lindo y mágico
					momento.
				</p>
				<h3>Juegos</h3>
				<p>
					Si bien en la magia hay una gran cantidad de técnicas y se aplica mucha teoría, psicología
					y más, este taller no está enfocado a eso, si no que la idea es que te lleves ideas,
					juegos y herramientas “mágicas” simples, prácticas y rápidas de aplicar. La parte teórica
					y más técnica la podremos ver en otros cursos.
					<br /> <br />
					Con respecto a los juegos, cada uno tendrá tanto en vídeo como en texto: una demostración
					del juego (efecto), los recursos necesarios, la realización y comentarios adicionales.
					Además, cada uno viene con un dialogo de ejemplo para dar un mensaje sobre un tema en
					concreto, sin embargo, siempre tendrás la opción (y te lo recomiendo) de usar tu
					creatividad para adaptarlos a tu personalidad y a la situación o mensaje que necesites
					transmitir, encontrando distintas aplicaciones y presentaciones para cada juego, no solo
					la que yo te propongo, además de tener en cuenta la edad de las personas a las cuales se
					lo compartirás.
					<br />
					<br />
					Por último, el taller se podrá ir actualizando con nuevos juegos, diálogos o ideas, por lo
					tanto, si tenes alguna idea que te gustaría compartir no dudes en escribirme.
					<br />
					<br />
					Ahora sí, vayamos a la parte divertida, te espero dentro del taller y ¡QUE COMIENCE LA
					MAGIA!
				</p>
			</ContainerInfo>
		</>
	);
};

export default InfoCatholicMagic;

const ContainerInfo = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	h1 {
		margin: 0 !important;
	}

	img {
		width: 340px;
		margin: 1rem 1rem 0 1rem;
	}

	p {
		font-size: 1.6rem;
		width: 80%;
		margin: 2rem;
		max-width: 70rem;
	}

	.italic {
		font-style: italic;
	}

	h3 {
		font-size: 2rem;
		text-align: center;
		color: var(--black);
	}
`;

const Button = styled.button`
	font-size: 1.6rem;
	text-transform: uppercase;
	background-color: var(--primary);
	color: var(--white);
	padding: 1rem 1rem 0.5rem 1rem;
	margin: 0 0 1.5rem 0;
	border: none;
	border-radius: 1rem;
	//transform: rotate(-1deg);
	transition: all 0.3s;
	cursor: pointer;

	@media (hover: hover) {
		&:hover {
			transform: scale(1.1);
		}
	}
`;
