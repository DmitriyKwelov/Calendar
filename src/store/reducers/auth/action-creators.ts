import {IUser} from "../../../models/IUser";
import {
    AuthActionEnum,
    SetAuthAction,
    SetErrorAction,
    SetLoadingAction,
    SetUserAction
} from "./types";
import {AppDispatch} from "../../index";
import axios from "axios";
import UserService from "../../../api/UserService";

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
    setLoading: (payload: boolean): SetLoadingAction => ({type: AuthActionEnum.SET_LOADING, payload}),
    setError: (payload: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setLoading(true));
            setTimeout(async () => {
                const response = await UserService.getUsers()
                const mockUsers = response.data.find(user => user.username === username && user.password === password)
                if (mockUsers) {
                    localStorage.setItem('auth', 'true');
                    localStorage.setItem('username', mockUsers.username);
                    dispatch(AuthActionCreators.setIsAuth(true))
                    dispatch(AuthActionCreators.setUser(mockUsers))
                } else {
                    dispatch(AuthActionCreators.setError('Некорректыный логин или пароль'));
                }
            }, 1000)
            dispatch(AuthActionCreators.setLoading(false));
        } catch (e) {
            dispatch(AuthActionCreators.setError('Произошла ошибка при логине'));
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('auth');
        localStorage.removeItem('username')
        dispatch(AuthActionCreators.setUser({} as IUser))
        dispatch(AuthActionCreators.setIsAuth(false))
    }
}
