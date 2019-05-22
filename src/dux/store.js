import {createStore, applyMiddleware, combineReducers} from 'redux'

import promiseMiddleware from 'redux-promise-middleware'
import reducer from './reducer'

const rootReducer = combineReducers({
    gamePin:  reducer,
    username: reducer,
    avatar_url: reducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
