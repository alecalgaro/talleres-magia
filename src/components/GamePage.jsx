import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from './Navbar';

const GamePage = () => {
  const { idCurso } = useParams();
  return (
    <>
        <Navbar />
        <ContainerGame>
            FOTOS

            Nombre

            Efecto

            Realización

            Comentarios

            Recursos
        </ContainerGame>
    </>
  )
}

export default GamePage

const ContainerGame = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`