import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { FormikProps } from "formik";

import { ILoginForm } from '../../types/interfaces';
import { validateField } from "../../util/helpers/index";
import { Button } from '../../components/index';

import "./SignIn.scss";

const SignIn = (props: FormikProps<ILoginForm>) => {

    const {
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        touched,
        errors,
        isSubmitting,
        isValid,
        dirty
    } = props;

    return (
        <div className="sign-in-block">
            <h3 className="sign-in-block__title">Войти в аккуант</h3>
            <Form
                className="sign-in-form"
                initialValues={{ email: values.email, password: values.password }}
                onFinish={handleSubmit}
            >
                <Form.Item
                    name="email"
                    validateStatus={validateField("email", touched, errors)}
                    hasFeedback
                    help={!touched.email ? null : errors.email}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Username"
                        className="sign-in-form__control"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    validateStatus={validateField("password", touched, errors)}
                    hasFeedback
                    help={!touched.password ? null : errors.password}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        className="sign-in-form__control"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        allowClear
                    />
                </Form.Item>
                <div className="sign-in-form__forget">
                    <Link
                        to="/forget"
                        className="sign-in-form__btn"
                    >
                        Забыли Пароль ?
                     </Link>
                </div>

                <Form.Item>
                    <div className="center">
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="sign-in-form__submit-btn"
                            disabled={!isValid || !dirty}
                            loading={isSubmitting}
                        >
                            Войти
                    </Button>
                    </div>
                </Form.Item>
                <div className="center">
                    <Link to="/signup" >Зарегистрироваться</Link>
                </div>
            </Form>
        </div>
    );
};

export default SignIn;