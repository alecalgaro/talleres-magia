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
				<p>
					Jesús siempre fue creativo con sus enseñanzas, le gusta sorprender, hacer que su mensaje
					llegue al corazón y que se recuerde lo que Él quiere transmitir. Y si hablamos de
					sorprender, seguramente algo que se nos viene a la mente es la magia.
					<br />
					Nuestra misión es llevar su mensaje a todas partes para que llegue a cada persona, y
					considero que una gran forma de lograr esto es compartiéndolo con alegría e ilusión a
					través de la magia.
					<br />
					<br />
					La idea de este taller es contarte parte de mi experiencia al usar la magia como una
					herramienta y recurso para transmitir ciertos mensajes además de sacar alguna sonrisa o
					asombro, y compartirte algunas ideas creativas para que puedas aplicar a la hora de
					evangelizar de esta manera.
					<br />
					Te vas a encontrar juegos de magia sencillos utilizando con objetos cotidianos, que podrás
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

				<h3>Subtítulo</h3>
				<p className="italic">
					Nota: Para simplificar la escritura, cuando escriba “misionero” me estaré refiriendo al
					maestro/a, catequista, animador/a, guía de grupo, sacerdote, etc. que pueda llegar a leer
					o utilizar estas ideas, ya que es la palabra que nos une: ¡soy bautizado… soy misionero!
					<br />
				</p>
				<p>
					Aunque no parezca, los magos y misioneros tienen algunas similitudes, los magos cuando
					salen al escenario buscan captar la atención del público y compartirles lo que desean a
					través de su magia. Los misioneros también, tienen que salir al escenario, que sería el
					aula, el encuentro, la reunión, captar la atención del público, que serían sus alumnos,
					niños/as del grupo, etc. y transmitirles el mensaje y los conocimientos que se desean
					(transmitirles a Jesús). Y que mejor, que transmitírselos de una forma mágica para que
					nunca se lo olviden.
					<br /> <br />
					La evangelización no tiene por qué ser algo aburrido, sino que puede que ser algo
					diferente, llamativo, divertido, que ayude a captar la atención del otro y hacer que el
					mensaje que se comparte llegue a los destinatarios y permanezca en ellos.
					<br />
					Si se le pregunta a un niño o niña si prefiere estudiar/aprender o jugar, seguro va a
					elegir jugar. Ahí está el trabajo del misionero en conseguir que jueguen y que al mismo
					tiempo aprendan. Es por eso que, para trasmitir el mensaje, es importante que aprendamos a
					usar y aprovechar todas las herramientas que tenemos para poder lograrlo de la mejor
					manera posible, como si tuviéramos una caja de herramientas evangelizadoras de donde
					podemos elegir la adecuada para cada momento, y una de esas herramientas puede ser la
					magia.
					<br /> <br />
					Por otro lado, con la magia no se trata de engañar, sino de divertir, entretener, motivar,
					educar, transmitir mensajes, sentimientos o emociones y disfrutar de un lindo y mágico
					momento.
					<br /> <br />
					Si bien en la magia hay una gran cantidad de técnicas y se aplica mucha teoría, psicología
					y más, este taller no está enfocado a eso, si no que la idea es que te lleves ideas,
					juegos y herramientas “mágicas” simples, prácticas y rápidas de aplicar. La parte teórica
					y más técnica la podremos ver en otros cursos.
					<br /> <br />
					Ahora sí, vamos a lo más divertido y ¡QUE COMIENCE LA MAGIA!
				</p>
			</ContainerInfo>
			;
		</>
	);
};

export default InfoCatholicMagic;

const ContainerInfo = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin: 2rem 0;

	img {
		width: 250px;
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
