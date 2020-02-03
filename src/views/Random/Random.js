import React, { useState, useEffect } from 'react';
import {getRandomGif} from '@store/actions/gifs';
import ImageShowCase from '@components/ImageShowCase';
import ButtonContainer from '@components/ButtonContainer';
import ButtonMain from '@components/ButtonMain';

const Random = (props) => {
    const [gifData, setGif] = useState();
    const [loading, setLoading] = useState(false);
    let gif;

    const setRandom = () => {
        setLoading(true);
        getRandomGif()
            .then(res => {
                setGif(res);
                setLoading(false);
            });
    }

    useEffect(() => {
        if(!gifData){
            setRandom();
        }
    });


    if (gifData){
        gif = <ImageShowCase loading={loading} src={gifData.image_original_url} alt="this is a randomly loaded gif"/>
    }
    
    return (
        <section>
            {gif ? gif : null}
            <ButtonContainer align="center" >
                <ButtonMain loading={loading} onClick={setRandom}>Hit Me With a Rando</ButtonMain>
            </ButtonContainer>
        </section>
    );
}

export default Random;