import React from 'react'
import { createGlobalStyle } from 'styled-components'

import Navbar from "./components/Navbar"
import GamePage from './components/GamePage'

function App() {

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <GamePage />
    </>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
  :root {
    --black: #191919;
    --white: #ffffff;
    --yellow: #FFDF57;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
    scroll-behavior: smooth;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }

  section[id] {
    scroll-margin-top: 20px;
  }

  a {
    text-decoration: none;
  }
`