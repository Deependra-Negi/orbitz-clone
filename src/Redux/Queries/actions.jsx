import axios from "axios";
import { GET_HOTEL_FAILURE, GET_HOTEL_REQUEST, GET_HOTEL_SUCCESS, SEARCH_FAILURE, SEARCH_REQUEST, SEARCH_SUCCESS } from "./actionTypes";

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

export const getHotelRequest = () => {
    return {
        type: GET_HOTEL_REQUEST
    }
}
export const getHotelSuccess = (payload) => {
    return {
        type: GET_HOTEL_SUCCESS,
        payload
    }
}
export const getHotelFailure = () => {
    return {
        type: GET_HOTEL_FAILURE
    }
}


export const getHotel = (payload) => (dispatch) => {
    dispatch(getHotelRequest());
    axios.get(`https://orbitz-heroku-data.herokuapp.com/hotels/${payload}`)
        .then((res) => {
            dispatch(getHotelSuccess(res.data));
        })
        .catch((err) => {
            dispatch(getHotelFailure());
        })
}

export const search = (payload) => (dispatch) => {
    dispatch(searchRequest(payload));
    axios.get(`https://orbitz-heroku-data.herokuapp.com/hotels?city=${payload.city}`)
        .then((res) => {
            dispatch(searchSuccess(res.data));
        })
        .catch((err) => {
            dispatch(searchFailure(err));
        })
}