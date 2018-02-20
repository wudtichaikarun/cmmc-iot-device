// import mqtt from 'mqtt'
import moment from "moment"
import "moment-timezone"
// import {
//   MQTT_CONNECTION_SUCCESS,
//   MQTT_MESSAGE_ARRIVED,
//   DEVICES_OFFLINE,
//   DEVICES_ONLINE,
//   MQTT_DISCONNECT
// } from '../types'

moment.locale('th')

export function MQTT_Connect(dispatch, mqttConfig) {

  console.log("-----MQTT_connect initial value", mqttConfig.host)
  
  // let options = {
  //   clientId: init.clientId,
  //   clean: true,
  //   port: parseInt(init.port, 0)
  // }

  // let client = mqtt.connect('mqtt://' + init.host, options)
}