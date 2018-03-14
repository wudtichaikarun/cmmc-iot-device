import {
  DEVICES_OFFLINE,
  DEVICES_ONLINE,
  // MQTT_DISCONNECT
} from '../../types'

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