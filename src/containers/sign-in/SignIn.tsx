import { withFormik, FormikErrors } from "formik";

import { SignIn } from '../../components/index';
import { ILoginForm } from '../../types/interfaces';



export default withFormik({
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

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values));
            setSubmitting(false);
        }, 1000);
    },
})(SignIn);
