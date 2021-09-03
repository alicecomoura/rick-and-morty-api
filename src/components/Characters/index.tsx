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
        const response = await RickAndMortyApi.get('api/character')
        setCharacter(response.data.results)
        console.log(response.data.results)
        console.log(character)
    }

    return (
        <S.Container>
            <S.WrapHome>
                <S.TitleAboutInfoPag>Personagens</S.TitleAboutInfoPag>
                <S.BoxCard>
                            {character.map((item, index) =>
                            <S.BoxImg
                                key={index}
                            >

                                <S.CharacterImg
                                    src={item.image}
                                />

                                <S.BoxNameCharacter>{item.name}</S.BoxNameCharacter>
                            </S.BoxImg>
                       
                    )}
                </S.BoxCard>
            </S.WrapHome>


        </S.Container>
    )
}
    


export default Characters;