import { withFormik, FormikErrors } from "formik";
import { connect } from "react-redux";
import { RouteComponentProps } from 'react-router-dom';

import { SignUp } from '../../components/index';
import { IRegisterForm, IUser } from '../../types/interfaces';
import authActions from '../../redux/auth/authActions';
import { variables, openNotification } from '../../util/helpers/index';

interface MyFormProps {
    signUp: (values: IRegisterForm) => Promise<IUser>;
    router: RouteComponentProps
}

const RegisterFormik = withFormik<MyFormProps, IRegisterForm>({
    mapPropsToValues: (): IRegisterForm => {
        return {
            email: "",
            password: "",
            repeatPassword: "",
            name: "",
            surname: ""
        };
    },
    validate: (values: IRegisterForm) => {
        let errors: FormikErrors<IRegisterForm> = {};

        if (!values.email) {
            errors.email = "Заполните email";
        } else if (!/(\w(=?@)\w+\.{1}[a-zA-Z]{2,})/i.test(values.email)) {
            errors.email = "Некорректный email";
        }

        if (!values.name) {
            errors.name = "Заполните имя";
        }

        if (!values.surname) {
            errors.surname = "Заполните фамилию";
        }

        if (!values.password) {
            errors.password = "Введите пароль";
        } else if (values.password.length < 8) {
            errors.password = "Пароль слишком коротки";
        }

        if (!values.repeatPassword) {
            errors.repeatPassword = "Введите пароль";
        } else if (values.password !== values.repeatPassword) {
            errors.repeatPassword = "Пароли не совпадают";
        }

        return errors;
    },

    handleSubmit: async (values, { setSubmitting, setErrors, props }) => {
        try {
            await props.signUp(values);
            openNotification("Успех", "Регистрация прошла успешно!", 2, "success");
            props.router.history.push('/signin');
        } catch (err) {
            if (err.response.data.error.message === variables.EMAIL_EXISTS) {
                setErrors({ email: "Такой пользователь существует" });
                return;
            }
            openNotification("Ошибка", "Не удалось зарегистрироваться,попробуйте еще раз", 2, 'error');
        }

        setSubmitting(false);
    },
})(SignUp);

const mapDispatchToProps = {
    signUp: authActions.signUp
}

export default connect(null, mapDispatchToProps)(RegisterFormik);