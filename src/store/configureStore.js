import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from '../reducers'

export default function() {
  const middlewares = [
    logger
  ]

  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  )

  if (module.hot) {
    module.hot.accept('../reducers', () =>
     store.replaceReducer(rootReducer)
    )
  }

  return store
}

