import { createStore, applyMiddleware, compose} from 'redux'
import logger from 'redux-logger'
import rootReducer from '../reducers'
import DevTools from '../features/ui/components/DevTools'

export default function() {
  const middlewares = [
    logger
  ]

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...middlewares),
      DevTools.instrument()
    )
  )

  if (module.hot) {
    module.hot.accept('../reducers', () =>
     store.replaceReducer(rootReducer)
    )
  }

  return store
}

