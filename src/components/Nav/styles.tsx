import styled from "styled-components";
import {Link} from 'react-router-dom';

export const Container = styled.header `
    width: 100%;
    background: #2b2b2b;
    box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.5);
`;

export const Nav = styled.nav `
    max-width: 1846.28px;
    width: 80%;
    height: 3rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

export const Logo = styled.img `
    width: 10%;
`

export const Menu = styled.ul `
    width: 40%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
`;

export const OptionMenu = styled(Link) `
    font-family: 'Montserrat', sans-serif;
    color: #0fb0ca;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;

    &:hover{
        color: #88c445;
    }
`;

