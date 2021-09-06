import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from './styles'


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

const Characters = () => {

    const [character, setCharacter] = useState<CharacterProps[]>([]);

    useEffect(() => {
        getRickAndMorty()
    }, [])
    
    const getRickAndMorty = async () => {
        const response = await RickAndMortyApi.get('api/character');
        setCharacter(response.data.results);
    }

    return (
        <S.Container>
            <S.WrapHome>
                <S.TitleAboutInfoPag>Personagens</S.TitleAboutInfoPag>
                    {character.length ? <S.BoxCard>
                            {character.map((item, index) =>
                            <S.BoxImg
                                key={index}
                            >

                                <S.CharacterImg
                                    src={item.image}
                                />

                                <S.BoxCharacter>
                                <S.AboutCharacter>nome: <span>{item.name}</span></S.AboutCharacter>
                                <S.AboutCharacter>gênero: <span>{item.gender}</span></S.AboutCharacter>
                                <S.AboutCharacter>espécie: <span>{item.species}</span></S.AboutCharacter>
                                <S.AboutCharacter>status: <span>{item.status}</span></S.AboutCharacter>
                                <S.AboutCharacter>origem: <span>{item.origin.name}</span></S.AboutCharacter>
                                </S.BoxCharacter>
                            </S.BoxImg>
                       
                    )}
                </S.BoxCard> : <S.Loader></S.Loader>}
            </S.WrapHome>


        </S.Container>
    )
}
    


export default Characters;