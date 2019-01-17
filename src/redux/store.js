import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const REDUX_EXTENSION = '__REDUX_DEVTOOLS_EXTENSION__';

const initialState = {};

const middleware = [thunk]

const hasReduxExtension = window.hasOwnProperty(REDUX_EXTENSION) 
const composedMiddleware = hasReduxExtension ?
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ) :
    compose(
        applyMiddleware(...middleware)
    )

    const store = createStore(
        rootReducer, 
        initialState, 
        composedMiddleware
    );

export default store;