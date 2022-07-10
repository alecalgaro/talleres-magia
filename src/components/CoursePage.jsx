import React from 'react'
import styled from 'styled-components'
import GameItem from './GameItem'
import games from './games.json';

const GamePage = () => {
  return (
    <ContainerGamePage> 
      <div className='title-course'><h1>Nombre del curso</h1></div>
      <img src="https://res.cloudinary.com/alecalgaro/image/upload/v1656639900/En%20busca%20de%20la%20santidad/logo-header-es_w8rpgq.webp" alt="logo curso"/>
      <GamesContainer>
        {games.map( (game) => (
            <GameItem number={game.number} title={game.title}/>
        ))}
      </GamesContainer>
    </ContainerGamePage>
  )
}

export default GamePage

const ContainerGamePage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin: 10rem 0;

    .title-course{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--blue);
        margin: 0 2rem 2rem 2rem;
        transform: rotate(-1deg);

        h1{
            margin: 1rem 1.5rem .5rem 1.5rem;
            font-weight: 600;
            font-size: 3rem;
            text-align: center;
            color: var(--white);
            @media (min-width: 768px) {font-size: 4rem;}
        }
    }

    img{
        width: 80%;
        @media (min-width: 768px) {width: 60%;}
        @media (min-width: 992px) {width: 50%;}
        @media (min-width: 1200px) {width: 30%;}
    }
`

const GamesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 90%;

    @media (min-width: 768px) {
		width: 70%;
	}

    @media (min-width: 992px) {
		width: 50%;
	}
`