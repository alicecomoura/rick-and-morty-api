import React, { useState, useEffect } from "react";
import * as S from './styles'
import axios from "axios";
import Slider, { Settings } from 'react-slick'


const RickAndMortyApi = axios.create({
    baseURL: 'https://rickandmortyapi.com/'
});

interface CharacterProps {
    name: string,
    image: string,
    status: string,
    species: string,
    gender: string,
    origin: {name: string}
}

const Favorites = () => {

    const [character, setCharacter] = useState<CharacterProps[]>([]);

    const [indexCards, setIndexCards] = useState(0)

    useEffect(() => {
        getRickAndMorty()
    }, [])

    const getRickAndMorty = async () => {
        const response = await RickAndMortyApi.get('api/character')
        setCharacter(response.data.results)
        console.log(response.data.results)
        console.log(character)
    }

    const settings: Settings = {
        accessibility: false,
        draggable: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        dots: false,
        centerPadding: '0',
        beforeChange: (current, next) => setIndexCards(next)
    }

    return (
        <S.Container>
            <S.WrapFav>

                <S.TitleAboutInfoPag>Meus personagens favoritos</S.TitleAboutInfoPag>
                {/* box cards */}

                <S.BoxCard>
                    <Slider {...settings}>
                        {character.map((item, index) =>
                            <S.Card
                                key={index}
                                className={index === indexCards ? "slide activeSlider" : "slide"}
                            >
                                <S.CharacterName>{item.name}</S.CharacterName>

                                <S.BtnClose>x</S.BtnClose>

                                <S.BoxImg>
                                    <S.CharacterImg
                                        src={item.image}
                                    />
                                </S.BoxImg>

                                <S.BoxInfoCharacter>
                                    <S.InfoCharacter><span>estado:</span> {item.status}</S.InfoCharacter>
                                    <S.InfoCharacter><span>espécie:</span> {item.species}</S.InfoCharacter>
                                    <S.InfoCharacter><span>genêro:</span> {item.gender}</S.InfoCharacter>
                                    <S.InfoCharacter><span>origem:</span> {item.origin.name}</S.InfoCharacter>
                                </S.BoxInfoCharacter>

                            </S.Card>
                        )}
                    </Slider>
                </S.BoxCard>

            </S.WrapFav>

        </S.Container>
    )
}

export default Favorites;