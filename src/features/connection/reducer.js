import {
  MQTT_CONFIG,
  MQTT_DISCONNECT,
  MQTT_CONNECTION_SUCCESS,
} from '../../types'

let initialState = {
  host: 'mqtt.cmmc.io',
  port: 9001,
  clientId: 'CMMC_' + Math.random().toString(16).substr(2, 8),
  username: '',
  password: '',
  topic: 'CMMC/#'
}

export default (state = initialState, action) => {
  switch(action.type) {
    case MQTT_CONFIG:
      return action.configs

    case MQTT_DISCONNECT:
      state.connection = false
      return {...state, connection: false }
    
    case MQTT_CONNECTION_SUCCESS:
      return { ...state, disconnect: 'connected', connection: true }

    default:
      return state
  }
}