import React from 'react'
import styled from 'styled-components'
import BtnCerrar from '../img/icon-close.png'
import Title from './Title';
import GameDetails from './GameDetails';
import { motion } from "framer-motion";

const Modal = ({setModal, titleGame, effect, resources, realization, comments}) => {

  const ocultarModal = () => {
    setModal(false);  
  }

  return (
    <BgModal
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
    >
        <BtnCerrarModal>
            <img 
                className='imgBtnClose' 
                src={BtnCerrar} 
                alt="Botón para cerrar el modal"
                onClick={ocultarModal} 
            />
        </BtnCerrarModal>

        <ContainerModal>
            <ContainerGame>
                <Title title={titleGame}/>
                <GameDetails 
                title="Efecto" 
                text={effect}
                />
                <GameDetails 
                title="Recursos" 
                text={resources}
                />
                <GameDetails 
                title="Realización"
                text={realization} 
                />
                <GameDetails 
                title="Comentarios" 
                text={comments}
                />
            </ContainerGame>
        </ContainerModal>

    </BgModal>
  )
}

export default Modal

const BgModal = styled(motion.div)`
    position: fixed;
    background-color: var(--color5);
    top: 40px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: scroll;
`

const BtnCerrarModal = styled.div`
    position: absolute;
    right: 2rem;
    top: 2rem;
    width: 3.6rem;
    cursor: pointer;

    @media (min-width: 768px) {
        width: 4rem;
        height: 4rem;
    }

    .imgBtnClose{ width: 100%; }
`

const ContainerModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 7rem;
`
const ContainerGame = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    
    @media (min-width: 768px) {
      width: 60%;
    }

    @media (min-width: 1200px) {
      width: 40%;
    }
`