import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <ContainerHeader>
        <h1 className='title'>¡Te doy la bienvenida!<br/></h1>
        <h3 className='subtitle'>Aquí encontrarás talleres de <br/> magia
            <div className='rotate-words'>
                <span className='uno'>católica</span>
                <span className='dos'>educativa</span>
                <span className='tres'>familiar</span>
            </div>
        </h3> 
        <img src="https://res.cloudinary.com/alecalgaro/image/upload/v1656639900/En%20busca%20de%20la%20santidad/logo-header-es_w8rpgq.webp" alt="logo curso"/>
    </ContainerHeader>
  )
}

export default Header

const ContainerHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;

    img{
        width: 80%;
        margin-top: 5rem;
        @media (min-width: 768px) {width: 60%;}
        @media (min-width: 992px) {width: 50%;}
        @media (min-width: 1200px) {width: 30%;}
    }

    .title{
        position: relative;
        color: #000;
        font-size: 3rem;
        margin: 0 2rem;
    }

    .subtitle{
        font-size: 2rem;
    }

    .rotate-words{
        display: inline;
        margin-left: 1rem;
    }

    .rotate-words span{
        font-size: 2rem;
        text-align: center;
        width: max-content;
        position: absolute;
        background-color: var(--color1);
        color: var(--color5);
        padding-inline: 1rem;
        padding-top: .3rem;
        opacity: 0;
        transform-origin: 10% 75%;
        animation: rotateWords 12s var(--d) linear infinite;
    }

    .uno{--d: 0s};
    .dos{--d: 4s};
    .tres{--d: 8s};

    @keyframes rotateWords{
        5%{
            opacity: 1;
        }
        10%, 
        20%{
            opacity: 1;
            transform: rotate(3deg);
        }
        15%{
            transform: rotate(-1deg);
        }
        25%{
            opacity: 0;
            transform: translateY(9rem) rotate(10deg);
        }
    }
`