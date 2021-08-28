import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST, SET_STATUS, LOGOUTDONE } from "./actionType";


export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST,

    }
}
export const loginSuccess = (payload) => {
    console.log(payload)
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}
export const loginFailure = (payload) => {
    return {
        type: LOGIN_FAILURE,
        payload
    }
}
export const setuserName = (payload) => {
    return {
        type: SET_STATUS,
        payload
    }
}
export const logoutdonefunc = () => {
    return {
        type: LOGOUTDONE,

    }
}


 