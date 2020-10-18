import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Switch } from 'antd';

import { Logo, CategoryList } from '../index';
import { ITag } from '../../types/interfaces';
import { MainContainer } from '../../hoc';
import moon from '../../assets/images/moon.png';
import sun from '../../assets/images/sun.png';
import "./Footer.scss";


type Props = {
    categories: ITag[]
}

const Footer: FunctionComponent<Props> = ({ categories }) => {
    return (
        <footer className="footer">
            <MainContainer>
                <div className="footer__wrapper">
                    <div className="footer__info">
                        <div className="footer__logo"><Logo /></div>
                        <div className="footer__content">Ресурс видеоуроков для защиты от мошенников и разных видов атак. Узнай о видах атак, уловок, которые применяются в современном мире и защити себя и своих близких.</div>
                    </div>
                    <div className="footer__categories">
                        <h4 className="footer__categories-name">Категории</h4>
                        <div className="footer__all-courses"><Link to="/all-courses" className="footer__all-courses-link">Все курсы</Link></div>
                        <CategoryList tags={categories} className="footer__categories-list" />
                    </div>
                    <div className="footer__background">
                        <h4 className="footer__background-title">Темы:</h4>
                        <div className="footer__background-content">
                            <span className="footer__background-icon">
                                <img src={moon} alt="dark background" /></span> <Switch className="footer__radio-btn" defaultChecked />
                            <span className="footer__background-icon"><img src={sun} alt="light background" /></span>
                        </div>
                    </div>
                </div>
            </MainContainer>
        </footer>
    )
}

export default Footer;