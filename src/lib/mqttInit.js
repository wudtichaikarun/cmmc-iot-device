import mqtt from 'mqtt'
import moment from "moment"
import "moment-timezone"
import {
  connectionSuccess,
  lwt,
  messageArrived,
  devicesOffline,
  devicesOnline,
  mqttDisconnect
} from '../features/connection/actions'


moment.locale('th')
window.MQTTGlobal = ''

export function MQTT_Connect(dispatch, mqttConfig) {

  console.log("-----MQTT_connect initial value", mqttConfig)
  
  let options = {
    clientId: mqttConfig.clientId,
    clean: true,
    port: parseInt(mqttConfig.port, 0)
  }

  let client = mqtt.connect('mqtt://' + mqttConfig.host, options)

  client.on('connect', function () {
    client.subscribe(mqttConfig.topic)
    client.subscribe('CMMC/+/lwt')
    window.MQTTGlobal = client

    dispatch(connectionSuccess())
  })

  client.on('message', function (topic, message, packet) {
    try {
      let messageIncome = JSON.parse(message.toString())

      if ( (messageIncome.status !== undefined) && (messageIncome.info !== undefined) ) {
        dispatch(lwt(messageIncome))
      }

      if ( (messageIncome.d !== undefined) && (messageIncome.info !== undefined) ) {
        messageIncome.d.timestamp = moment.now()
        dispatch(messageArrived(messageIncome))
        
        if (packet.retain) {
          /*messageIncome.classCardHeader = 'card-header bg-secondary'
          เหมือนทำอะไรซักอย่างเกี่ยวกับสี card
            */
          dispatch(devicesOffline(messageIncome))
        } else {
          /*messageIncome.classCardHeader = 'card-header bg-success'
          เหมือนทำอะไรซักอย่างเกี่ยวกับสี card
            */
          dispatch(devicesOnline(message))
        }
      }

    } catch (e) {
      console.log('client on message error', e)
    }
  })

}

export function MQTT_Reconnect () {
  window.MQTTGlobal.reconnect()
}

export function MQTT_Disconnect (dispatch) {
  window.MQTTGlobal.end()
  dispatch(mqttDisconnect())
}

export function MQTT_Publish (topic, value) {
  window.MQTTGlobal.publish(topic, value)
}