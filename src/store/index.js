import data from './data.js'
import carts from "./cart";

import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// add as many reducers as you want
let reducers = combineReducers({data, carts});

const store = () => {
    return createStore(reducers, composeWithDevTools())
}

export default store();