import { withFormik, FormikErrors } from "formik";
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { SignIn } from '../../components/index';
import { ILoginForm } from '../../types/interfaces';
import authActions from '../../redux/auth/authActions';
import { openNotification } from '../../util/helpers/index';

interface MyFormProps {
    signIn: (values: ILoginForm) => Promise<void>;
    router: RouteComponentProps
}

const LoginFormik = withFormik<MyFormProps, ILoginForm>({
    mapPropsToValues: (): ILoginForm => {
        return {
            email: "",
            password: "",
        };
    },
    validate: (values: ILoginForm) => {
        let errors: FormikErrors<ILoginForm> = {};

        if (!values.email) {
            errors.email = "Заполните email";
        } else if (!/(\w(=?@)\w+\.{1}[a-zA-Z]{2,})/i.test(values.email)) {
            errors.email = "Некорректный email";
        }

        if (!values.password) {
            errors.password = "Пароль не может быть пустым";
        }

        return errors;
    },

    handleSubmit: (values, { setSubmitting, props }) => {
        props.signIn(values).then(() => {
            props.router.history.push("/");
        }).catch(err => {
            openNotification("Ошибка", "Логин или пароль не правильный", 2, "error");
        })
        setSubmitting(false);
    },
})(SignIn);

const mapDispatchToProps = {
    signIn: authActions.signIn
}

export default connect(null, mapDispatchToProps)(LoginFormik);
