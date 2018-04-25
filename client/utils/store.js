import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducer'

const initialState = {
  shows: []
}

const store = createStore(
  reducer(initialState),
  initialState,
  composeWithDevTools(applyMiddleware(logger))
)

export default store
