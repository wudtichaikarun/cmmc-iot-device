import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import connectReducer from 'Features/connection/reducer'
import popupDevice from 'Features/ui/reducer'

export default combineReducers({
  form: formReducer,
  mqtt: connectReducer,
  popup: popupDevice
})