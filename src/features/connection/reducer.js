import {
  MQTT_CONFIG
} from '../../types'

const initialState = {
  mqtt: {
    host: 'mqtt.cmmc.io',
    port: 9001,
    clientId: 'CMMC_' + Math.random().toString(16).substr(2, 8),
    username: '',
    password: '',
    topic: 'CMMC/#'
  },
  connection: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case MQTT_CONFIG:
      return action.configs
    default:
      return state
  }
}