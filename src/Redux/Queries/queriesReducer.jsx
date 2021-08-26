import { GET_HOTEL_FAILURE, GET_HOTEL_REQUEST, GET_HOTEL_SUCCESS, SEARCH_FAILURE, SEARCH_REQUEST, SEARCH_SUCCESS } from "./actionTypes";

export const queriesReducer = (state = initState, { type, payload }) => {
    switch (type) {
        default: return state;
        case SEARCH_REQUEST: return {
            ...state,
           status: {
                isLoading: true,
                isError: false
            },
           queries: payload
        }
        case SEARCH_SUCCESS: return {
            ...state,
            status: {
                isLoading: false,
                isError: false
            },
            result: payload
        }
        case SEARCH_FAILURE: return {
            ...state,
            status: {
                isLoading: false,
                isError: true
            }   
        }
        case GET_HOTEL_REQUEST: return {
            ...state,
            status: {
                isLoading: true,
                isError: false
            }
        }
        case GET_HOTEL_SUCCESS: return {
            ...state,
            currentHotel: payload,
            status: {
                isLoading: false,
                isError: false
            }
        }
        case GET_HOTEL_FAILURE: return {
            ...state,
            status: {
                isLoading: false,
                isError: true
            }
        }
    }
}

const initState = {
    result: [],
    queries : {
        city: "",
        travelers: "",
        from: "",
        to: "",
    },
    status: {
        isLoading: false,
        isError: false,
    },
    currentHotel: {}
}