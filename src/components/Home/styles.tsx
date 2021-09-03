import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    min-height: calc(100vh - 4rem);
`;

export const WrapHome = styled.div `
    width: 80%;
    height: 100%;
    margin: 0 auto;
    //border: 2px solid white;
`;

export const BoxTitle = styled.div `
    width: 100%;
`;

export const Title = styled.h1 `
    font-family: 'Rubik', sans-serif;
    font-size: 4.3rem;
    color: #FFFF;
    text-align: center;
    padding: 1.5rem 0 0;
`;

export const BoxInfoApi = styled.div `
    max-width: 1846.28px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const InfoTextApi = styled.div `
    width: 55%;
    background: white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    background: #bdbebd;
    box-shadow: -23px 9px 4px -1px rgba(25,25,25,0.93);
}
`;

export const TextApi = styled.h2 `
    width: 85%;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-height: 2.3rem;
    font-size: 1.8rem;
    color: #2b2b2b;

    span {
        font-weight: 800;
        color: #0fb0ca;
        text-shadow: 0 1px 1px black;
    }
`;

export const BoxImage = styled.figure `
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const RickAndMorty = styled.img `
    width: 90%;
`

export const BoxSearch = styled.div `
    width: 55%;
    display: flex;
    justify-content: center;
    background: rgba(25,25,25,0.93);
`

export const Search = styled.input `
    width: 95%;
    border: none;
    outline: none;
    padding: 0.8rem 0;
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