import { IRegisterForm, IUser } from '../../types/interfaces';
import { Dispatch } from 'redux';
import auth from '../../util/api/auth';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from "../store";
import { openNotification } from '../../util/helpers/index';

export enum actionTypes {
    SET_USER = "SET_USER"
}

const setUser = (user: IUser) => {
    return {
        type: actionTypes.SET_USER,
        payload: user
    }
}

const signUp = (user: IRegisterForm) => (dispatch: Dispatch) => {
    return auth
        .signUp(user.email, user.password)
        .then((data) => {
            dispatch(setUser(data));
            openNotification("Успех", "Регистрация прошла успешно!", 2, "success");
        })
}

export default { signUp };