import {
  MQTT_CONFIG,
  MQTT_DISCONNECT,
  MQTT_CONNECTION_SUCCESS
} from '../../types'

export function createConection(data) {
  return {
    type: MQTT_CONFIG,
    configs: {
      data
    }
  }
}

export function connectionSuccess() {
  return {
    type: MQTT_CONNECTION_SUCCESS
  }
}

export function mqttDisconnect() {
  return {
    type: MQTT_DISCONNECT
  }
}

