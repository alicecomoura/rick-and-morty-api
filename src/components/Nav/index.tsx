import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom';

import * as S from './styles';

//components
import logo from '../../assets/logo.png'
import Favorites from '../Favorites'
import Home from '../Home'

interface NavProps {
    OptionMenu?: string,
}

const Nav: React.FC<NavProps> = (props) => {
    return (
        <Router>
            <S.Container>
                <S.Nav>
                    <S.Logo src={logo} />
                    <S.Menu>
                        <Link to="/" >início</Link>
                        <Link to="/pesquisar" >pesquisar</Link>
                        <Link to="/minhalista" >minha lista</Link>
                    </S.Menu>
                </S.Nav>
            </S.Container>

            <Switch>
                <Route path="/minhalista">
                    <Favorites />
                </Route>

                <Route path="/pesquisar">
                    <Home />
                </Route>

                <Route path="/">
                    <Home />
                </Route>
            </Switch>

        </Router>


    )
}

export default Nav;