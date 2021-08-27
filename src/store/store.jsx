import { applyMiddleware, compose, createStore,combineReducers } from "redux";
import thunk from "redux-thunk";
import { queriesReducer } from "../Redux/Queries/queriesReducer";
import { authReducers } from "../Redux/Auth/authreducers";

const rootReducer = combineReducers({ auth: authReducers, Query:queriesReducer })
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);