import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import connectReducer from 'Features/connection/reducer'

export default combineReducers({
  form: formReducer,
  mqttConfig: connectReducer
})