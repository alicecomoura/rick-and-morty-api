import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    min-height: calc(100vh - 4rem);
    display: flex;
    align-items: center;
`;

export const WrapHome = styled.div `
    width: 80%;
    min-height: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const BoxTitle = styled.div `
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
`;

export const Title = styled.h1 `
    font-family: 'Rubik', sans-serif;
    font-size: 4.3rem;
    color: #FFFF;
    text-align: center;
    padding: 1.5rem 0 0;
    text-shadow: 2px 2px 5px #000;

    @media(max-width: 800px) {
        font-size: 2rem;
    }
`;

export const BoxInfoApi = styled.div `
    width: 100%;
    max-width: 1000px;
    //min-height: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 800px) {
        flex-direction: column-reverse;
    }

`;
    
export const InfoTextApi = styled.div `
    width: 55%;
    max-width: 1000px;
    min-height: 250px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
`;

export const TextApi = styled.h2 `
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-height: 2.8rem;
    font-size: 1.8rem;
    color: #FFFF;

    span {
        font-size: 2.9rem;
        font-weight: 800;
        color: #0fb0ca;
        text-shadow: 0 1px 1px black;
    }

    @media(max-width: 800px) {
        font-size: 1rem;
    }
`;

export const BoxImage = styled.figure `
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const RickAndMorty = styled.img `
    width: 100%;
`

export const BoxSearch = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    background: rgba(25,25,25,0.93);
`

export const Search = styled.input `
    width: 80%;
    border: none;
    outline: none;
    padding: 0.8rem 1rem;
    background: transparent;
    font-size: 0.850rem;
    font-family: 'Montserrat', sans-serif;
    color: #FFFF;
    font-weight: 600;

    &::placeholder {
        font-size: 0.850rem;
        color: #a9a9a9;
        font-style: italic;
        font-weight: normal;
      }
`

// lista dos personagens 


export const BoxCard = styled.div `
    width: 100%;
    min-height: 300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
`
    
export const Card = styled.div `
    width: 250px;
    min-height: 250px;
    background: #bdbebd;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.42);
    transition: 0.3s linear;
    position: relative;
    margin-bottom: 0.8rem;

    transition: 0.2s linear;

    &:hover {
       transform: scale(1.025);
    }
`

export const CharacterName = styled.p `
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    text-align: center;
    padding: 0.2rem 0;
`

export const BtnClose = styled.button `
    width: 25px;
    height: 25px;
    color: #FFFF;
    border-radius: 50%;

    position: absolute;
    top: 2%;
    right: 2%;

    background: rgba(0,0,0,0.42);
    border: none;
    outline: none;
    cursor: pointer;

    &:hover{
        background: green;
    }
`

export const BoxImg = styled.figure `
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: 0 auto;
`

export const CharacterImg = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.2s;

    &:hover{
        transform: scale(1.2);
    }
`;

export const InfoCharacter = styled.p `
    font-size: 0.8rem;

    span{
        font-weight: 700;
    }
`

export const Cards = styled.div `
width: 100%;
height: 280px;
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
overflow-y: scroll;

h1 {
    /* max- */width: 150px;
    border: 1px solid pink; 
    user-select: none;
    cursor: pointer;
    text-align: center;
}
` 

export const BoxInfoCharacter = styled.div `
display: flex;
flex-direction: column;
align-items: center;

@media(max-width: 800px) {
    align-items: flex-start;
}
`