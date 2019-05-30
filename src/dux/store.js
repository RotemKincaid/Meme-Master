import {createStore, applyMiddleware, combineReducers} from 'redux'

import promiseMiddleware from 'redux-promise-middleware'
import reducer from './reducer'

const rootReducer = combineReducers({
    gamePin:  reducer,
    username: reducer,
    gameObject: reducer,
    socket: reducer,
    creator: reducer,
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
