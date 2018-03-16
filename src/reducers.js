import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import mqtt_configs from 'Features/connection/reducer'
import popupDevice from 'Features/ui/reducer'
import mqtt_contents from 'Features/contents/reducer'

export default combineReducers({
  form: formReducer,
  mqtt_configs,
  popup: popupDevice,
  mqtt_contents
})