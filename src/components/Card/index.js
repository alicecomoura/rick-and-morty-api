import React from 'react';
import * as S from './styles';

const CardCharacter = (index, indexCards, item) => (
    <S.Card
        key={index}
    /* className={index === indexCards ? "slide activeSlider" : "slide"} */
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
)

export default CardCharacter;