import {
  MQTT_CONFIG,
  MQTT_CONNECTION_SUCCESS,
  LWT,
  MQTT_MESSAGE_ARRIVED,
  DEVICES_OFFLINE,
  DEVICES_ONLINE,
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

export function devicesOffline(messageIncome) {
  return {
    type: DEVICES_OFFLINE,
    data: messageIncome
  }
}

export function devicesOnline(message) {
  return {
    type: DEVICES_ONLINE,
    data: JSON.parse(message.toString())
  }
}

export function mqttDisconnect() {
  return {
    type: MQTT_DISCONNECT
  }
}