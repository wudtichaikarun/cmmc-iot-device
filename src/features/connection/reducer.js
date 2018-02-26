import {
  MQTT_CONFIG,
  MQTT_DISCONNECT,
  MQTT_CONNECTION_SUCCESS,
  MQTT_MESSAGE_ARRIVED,
  MQTT_FILTER_DEVICES_NAME,
  CHECKED_ONLINE,
  CHECKED_OFFLINE,
  DEVICES_ONLINE,
  DEVICES_OFFLINE,
  LWT
} from '../../types'

let initialState = {
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
      state.connection = false
      return {...state, connection: false }
    
    case MQTT_CONNECTION_SUCCESS:
      return { ...state, disconnect: 'connected', connection: true }

    case MQTT_MESSAGE_ARRIVED:
      if (state.filterDevices.length === 0) {
        let d = action.data.d
        let info = action.data.info
        let devices = state.devices
        let actionData = action.data

        // if (state.lwt[`in-${info.d}`].status === 0) {
        //   // actionData.classCardHeader = 'bg-disconnected'
        //   var cardHeaderStatus = 'disconnected'
        // } else {
        //   // actionData.classCardHeader = 'bg-connected'
        //   var cardHeaderStatus = 'connected'
        // }

        let arrayDevices = []

        devices[d.myName] = actionData

        Object.keys(devices).forEach( (key, idx) => {
          arrayDevices[idx] = devices[key]
        })
        
        return {...state, arrayDevices }

      } else {
        if (state.checkedOnline === true && state.checkedOffline === false) {
          let onlineOnly = []
          
          state.arrayDevices.forEach(device => {
            if (device.classCardHeader === 'connected') {
              onlineOnly.push(device)
            }
          })

          // state.arrayDevices = onlineOnly
          return {...state, arrayDevices: onlineOnly }
        }
        
        if (state.checkedOffline === true && state.checkedOnline === false) {
          // console.log('offline checked')
          let offlineOnly = []
          state.arrayDevices.forEach(device => {
            if (device.classCardHeader === 'card-header bg-secondary') {
              offlineOnly.push(device)
            }
          })
          // state.arrayDevices = offlineOnly
          return {...state, arrayDevices: offlineOnly }
        }

        if ((state.checkedOnline === false && state.checkedOffline === false) ||
          (state.checkedOnline === true && state.checkedOffline === true)) {
          // console.log('online unchecked, offline unchecked')
          state.arrayDevices.forEach((device, idx) => {
            if (device.d.myName === action.data.d.myName) {
              state.arrayDevices[idx] = action.data
            }
          })
          break

        }

      }
    
    case MQTT_FILTER_DEVICES_NAME:
      if (action.data) {
        const search = action.data
        let filterDevices = []

        Object.keys(state.devices).forEach(key => {
          let matchingKey = key.indexOf(search) !== -1
          if (matchingKey) {
            filterDevices.push(state.devices[key])
          }
        })

        // state.filterDevices = filterDevices
        // state.arrayDevices = filterDevices
        return {...state, filterDevices, arrayDevices: filterDevices }
      } else {
        // state.filterDevices = []
        return {...state, filterDevices: [] }
      }

    case CHECKED_ONLINE:
      // state.checkedOnline = action.data
      return {...state, checkedOnline: action.data }

    case CHECKED_OFFLINE:
      // state.checkedOffline = action.data
      return {...state, checkedOffline: action.data }

    case DEVICES_ONLINE:
      // if (state.devicesOnline[action.data.d.myName] === undefined) {
        let devicesOnline = []
        devicesOnline[action.data.d.myName] = action.data

        return {...state, devicesOnline }
      // }
      // return {...state, devicesOnline: [action.data.d.myName] = action.data}
   
    case DEVICES_OFFLINE:
      if (state.devicesOffline[action.data.d.myName] === undefined) {
        state.devicesOffline[action.data.d.myName] = action.data
      }
      return {...state, devicesOffline: [action.data.d.myName] = action.data}

    case LWT:
      state.lwt[`id-${action.data.id}`] = action.data
      break

      default:
      return state
  }
}