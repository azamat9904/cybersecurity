import React, { useRef, useEffect, FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { Layout } from '../../containers/index';
import { MainContainer, ShadowedBox } from '../../hoc';
import { Button } from '../../components/index';
import { SignIn } from '../../containers/index';
import { IAppState } from '../../redux/store';

import "./Home.scss";

type Props = {
    isAuthenticated: boolean;
}

const Home: FunctionComponent<RouteComponentProps & Props> = (props) => {
    const plainTextBlock = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const text = `С развитием информационных и компьютерных
         технологий проблемы правового регулирования вопросов связанных 
         с информационной и кибернетической безопасностью набирают все 
         большую популярность и актуальность. наши курсы  и статьи  
         помогут тебе не стать жертвой злоумышленников. начни учить 
         прям сейчас совершенно бесплатно.`;

        const possibleSpeed = [20, 50, 70, 90, 100];

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
            const letter = text![i++];
            plainTextBlock.current!.innerHTML += letter;
            const random = getRandom();
            timeout = setTimeout(startWriting, random);
        }

        timeout = setTimeout(startWriting, 100);

        return () => {
            if (timeout) clearTimeout(timeout);
        }

    }, []);

    const classes = classNames("main-content", "main-content--authed")
    return <div className="home-page">
        <Layout>
            <div className={classes} >
                <MainContainer>
                    <div className="main-content__wrapper">
                        <div className="introduction">
                            <h3 className="introduction__title">Кибербезопасность</h3>
                            <p className="introduction__text" ref={plainTextBlock}></p>
                            <Button className="introduction__btn">Начать сейчас</Button>
                        </div>
                        {
                            !props.isAuthenticated && <div className="sign-in">
                                <ShadowedBox>
                                    <SignIn router={props} />
                                </ShadowedBox>
                            </div>
                        }
                    </div>
                </MainContainer>
            </div>
        </Layout>
    </div>
}

const mapStateToProps = (state: IAppState) => {
    return {
        isAuthenticated: state.auth.user?.idToken != null
    }
}

export default connect(mapStateToProps)(Home);