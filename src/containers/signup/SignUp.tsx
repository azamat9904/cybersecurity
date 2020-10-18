import { withFormik, FormikErrors } from "formik";

import { SignUp } from '../../components/index';
import { IRegisterForm } from '../../types/interfaces';


export default withFormik({
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

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values));
            setSubmitting(false);
        }, 1000);
    },
})(SignUp);
