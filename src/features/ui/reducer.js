
import {
  POPUP_DEVICE
} from '../../types'

const initialStale = {
  "device_status": "online",
  "info":{  
    "ssid":"ampere",
    "flash_size":4194304,
    "flash_id":"1640a1",
    "chip_id":"9984e",
    "sdk":"2.0.0(656edbf)",
    "mac":"5c:cf:7f:09:98:4e",
    "id":"628814",
    "client_id":"628814",
    "device_id":"9984e",
    "prefix":"CMMC/",
    "ip":"192.168.12.248",
    "version":"v1.0.4"
  },
  "d":{  
    "myName":"LIGHT-SWITCH",
    "millis":17171540,
    "relayState":1,
    "updateInterval":1000,
    "btnState":1,
    "heap":37504,
    "rssi":-52,
    "counter":17118,
    "subscription":1
  }
}


export default (state = initialStale, action) => {
  switch(action.type) {
    case POPUP_DEVICE:
      return state
    default:
      return state
  }
}