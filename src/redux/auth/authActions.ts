import { ILoginForm, IRegisterForm, IUser } from '../../types/interfaces';
import { Dispatch } from 'redux';
import auth from '../../util/api/auth';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { IAppState } from '../store';


export enum actionTypes {
    SET_USER = "SET_USER",
    AUTH_LOGOUT = "AUTH_LOGOUT"
}

const setUser = (user: IUser) => {
    return {
        type: actionTypes.SET_USER,
        payload: user
    }
}

export const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("expirationTime");
    return {
        type: actionTypes.AUTH_LOGOUT,
    };
};

const checkAuthTimeout = (expireationTime: number) => {
    return (dispatch: Dispatch) => {
        setTimeout(() => {
            dispatch(logout());
        }, expireationTime * 1000);
    };
};

const signIn = (user: ILoginForm) => async (dispatch: ThunkDispatch<IAppState, void, Action>) => {
    const data = await auth.signIn(user.email, user.password);
    const expirationDate = new Date(
        new Date().getTime() + data.expiresIn * 1000
    );
    localStorage.setItem('user', JSON.stringify(data));
    localStorage.setItem('expirationTime', expirationDate.toString());
    dispatch(setUser(data));
    dispatch(checkAuthTimeout(data.expiresIn));
}

const signUp = (user: IRegisterForm) => (): Promise<IUser> => {
    return auth.signUp(user.email, user.password)
        .then((data) => {
            return data;
        })
}

export const authCheckState = () => (dispatch: ThunkDispatch<IAppState, void, Action>) => {
    const data = localStorage.getItem("user");
    const time = localStorage.getItem("expirationTime");

    if (data && time) {
        const user = JSON.parse(data!);
        const expirationTime = new Date(time);
        if (expirationTime > new Date()) {
            dispatch(setUser(user));
            const expiration = (expirationTime.getTime() - new Date().getTime()) / 1000;
            dispatch(checkAuthTimeout(expiration));
            return;
        }
    }

    dispatch(logout());
};


export default { signUp, signIn, logout, authCheckState };