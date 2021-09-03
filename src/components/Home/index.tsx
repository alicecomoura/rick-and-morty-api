import React from "react";
import * as S from './styles'

//components

import RickAndMorty from '../../assets/rick-and-morty.png'

const Home = () => {
    return (
        <S.Container>

            <S.WrapHome>
                {/* box title */}
                <S.BoxTitle>
                    <S.Title>The Rick and Morty API</S.Title>
                </S.BoxTitle>
                <S.BoxInfoApi>

                    {/* box card text */}
                    <S.InfoTextApi>
                        <S.TextApi>
                            Aqui você tem acesso as principais informações sobre os
                             personagens da série e pode escolher quais são os <span>seus favoritos</span>!
                        </S.TextApi>
                    </S.InfoTextApi>

                    {/* box img rick and morty */}
                    <S.BoxImage>
                        <S.RickAndMorty
                            src={RickAndMorty}
                        />
                    </S.BoxImage>
                </S.BoxInfoApi>

                <S.BoxSearch>
                    <S.Search
                        placeholder="Pesquisar: nome, gênero, espécie..."
                    
                    />
                </S.BoxSearch>
            </S.WrapHome>


        </S.Container>
    )
}

export default Home;