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

export function MQTT_Connect(mqttConfig) {

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
    setTimeout(() => {
      Store.dispatch(connectionSuccess())
    }, 1000)
 
  })

  client.on('message', function (topic, message, packet) {

      try {
        let messageIncome = JSON.parse(message.toString())
  
        if ( (messageIncome.status !== undefined) && (messageIncome.info !== undefined) ) {
          setTimeout(() => {
            Store.dispatch(lwt(messageIncome))
          }, 2000)
        }
        

          if ( (messageIncome.d !== undefined) && (messageIncome.info !== undefined) ) {
            messageIncome.d.timestamp = moment.now()

            setTimeout(() => {
              Store.dispatch(messageArrived(messageIncome))
            }, 4000)

              if (packet.retain) {
                /*messageIncome.classCardHeader = 'card-header bg-secondary'
                เหมือนทำอะไรซักอย่างเกี่ยวกับสี card
                  */
                setTimeout(() => {
                  Store.dispatch(devicesOffline(messageIncome))
                }, 6000)

              } else {
                /*messageIncome.classCardHeader = 'card-header bg-success'
                เหมือนทำอะไรซักอย่างเกี่ยวกับสี card
                  */
                 setTimeout(() => {
                  Store.dispatch(devicesOnline(message))
                }, 6000)
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