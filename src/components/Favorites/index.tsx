import React, { useState, useEffect } from "react";
import * as S from './styles'
import Slider from 'react-slick'

import rick from '../../assets/rick.jpg'
import beth from '../../assets/beth.jpg'

/* // images
import jerry from '../../assets/jerry.jpg'
import morty from '../../assets/morty.jpg'
import summer from '../../assets/summer.jpg' */


// const images = [rick, beth, jerry, morty, summer]

interface CharacterProps {
    InfoCharacter?: string,
}

const Favorites: React.FC<CharacterProps> = (props) => {

  /*   const setting = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slideToShow: 3,
        centerMode: true,
        centerPadding: 0,
    } */
    {/* <S.WrapFav>
        <Slider>
            {images.map((img, idx) =>{
                <div>
                    <img src={img} alt={img} />
                </div>
            })}
        </Slider>
    </S.WrapFav> */}

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