export interface ITag {
    id: string;
    text: string;
    url: string;
}

export type authForm = IRegisterForm | ILoginForm;

export interface IRegisterForm {
    email: string;
    name: string;
    surname: string;
    password: string;
    repeatPassword: string;
}

export interface ILoginForm {
    email: string;
    password: string;
}