import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import autoReducer from './ducks/reducers/AutoReducer.js'

const reducer = combineReducers({
  autos: autoReducer,
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store