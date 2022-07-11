import React from 'react'
import styled from 'styled-components'

const GameDetails = ({title, text}) => {
  return (
    <Container>
        <h2>{title}</h2>
        <p>{text}</p>
    </Container>
  )
}

export default GameDetails

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  h2{
    font-size: 2rem;
    color: var(--color1);
  }

  p{
    font-size: 1.6rem;
    margin: .5rem .5rem 2rem .5rem;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }
`
