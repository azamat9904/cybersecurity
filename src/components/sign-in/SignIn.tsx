import React from 'react';
import { Input } from 'antd';

import { Button } from '../../components/index';

import "./SignIn.scss";

const SignIn = () => {
    return (
        <div className="sign-in-block">
            <h3 className="sign-in-block__title">Войти в аккуант</h3>
            <form className="sign-in-form">
                <div className="sign-in-form__group">
                    <label htmlFor="email" className="sign-in-form__label">Логин</label>
                    <Input placeholder="Введите логин" name="email" type="email" />
                </div>
                <div className="sign-in-form__group">
                    <label htmlFor="email" className="sign-in-form__label">Пароль</label>
                    <Input placeholder="Введите пароль" name="email" type="email" />
                </div>
                <div className="sign-in-form__forget"><Button type="link" className="sign-in-form__btn">Забыли пароль ?</Button></div>
                <div className="sign-in-form__submit">
                    <Button className="sign-in-form__submit-btn"> Войти </Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;