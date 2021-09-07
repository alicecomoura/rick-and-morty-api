import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 4rem);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

//about home

export const WrapHome = styled.div`
    width: 80%;
    //min-height: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    @media(max-width: 460px) {
        width: 95%;
    }
`;

export const BoxTitle = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: 900px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-family: 'Rubik', sans-serif;
    font-size: 2rem;
    color: #FFFF;
    text-align: center;
    padding: 1rem 0;
    text-shadow: 2px 2px 5px #000;

    @media(max-width: 800px) {
        font-size: 2rem;
    }
`;

export const BoxInfoApi = styled.div`
    width: 100%;
    max-width: 1000px;
    //min-height: 300px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    @media(max-width: 800px) {
        width: 300px;
        
    }
`;

export const InfoTextApi = styled.div`
    width: 55%;
    max-width: 1000px;

    @media(max-width: 460px) {
        width: 100%;
        justify-content: space-evenly;
    }
}
`;

export const TextApi = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-height: 2.8rem;
    font-size: 1rem;
    color: #FFFF;
    width: 100%;
    text-align: center;
    margin: 0 auto;

    span {
        font-size: 1.2rem;
        font-weight: 800;
        color: #0fb0ca;
        text-shadow: 0 1px 1px black;
    }

    @media(max-width: 800px) {
        font-size: 1rem;
    }
`;

export const BoxSearch = styled.div`
    width: 100%;
    background: rgba(25,25,25,0.93);
`;

export const Search = styled.input`
    width: 80%;
    border: none;
    outline: none;
    padding:  0.8rem 1rem;
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

`;

// filter cards

export const BoxCardFilter = styled.div`
    max-width: 300px;
    min-height: 220px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    @media(max-width: 800px) {
        max-width: 1000px;
    }
`;

export const TextNotFound = styled.h3 `
      font-size: 1.8rem;
      color: gold;
      text-align: center;
      margin-bottom: 0.5rem;
`;

export const CardFilter = styled.div`
    width: 220px;
    min-height: 200px;
    background: #bdbebd;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.42);
    transition: 0.3s linear;
    position: relative;
    margin-bottom: 0.8rem;
    transition: 0.2s linear;

    &:hover {
        transform: scale(1.025);
    }

    @media(max-width: 800px) {
        width: 150px;
    }
`;

export const CharacterName = styled.p`
    font-size: 0.8rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    text-align: center;
    padding: 0.2rem 0;
    color: #FFFF;
    text-shadow: 1px 1px 2px #000;
`;

//btn filter

export const Btn = styled.img`
    width: 20px;

    position: absolute;
    top: 4%;
    right: 4%;

    //background: rgba(0,0,0,0.42);
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.2s linear;

    &:hover{
        transform: scale(1.30);
    }
`;

export const BoxImgFilter = styled.figure`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: 0 auto;
`;

export const CharacterImgFilter = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.2s;

    &:hover{
        transform: scale(1.2);
    }
`;

export const InfoCharacter = styled.p`
    font-size: 0.8rem;
    padding-left: 0.5rem;

    span{
        font-weight: 700;
    }
`;

export const CardsFilter = styled.div`
width: 100%;
height: 200px;
display: flex;
justify-content: space-evenly;
align-items: start;
flex-wrap: wrap;
overflow-y: scroll;
`;

export const BoxInfoCharacter = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media(max-width: 800px) {
    align-items: flex-start;
}
`
export const TitleAboutInfoPag = styled.h2`
    font-family: 'Rubik', sans-serif;
    font-size: 3rem;
    color: #FFFF;
    text-align: center;
    text-shadow: 2px 2px 5px #000;
    margin: 1rem;
`;

// list fav

export const WrapFav = styled.div `
    width: 100%;
`;

export const ListFav = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    font-family: 'Rubik', sans-serif;
    font-size: 1.2rem;
    color: #FFFF;
    margin-top: 2rem;

    @media(max-width: 460px) {
        width: 100%;
        text-align: center;
    }
`;

export const BoxCardFav = styled.div`
    width: 1000px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
    @media(max-width: 460px) {
        width: 100%;
        flex-direction: column;
        align-items: center;

    }
`;

export const CardFav = styled.div`
    width: 180px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 1rem;
    
    transition: 0.5 linear;
    position: relative;
`;

export const BoxImg = styled.figure`
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
        transform: scale(1.1);
    }
`;

export const CharacterImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const CharacterImgFav = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const BoxNameCharacter = styled.div`
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
`;

export const BtnClose = styled.div`
    position: absolute;
    top: 8%;
    right: 20%;
    background: #ea0000;
    color: white;
    font-size: 0.8rem;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background: #ff3b1f;
    }
`;
