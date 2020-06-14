import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import legislators from './legislator'
import activeLegislator from './active-legislator'

const reducer = combineReducers({user, legislators, activeLegislator})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store
export * from './user'
export * from './legislator'
export * from './active-legislator'
