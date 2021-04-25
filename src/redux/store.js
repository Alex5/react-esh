import {combineReducers} from 'redux'
import {createStore, applyMiddleware, compose} from "redux"
import searchReducer from './search-reducer';

let reducers = combineReducers({
    searchData: searchReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware()))

export default store;


