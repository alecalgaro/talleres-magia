import React from 'react'
import styled from 'styled-components'

import imgLogo from '../img/logo.webp'

function Navbar() {

  return (
    <>
      <NavContainer>
        <>
          <div className='menu_izq'>
            <a href="#about">Sobre mi</a>
            <a href="#courses">Cursos</a>
          </div>
            <a href="#home"><img src={imgLogo} alt="logo" /></a>
          <div className='menu_der'>
            <a href="#contact">Contacto</a>
            <a href="#login">Ingresar</a>
          </div>
        </>
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4.2rem;
  background-color: #fff;
  box-shadow: 4px 4px 5px #e5e5e5;   // si la barra se pone abajo, seria -4px en lugar de +4px
  opacity: .9;
  z-index: 10;

  a{
    color: var(--black);
    display: block;
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 700;
    margin: .5rem .6rem 0 .6rem;
    text-decoration: none;
    transition: letter-spacing .3s;
      
    &:hover{
      color: var(--amarillo);
    }
  }

  @media(min-width: 576px){
    a{
      font-size: 1.3rem;
      margin: .5rem 1rem 0 1rem;
    }
  }

  @media(min-width: 768px){
    a{ margin: .5rem 1.4rem 0 1.4rem; }
  }

  @media(min-width: 992px){
    a{ margin: .5rem 2rem 0 2rem; }
  }

  div { display: flex; }

  img { 
    width: 3.5rem; 
    padding-bottom: 1rem;  
  }
`