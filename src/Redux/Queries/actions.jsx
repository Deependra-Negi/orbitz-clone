import axios from "axios";
import { SEARCH_FAILURE, SEARCH_REQUEST, SEARCH_SUCCESS } from "./actionTypes";

export const searchRequest = (payload) => {
    return {
        type: SEARCH_REQUEST,
        payload
    }
}
export const searchSuccess = (payload) => {
    return {
        type: SEARCH_SUCCESS,
        payload
    }
}
export const searchFailure = () => {
    return {
        type: SEARCH_FAILURE
    }
}

export const search = (payload) => (dispatch) => {
    dispatch(searchRequest(payload));
    axios.get(`http://localhost:3001/hotels?city=${payload.city}`)
        .then((res) => {
            dispatch(searchSuccess(res.data));
        })
        .catch((err) => {
            dispatch(searchFailure(err));
        })
}