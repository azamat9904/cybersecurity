import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';
import { FormikProps } from "formik";
import {
    UserOutlined,
    LockOutlined,
    FormOutlined,
    MailOutlined
} from '@ant-design/icons';

import { IRegisterForm } from '../../types/interfaces';
import { validateField } from "../../util/helpers/index";
import { Button } from '../../components/index';

import "./SignUp.scss";

const SignUp = (props: FormikProps<IRegisterForm>) => {

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
        <div className="sign-up-block">
            <h3 className="sign-up-block__title">Зарегистрироваться</h3>
            <Form
                className="sign-up-form"
                initialValues={{ email: '', password: '', repeatPassword: '', name: '', surname: '' }}
                onFinish={handleSubmit}
            >
                <Form.Item
                    name="name"
                    validateStatus={validateField("name", touched, errors)}
                    hasFeedback
                    help={!touched.name ? null : errors.name}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Name"
                        className="sign-up-form__control"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.name}
                    />
                </Form.Item>
                <Form.Item
                    name="surname"
                    validateStatus={validateField("surname", touched, errors)}
                    hasFeedback
                    help={!touched.surname ? null : errors.surname}
                >
                    <Input
                        prefix={<FormOutlined className="site-form-item-icon" />}
                        placeholder="Surname"
                        className="sign-up-form__control"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.surname}
                    />
                </Form.Item>
                <Form.Item
                    name="email"
                    validateStatus={validateField("email", touched, errors)}
                    hasFeedback
                    help={!touched.email ? null : errors.email}
                >
                    <Input
                        prefix={<MailOutlined className="site-form-item-icon" />}
                        placeholder="Email"
                        className="sign-up-form__control"
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
                        className="sign-up-form__control"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        allowClear
                    />
                </Form.Item>

                <Form.Item
                    name="repeatPassword"
                    validateStatus={validateField("repeatPassword", touched, errors)}
                    hasFeedback
                    help={!touched.repeatPassword ? null : errors.repeatPassword}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        className="sign-up-form__control"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.repeatPassword}
                        allowClear
                    />
                </Form.Item>

                <Form.Item>
                    <div className="center">
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="sign-up-form__submit-btn"
                            disabled={!isValid || !dirty}
                            loading={isSubmitting}
                        >
                            Зарегистрироваться
                    </Button>
                    </div>
                </Form.Item>
                <div className="center">
                    <Link to="/signin" >Войти на сайт</Link>
                </div>
            </Form>
        </div>
    );
};

export default SignUp;