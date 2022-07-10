import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import About from './About'

const HomePage = () => {
  return (
    <ContainerHome>
        <Navbar />
        <About />
    </ContainerHome>
  )
}

export default HomePage

const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`