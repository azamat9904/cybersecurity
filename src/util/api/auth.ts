import axios from '../axios/axios';
import { IUser } from '../../types/interfaces';

const auth = {
    signUp: async (email: string, password: string) => {
        return axios.post<IUser>("accounts:signUp", { email, password, returnSecureToken: true }).then((response) => response.data);
    }
}

export default auth;