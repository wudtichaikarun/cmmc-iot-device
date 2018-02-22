import {
  MQTT_CONFIG,
  MQTT_DISCONNECT
} from '../../types'

const initialState = {
  devices: [],
  arrayDevices: [],
  filterDevices: [],
  devicesOnline: [],
  devicesOffline: [],
  checkedOnline: false,
  checkedOffline: false,
  connection: false,
  disconnect: false,
  lwt: [],
  mqtt: {
    host: 'mqtt.cmmc.io',
    port: 9001,
    clientId: 'CMMC_' + Math.random().toString(16).substr(2, 8),
    username: '',
    password: '',
    topic: 'CMMC/#'
  }
}

export default (state = initialState, action) => {
  switch(action.type) {
    case MQTT_CONFIG:
      return action.configs

    case MQTT_DISCONNECT:
      return { connection: false } 

    default:
      return state
  }
}