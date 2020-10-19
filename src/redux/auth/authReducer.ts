import { IUser } from '../../types/interfaces';
import { actionTypes } from './authActions';

export interface IAuthState {
    user: IUser | null;
}

const initialState: IAuthState = {
    user: null
}

const authReducer = (state = initialState, action: { type: actionTypes, payload: any }) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                user: null
            }
        default: return state;
    }
}

export default authReducer;