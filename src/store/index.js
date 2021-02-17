// import data from './data.js'
import carts from "./cart";

import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import data from './reducers.js';
// add as many reducers as you want
let reducers = combineReducers({data, carts});

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
}

export default store();