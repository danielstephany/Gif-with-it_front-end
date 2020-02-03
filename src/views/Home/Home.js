import React from 'react';
import './home.scss';
import ButtonContainer from '@components/ButtonContainer';
import ButtonMain from '@components/ButtonMain';

const Home = () => {
    return (
        <section className="home-banner">
            <div className="home-banner__content">
                <h2>
                    We're glad your giffin with it! <br />
                    <small>You came to the right place to find the right gif for any occation.</small>
                </h2>
                <p>Get started with some random gifs</p>
                <ButtonContainer align="center">
                    <ButtonMain routeLink to="/random">See Random Gifs</ ButtonMain>
                </ ButtonContainer>
            </div>
        </section>
    );
}

export default Home;