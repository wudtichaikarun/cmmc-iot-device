import {
  DEVICES_OFFLINE,
  DEVICES_ONLINE,
  MQTT_FILTER_DEVICES_NAME
} from '../../types'

export function devicesOffline(data) {
  return {
    type: DEVICES_OFFLINE,
    data
  }
}

export function devicesOnline(data) {
  return {
    type: DEVICES_ONLINE,
    // 
    data
  }
}

export function searchByName(deviceName) {
  return {
    rype: MQTT_FILTER_DEVICES_NAME,
    deviceName
  }
} 