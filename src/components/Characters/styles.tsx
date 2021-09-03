import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    min-height: calc(100vh - 4rem);

    display: flex;
    align-items: center;
`;

export const WrapHome = styled.div `
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TitleAboutInfoPag = styled.h2`
    font-family: 'Rubik', sans-serif;
    font-size: 3rem;
    color: #FFFF;
    text-align: center;
    text-shadow: 2px 2px 5px #000;
    margin: 1rem;
`

// lista dos personagens 


export const BoxCard = styled.div `
    width: 100%;
    max-width: 1000px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`
    
/* export const Card = styled.div `
    width: 23%;
    min-height: 350px;
    margin-bottom: 2rem;
    background: #bdbebd;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
    box-shadow: -1px 5px 23px 11px rgba(0,0,0,0.42);
    transition: 0.3s linear;
    position: relative;
` */

export const BoxImg = styled.figure `
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: 1rem auto;
    position: relative;
    transition: 0.3s;

    &:hover{
        transform: scale(1.1);    }
`

export const CharacterImg = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const BoxNameCharacter = styled.div `
    width: 140px;
    height: 140px;
    font-size: 0.8rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 50%;
    background: #88c445;;
    position: absolute;
    top: 0;
    opacity: 0;
    transition: 0.5s linear;

    cursor: pointer;

    &:hover{
        opacity: 1;
    }
`