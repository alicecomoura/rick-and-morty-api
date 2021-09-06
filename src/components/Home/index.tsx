import React, { useState, useEffect } from "react";
import * as S from './styles';
import axios from "axios";

//components
import add from '../../assets/add.png';

// api
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

    const getRickAndMorty = async () => {
        const response = await RickAndMortyApi.get('api/character')
        setCharacter(response.data.results)
    }

     /* mensagem de pessonagem não encontrado */

     const characterNotFound = () => (
        <S.TextApi>
            Personagem não encontrado
        </S.TextApi>
    )
    /* busca de personagens */
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

    /* valor do input search */
    const handleOnChange = (e: any) => setText(e.target.value);

    /* função de adicionar personagens */
    const handleCharacterAdd = (id: number) => {
        const getCharacter = character.filter(item => item.id === id)
        setCharacterAdd(characterAdd.concat(getCharacter));
    }

    /* renderização do map filtrado */
    const renderCardsFilter = () => {
        return filter.map((item, index) => (
            <div>
                <S.BoxInfoApi>

                <S.BoxCardFilter>
                <S.CardFilter>
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

                </S.CardFilter>
                </S.BoxCardFilter>

                </S.BoxInfoApi>
            </div>
        ))
    }    

    /* deletar pesronagens */
    const deleteCharacters = (index: number) => {
        const del = characterAdd.filter(item => item.id != index)
        setCharacterAdd(del);
    }

    /* layout page inicial */
    return (
        <S.Container>

            <S.WrapHome>
                {/* box title */}
                <S.BoxTitle>
                    <S.Title>The Rick and Morty API</S.Title>
                    <S.TextApi>
                        Conheça todos os personagens da série.
                        Aproveite para registrar os <span>favoritos!</span>
                    </S.TextApi>
                </S.BoxTitle>

                <S.BoxInfoApi>

                    {/* box card text */}
                    <S.InfoTextApi>
                   
                    {filter.length ?

                    <S.CardsFilter>
                        {renderCardsFilter()}
                    </S.CardsFilter> :
                        
                        (check && text.length) > 0 && characterNotFound()
                        }
                       
                        <S.BoxSearch>
                    <S.Search
                        placeholder="Pesquise seu personagem: nome, gênero, espécie, status..."
                        onChange={(ev) => handleOnChange(ev)}
                        value={text}
                    />
                </S.BoxSearch>

                    </S.InfoTextApi>
                </S.BoxInfoApi>

            </S.WrapHome>

            <S.WrapFav>
                <S.ListFav>
                        Meus personagens favoritos
                    </S.ListFav>
                    {/* renderização dos personagens favoritos */}
                <S.BoxCardFav>
                        {characterAdd.map((item, index) =>
                            <S.CardFav
                                key={index}
                            >

                                
                                <S.BoxImg>
                                    <S.CharacterImgFav
                                        src={item.image}
                                    />
                                </S.BoxImg>

                                <S.BtnClose
                                    onClick={() => deleteCharacters(item.id)}
                                >
                                    x</S.BtnClose>


                                <S.CharacterName>{item.name}</S.CharacterName>

                            </S.CardFav>
                        )}
                </S.BoxCardFav>

            </S.WrapFav>



        </S.Container>
    )
}

export default Home;