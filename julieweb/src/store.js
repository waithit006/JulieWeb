import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

//TODO: [Refactor] add new composeEnhancers for checking environment before run
const composeEnhancers = (process.env.NODE_ENV === 'development') ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    compose : compose;

export default createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
