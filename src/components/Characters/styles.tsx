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
    margin: 1rem auto;
    position: relative;
    transition: 0.3s;
    
    //overflow: hidden;
    &:hover{
        transform: scale(1.1);    }
`

export const CharacterImg = styled.img `
    width: 90%;
    //height: 100%;
    object-fit: cover;
`;

export const BoxCharacter = styled.div `
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    //align-items: center;
   border-radius: 5px;
    background: #93bf85;;
    position: absolute;
    top: -6%;
    opacity: 0;
    transition: 0.5s linear;

    cursor: pointer;

    &:hover{
        opacity: 1;
    }
`

export const AboutCharacter = styled.p `
    font-size: 0.7rem;
    font-family: 'Montserrat', sans-serif;
    color: #2c2c2c;
    font-weight: 800;
    padding-left: 0.5rem;
    //text-align: center;
    
    span {
        font-weight: 500;
        color: #ffffff;
    }
`