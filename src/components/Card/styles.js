import styled from "styled-components";

export const Card = styled.div `
    width: 225px;
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

    @media(max-width: 800px) {
        min-height: 250px;
    }
`

export const CharacterName = styled.p `
    font-size: 1.5rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    text-align: center;
    padding: 0.2rem 0;

    @media(max-width: 800px) {
        font-size: 0.8rem;
    }
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
    margin: 1rem auto;

    @media(max-width: 800px) {
        width: 80px;
        height: 80px;
    }
`

export const CharacterImg = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const BoxInfoCharacter = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 800px) {
        align-items: flex-start;
    }
`

export const InfoCharacter = styled.p `
    font-size: 1.2rem;

    span{
        font-weight: 700;
    }

    @media(max-width: 800px) {
        font-size: 0.8rem;
        padding-left: 1rem;
    }
`