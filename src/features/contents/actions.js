import {
  LWT,
  MQTT_MESSAGE_ARRIVED,
} from '../../types'

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

