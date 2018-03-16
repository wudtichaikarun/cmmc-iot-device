// Action types
import {
  // MQTT_MESSAGE_ARRIVED,
  CHECKED_ONLINE,
  CHECKED_OFFLINE,
  DEVICES_ONLINE,
  DEVICES_OFFLINE,
  // LWT,
  // MQTT_FILTER_DEVICES_NAME,
} from '../../types'
// Mock data
import { mockRes } from '../../mockRes'

const initialState = {
  devices: mockRes,
  lwt:[]
}

export default (state= initialState, action) => {
  switch(action.type) {
    /*case MQTT_FILTER_DEVICES_NAME:
      if (action.deviceName) {
        // const search = action.data
        const deviceName = action.deviceName
        // let filterDevices = []

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
      }*/

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

    // case LWT:
    //   state.lwt[`id-${action.data.id}`] = action.data
    //   break
    
    default: 
      return state
  }
}