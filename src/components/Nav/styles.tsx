import styled from "styled-components";
import {Link} from 'react-router-dom';

export const Container = styled.header `
    width: 100%;
    background: #2b2b2b;
    box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.5);
`;

export const Nav = styled.nav `
    max-width: 1000px;
    width: 80%;
    height: 3rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    
    @media(max-width: 460px) {
        width: 100%;
    }
`;

export const Logo = styled.img `
    width: 10%;
    //height: 50px;

    @media(max-width: 900px) {
        width: 20%;
    }

    @media(max-width: 460px) {
        display: none;
    }
`

export const Menu = styled.ul `
    width: 60%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;

    @media(max-width: 460px) {
        width: 100%;
    }
`;

export const OptionMenu = styled(Link) `
    font-family: 'Montserrat', sans-serif;
    color: #0fb0ca;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;

    &:hover{
        color: #88c445;
    }

    @media(max-width: 900px) {
        transition: 0.6s linear;
        font-size: 0.8rem;
    }
`;

