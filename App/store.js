import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

console.log ("IN STORE")

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(createLogger(), thunkMiddleware)))

export default store
