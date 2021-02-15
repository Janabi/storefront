import data from './data.js'

import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// add as many reducers as you want
let reducers = combineReducers({data});

const store = () => {
    return createStore(reducers, composeWithDevTools())
}

export default store();