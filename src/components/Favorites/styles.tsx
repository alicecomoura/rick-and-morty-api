import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    jsutify-content: center;
    align-items: center;
    //background: gold;

`

export const WrapFav = styled.div `
    width: 80%;
    margin: 0 auto;
    //background: red;
`

export const BoxCard = styled.div `
    width: 100%;
    display: flex;
    `
    
export const Card = styled.div `
    width: 25%;
    min-height: 350px;
    background: #bdbebd;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
    box-shadow: -1px 5px 23px 11px rgba(0,0,0,0.42);
    transition: 0.3s linear;
    position: relative;

    &:hover{
        transform: translateY(-15px);
        box-shadow: 0 10px 10px 10px rgba(128, 128, 128, 0.2);
    }
`

export const CharacterName = styled.p `
    font-size: 1.5rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
`

export const BtnClose = styled.button `
    width: 25px;
    height: 25px;
    color: #FFFF;
    border-radius: 50%;

    position: absolute;
    top: -4%;
    right: -2%;

    background: rgba(0,0,0,0.42);
    border: none;
    outline: none;
    cursor: pointer;

    &:hover{
        background: #FF7F50;
    }
`

export const BoxImg = styled.figure `
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

export const CharacterImg = styled.img `
    object-fit: cover;
`;

export const BoxInfoCharacter = styled.div ``

export const InfoCharacter = styled.p ``