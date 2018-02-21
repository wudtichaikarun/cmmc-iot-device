import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from '../../../store'
import App from './App'
import DevTools from 'Features/ui/components/DevTools'

const store = configureStore()

export default () => (
  <Provider store={store}>
    <div>
      <Router>
        <App />
      </Router>
      <DevTools />
    </div>
  </Provider>
)