import {
  MQTT_CONFIG
} from '../../types'

export function createConection(data) {
  return {
    type: MQTT_CONFIG,
    configs: {
      data
    }
  }
}