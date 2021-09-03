import React, { useState, useEffect } from "react";
import * as S from './styles'
import axios from "axios";
//import Slider from 'react-slick'

import rick from '../../assets/rick.jpg'
import beth from '../../assets/beth.jpg'

/* // images
import jerry from '../../assets/jerry.jpg'
import morty from '../../assets/morty.jpg'
import summer from '../../assets/summer.jpg' */
// const images = [rick, beth, jerry, morty, summer]

const RickAndMortyApi = axios.create ({
    baseURL: 'https://rickandmortyapi.com/api/character'
});

const Favorites = () => {

        const [character, setCharacter] = useState([]);


        useEffect(() => {
            getRickAndMorty()
        },[])
        
        const getRickAndMorty = async () => {
            const response = await RickAndMortyApi.get('')
            setCharacter(response.data.results)
            console.log(character)
        }

    return (
        <S.Container>
            <S.WrapFav>
                
            {/* box cards */}
            
            <S.BoxCard>

                <S.Card>
                    <S.CharacterName>Rick Sanchez</S.CharacterName>

                    <S.BtnClose>x</S.BtnClose>

                    <S.BoxImg>
                    <S.CharacterImg 
                        src={rick}
                        />
                    </S.BoxImg>

                    <S.BoxInfoCharacter>
                        <S.InfoCharacter>estado: vivo</S.InfoCharacter>
                        <S.InfoCharacter>espécie: humano</S.InfoCharacter>
                        <S.InfoCharacter>genêro: masculino</S.InfoCharacter>
                        <S.InfoCharacter>origem: brasil</S.InfoCharacter>
                        <S.InfoCharacter>episódio: pais dos cocos</S.InfoCharacter>
                    </S.BoxInfoCharacter>

                </S.Card>
            </S.BoxCard>

            </S.WrapFav>

        </S.Container>
    )
}

export default Favorites;