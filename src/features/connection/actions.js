import {
  MQTT_CONFIG,
  MQTT_CONNECTION_SUCCESS,
  LWT,
  MQTT_MESSAGE_ARRIVED,
  MQTT_DISCONNECT
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

export function lwt(messageInconme) {
  return {
    type: LWT,
    data: messageInconme
  }
}

export function messageArrived(messageIncome) {
  return {
    type: MQTT_MESSAGE_ARRIVED,
    data: messageIncome
  }
}

export function mqttDisconnect() {
  return {
    type: MQTT_DISCONNECT
  }
}