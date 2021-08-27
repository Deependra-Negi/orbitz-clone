import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST, SET_STATUS, LOGOUTDONE } from "./actionType";
import { LocalData, saveData } from '../../Utils/LocalStore/LocalData'
const initialstate = {
    isAuth: LocalData('token') === "" ? false : true,
    token: LocalData("token") || "",
    user:LocalData("token") || "admin",
    isLoading: false,
    isError: false,

}
export const authReducers = (state = initialstate, { type, payload }) => {

    switch (type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }

        case LOGIN_SUCCESS:
            saveData("token", payload)
         
            return {
                ...state,
                token: payload,
                isAuth: true,
                isLoading: false,
                isError: false,

            }

        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isAuth: false,
                isError: true,
                isLogin: false
            }
        case SET_STATUS:
            saveData("user", payload)
            return {
                ...state,
                isAuth: true,
                isLoading: false,
                isError: false,
                user: payload
            }
        case LOGOUTDONE:
            saveData("status", payload)
            return {
                ...state,
                isAuth: false,
                isLoading: false,
                isError: false,
                mystatus: payload
            }

        default:
            return state
    }


}