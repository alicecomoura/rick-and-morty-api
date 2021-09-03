import React, { useState, useEffect } from "react";
import * as S from './styles'
import axios from "axios";

//components
import RickAndMorty from '../../assets/rick-and-morty.png'

const RickAndMortyApi = axios.create({
    baseURL: 'https://rickandmortyapi.com/'
});

interface CharacterProps {
    name: string,
    image: string,
    status: string,
    species: string,
    gender: string,
    origin: { name: string }
}

const Home = () => {

    const [character, setCharacter] = useState<CharacterProps[]>([]);

    useEffect(() => {
        getRickAndMorty()
    }, [])
    
    const getRickAndMorty = async () => {
        const response = await RickAndMortyApi.get('api/character')
        setCharacter(response.data.results)
        console.log(response.data.results)
        console.log(character)
    }


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
                            Conheça todos os personagens da série. 
                            Aproveite para registrar os <span>favoritos</span>
                        </S.TextApi>

                        <S.BoxSearch>
                    <S.Search
                        placeholder="Pesquise seu personagem: nome, gênero, espécie, status..."
                    />
                    <S.BtnSerch>
                            search
                    </S.BtnSerch>
                </S.BoxSearch>

                    </S.InfoTextApi>

                    {/* box img rick and morty */}
                    <S.BoxImage>
                        <S.RickAndMorty
                            src={RickAndMorty}
                        />
                    </S.BoxImage>
                </S.BoxInfoApi>

            </S.WrapHome>


        </S.Container>
    )
}

export default Home;