import React, { useState, useEffect } from "react";
import * as S from './styles'
import axios from "axios";

//components
import RickAndMorty from '../../assets/rick-and-morty.png'
import Characters from "../Characters";
import Card from '../Card';

const RickAndMortyApi = axios.create({
    baseURL: 'https://rickandmortyapi.com/'
});

interface CharacterProps {
    id: number,
    name: string,
    image: string,
    status: string,
    species: string,
    gender: string,
    origin: { name: string }
}

const Home = () => {

    const [character, setCharacter] = useState<CharacterProps[]>([]);
    const [characterAdd, setCharacterAdd] = useState<CharacterProps[]>([]);
    const [filter, setFilter] = useState<CharacterProps[]>([]);
    const [text, setText] = useState<string>('');

    useEffect(() => {
        getRickAndMorty();
    }, [])

    useEffect(() => {
        const filtering = character.filter(item => {
            if (text !== '') {
                if (item.name.toLowerCase().includes(text.toLowerCase()) ||
                    item.gender.toLowerCase().includes(text.toLowerCase()) ||
                    item.species.toLowerCase().includes(text.toLowerCase()) ||
                    item.status.toLowerCase().includes(text.toLowerCase()) ||
                    item.origin.name.toLowerCase().includes(text.toLowerCase())) {
                    return true;
                } return false;

            }
        })
        setFilter(filtering);
    }, [text])
    
    const getRickAndMorty = async () => {
        const response = await RickAndMortyApi.get('api/character')
        setCharacter(response.data.results)
    }

    const handleOnChange = (e: any) => setText(e.target.value);

    const handleCharacterAdd = (id: number) => {
        const getCharacter = character.filter(item => item.id === id)
        setCharacterAdd(characterAdd.concat(getCharacter));
    };

    const renderCardsFilter = () => {
        return filter.map((item, index) => (
            <div
                key={index}
                onClick={() => handleCharacterAdd(item.id)}
            >
                <S.BoxCard>
                <S.Card>
                <S.CharacterName>{item.name}</S.CharacterName>
                <S.BtnClose>+</S.BtnClose>
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
                </S.BoxCard>
            </div>
        ))
    }    

    if(characterAdd.length !== 0)
        localStorage.setItem('CharacterFav', JSON.stringify(characterAdd));

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
                   
                    {filter.length ?

                    <S.Cards>
                        {renderCardsFilter()}
                    </S.Cards> :
                        
                        <S.TextApi>
                            Conheça todos os personagens da série. 
                            Aproveite para registrar os <span>favoritos</span>
                        </S.TextApi> }
                       
                        <S.BoxSearch>
                    <S.Search
                        placeholder="Pesquise seu personagem: nome, gênero, espécie, status..."
                        onChange={(ev) => handleOnChange(ev)}
                                value={text}
                    />
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