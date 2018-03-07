import mqtt from 'mqtt'
import { configureStore } from 'Store'
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

const Store = configureStore()
moment.locale('th')
window.MQTTGlobal = ''

export function MQTT_Connect(initial) {

  let options = {
    clientId: initial.clientId,
    clean: true,
    port: parseInt(initial.port, 0)
  }

  let client = mqtt.connect('mqtt://' + initial.host, options)

  client.on('connect', function () {
    client.subscribe(initial.topic)
    client.subscribe('CMMC/+/lwt')
    window.MQTTGlobal = client
    Store.dispatch(connectionSuccess())
 
  })

  client.on('message', function (topic, message, packet) {

      try {
        let messageIncome = JSON.parse(message.toString())
  
        if ( (messageIncome.status !== undefined) && (messageIncome.info !== undefined) ) {
          Store.dispatch(lwt(messageIncome))
        }
        

          if ( (messageIncome.d !== undefined) && (messageIncome.info !== undefined) ) {
            messageIncome.d.timestamp = moment.now()

            Store.dispatch(messageArrived(messageIncome))

            if (packet.retain) {
              /*messageIncome.classCardHeader = 'card-header bg-secondary'
              เหมือนทำอะไรซักอย่างเกี่ยวกับสี card
                */
              Store.dispatch(devicesOffline(messageIncome))

            } else {
              /*messageIncome.classCardHeader = 'card-header bg-success'
              เหมือนทำอะไรซักอย่างเกี่ยวกับสี card
                */
              Store.dispatch(devicesOnline(message))
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

export function MQTT_Disconnect () {
  window.MQTTGlobal.end()
  Store.dispatch(mqttDisconnect())
}

export function MQTT_Publish (topic, value) {
  window.MQTTGlobal.publish(topic, value)
}