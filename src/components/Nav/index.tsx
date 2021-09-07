import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import * as S from './styles';

//components
import logo from '../../assets/logo.png';
import Home from '../Home';
import Characters from '../Characters';

const Nav = () => {
    return (
        <Router>
            
            <S.Container>
                <S.Nav>
                    <S.Logo src={logo} />
                    <S.Menu>
                        <S.OptionMenu to="/" >início</S.OptionMenu>
                        <S.OptionMenu to="/personagens" >personagens</S.OptionMenu>
                    </S.Menu>
                </S.Nav>
            </S.Container>

            <Switch>
                <Route path="/personagens">
                    <Characters />
                </Route>

                <Route path="/">
                    <Home />
                </Route>
            </Switch>

        </Router>
    )
};

export default Nav;