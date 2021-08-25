import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { queriesReducer } from "../Redux/Queries/queriesReducer";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(queriesReducer, enhancer);