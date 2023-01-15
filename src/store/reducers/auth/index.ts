import {AuthAction, AuthActionEnum, AuthState} from "./types";
import {IUser} from "../../../models/IUser";

const initialState: AuthState = {
    loading: false,
    isAuth: false,
    error: '',
    user: {} as IUser
}

export default function authReducer(state = initialState, action: AuthAction): AuthState {
    switch (action.type){
        case AuthActionEnum.SET_AUTH:
            return {...state, isAuth: action.payload, loading: false}
        case AuthActionEnum.SET_USER:
            return {...state, user: action.payload}
        case AuthActionEnum.SET_ERROR:
            return {...state, error: action.payload, loading: false}
        case AuthActionEnum.SET_LOADING:
            return {...state, loading: action.payload}
        default:
            return state
    }
}

