import { IRegisterForm, IUser } from '../../types/interfaces';
import { Dispatch } from 'redux';
import auth from '../../util/api/auth';

export enum actionTypes {
    SET_USER = "SET_USER"
}

const setUser = (user: IUser) => {
    return {
        type: actionTypes.SET_USER,
        payload: user
    }
}

const signUp = (user: IRegisterForm) => (dispatch: Dispatch): Promise<void> => {
    return auth
        .signUp(user.email, user.password)
        .then((data) => {
            dispatch(setUser(data));
        })
}

export default { signUp };