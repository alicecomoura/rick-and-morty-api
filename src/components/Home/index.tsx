import React, { useState, useEffect } from "react";
import * as S from './styles';
import Slider from 'react-slick';
import axios from "axios";

//components
import RickAndMorty from '../../assets/rick-and-morty.png';
import add from '../../assets/add.png';

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
    const [check, setCheck] = useState<boolean>(false);

    useEffect(() => {
        getRickAndMorty();
    }, [])

    /* mensagem principal */

    const testando = () => (
        <S.TextApi>
            Conheça todos os personagens da série.
            Aproveite para registrar os <span>favoritos</span>
        </S.TextApi>
    )

     /* mensagem de pessonagem não encontrado */

     const aa = () => (
        <S.TextApi>
            Personagem não encontrado
        </S.TextApi>
    )

    useEffect(() => {
        const filtering = character.filter(item => {
            if (text !== '') {
                if (item.name.toLowerCase().includes(text.toLowerCase()) ||
                    item.gender.toLowerCase().includes(text.toLowerCase()) ||
                    item.species.toLowerCase().includes(text.toLowerCase()) ||
                    item.status.toLowerCase().includes(text.toLowerCase()) ||
                    item.origin.name.toLowerCase().includes(text.toLowerCase())) {
                    return true;
                } else {
                    setCheck(true);
                    return false;
                } 
                    
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
        console.log('adddddd')
    }

    const renderCardsFilter = () => {
        return filter.map((item, index) => (
            <div>
                <S.BoxInfoApi>

                <S.BoxCardFilter>
                <S.Card>
                <S.CharacterName>{item.name}</S.CharacterName>
                <S.Btn
                    key={index}
                    onClick={() => handleCharacterAdd(item.id)}
                    src={add}
                />
                <S.BoxImgFilter>
            <S.CharacterImgFilter
                src={item.image}
            />
        </S.BoxImgFilter>

        <S.BoxInfoCharacter>
            <S.InfoCharacter><span>estado:</span> {item.status}</S.InfoCharacter>
            <S.InfoCharacter><span>espécie:</span> {item.species}</S.InfoCharacter>
            <S.InfoCharacter><span>genêro:</span> {item.gender}</S.InfoCharacter>
            <S.InfoCharacter><span>origem:</span> {item.origin.name}</S.InfoCharacter>
        </S.BoxInfoCharacter>

                </S.Card>
                </S.BoxCardFilter>

                </S.BoxInfoApi>
            </div>
        ))
    }    

    /* deletar pesronagens */

    const deletandoPersonagens = (index: number) => {
        const del = characterAdd.filter(item => item.id != index)
        setCharacterAdd(del);
    }

/*     const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    } */


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
                        
                        (check && text.length) > 0 && aa() ||
                        (check && text === '') && testando()

                        }
                       
                        <S.BoxSearch>
                    <S.Search
                        placeholder="Pesquise seu personagem: nome, gênero, espécie, status..."
                        onChange={(ev) => handleOnChange(ev)}
                        value={text}
                    />
                </S.BoxSearch>

                    <S.ListFav>
                        + Minha lista de favoritos
                    </S.ListFav>

                    </S.InfoTextApi>

                    {/* box img rick and morty */}
                    <S.BoxImage>
                        <S.RickAndMorty
                            src={RickAndMorty}
                        />
                    </S.BoxImage>
                </S.BoxInfoApi>

            </S.WrapHome>

            <S.WrapFav>
                {/* box cards */}

                <S.BoxCardFilter>
                        {characterAdd.map((item, index) =>
                            <S.Card
                                key={index}
                            >
                                <S.CharacterName>{item.name}</S.CharacterName>

                                <S.BtnClose
                                    onClick={() => deletandoPersonagens(item.id)}
                                >
                                    x</S.BtnClose>

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
                </S.BoxCardFilter>

            </S.WrapFav>



        </S.Container>
    )
}

export default Home;