import React, { useRef, useEffect } from 'react';

import { Layout } from '../../containers/index';
import { MainContainer, ShadowedBox } from '../../hoc';
import { Button } from '../../components/index';
import { SignIn } from '../../containers/index';

import "./Home.scss";

const Home = () => {
    const plainTextBlock = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const text = "С развитием информационных и компьютерных технологий проблемы правового регулирования вопросов связанных с информационной и кибернетической безопасностью набирают все большую популярность и актуальность. наши курсы  и статьи  помогут тебе не стать жертвой злоумышленников. начни учить прям сейчас совершенно бесплатно. ";
        const possibleSpeed = [120, 50, 200, 300, 80];

        let i = 0;
        let count = text?.length || 0;
        let timeout: any;

        const getRandom = () => {
            const number = Math.floor(Math.random() * 5);
            return possibleSpeed[number];
        }

        const startWriting = () => {
            if (i === count - 1) {
                clearTimeout(timeout);
                return;
            }
            const letter = text![i];
            plainTextBlock.current!.innerHTML += letter;
            i++;
            const random = getRandom();
            timeout = setTimeout(startWriting, random);
        }

        timeout = setTimeout(startWriting, 100);

        return () => {
            if (timeout) clearTimeout(timeout);
        }

    }, []);

    return <div className="home-page">
        <Layout>
            <div className="main-content" >
                <MainContainer>
                    <div className="main-content__wrapper">
                        <div className="introduction">
                            <h3 className="introduction__title">Кибербезопасность</h3>
                            <p className="introduction__text" ref={plainTextBlock}></p>
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