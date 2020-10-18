import React from 'react';

import { Layout } from '../../containers/index';
import { MainContainer, ShadowedBox } from '../../hoc';
import { Button } from '../../components/index';
import { SignIn } from '../../containers/index';

import "./Home.scss";

const Home = () => {
    return <div className="home-page">
        <Layout>
            <div className="main-content" >
                <MainContainer>
                    <div className="main-content__wrapper">
                        <div className="introduction">
                            <h3 className="introduction__title">Кибербезопасность</h3>
                            <p className="introduction__text">С развитием информационных и компьютерных технологий проблемы правового регулирования вопросов связанных с информационной и кибернетической безопасностью набирают все большую популярность и актуальность. наши курсы  и статьи  помогут тебе не стать жертвой злоумышленников. начни учить прям сейчас совершенно бесплатно. </p>
                            <Button className="introduction__btn">Начать сейчас</Button>
                        </div>
                        <div className="sign-in">
                            <ShadowedBox>
                                <SignIn />
                            </ShadowedBox>
                        </div>
                    </div>
                </MainContainer>
            </div>
        </Layout>
    </div>
}

export default Home;