import React from 'react'
import styled from 'styled-components'
import GameItem from './GameItem'
import Title from './Title';
import Navbar from './Navbar';
import games from './games.json';

const CoursePage = () => {
  return (
    <>
      <Navbar />
      <ContainerGamePage> 
        <Title title="Nombre del curso"/>
        <img src="https://res.cloudinary.com/alecalgaro/image/upload/v1656639900/En%20busca%20de%20la%20santidad/logo-header-es_w8rpgq.webp" alt="logo curso"/>
        <GamesContainer>
          {games.map( (game) => (
              <GameItem 
                key={game.number}  
                numberGame={game.number} 
                titleGame={game.title} 
                effect={game.effect}
                resources={game.resources}
                realization={game.realization}
                comments={game.comments}
              />
          ))}
        </GamesContainer>
      </ContainerGamePage>
    </>
  )
}

export default CoursePage

const ContainerGamePage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin: 10rem 0;

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