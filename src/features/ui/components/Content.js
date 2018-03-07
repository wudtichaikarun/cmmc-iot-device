import React from 'react'
import { connect } from 'react-redux'
import { getDevices } from '../selectors'
import PopupContainer from './Popup'

const Device = ({device}) => (	
  <div className='MqttCard'>	
    <div className={'MqttCard__header '+device.device_status}> {device.d.myName} </div>	
    <div className='MqttCard__content'>	
      <p> <span>ip :</span> {device.info.ip }</p>	
      <p> <span>heap :</span> {device.d.heap} </p>	
      <p> <span>runtime :</span> {device.d.myName }</p>	
      <p> <span>millis :</span> {device.d.millis} </p>	
      <p> <span>prefix :</span> {device.info.prefix }</p>	
      <p> <span>mac :</span> {device.info.mac} </p>	
    </div>	
    <div className='MqttCard__footer'>	
      <a href='#popup' className='btn-text'>More Info.</a>	
    </div>	
  </div>	
)

const ContentContainer = ({devices}) => (
  <div className='contents' id='contents'>
    {
      devices.map(
        device => (
            <div>
              <Device key={device.info.id} device={device} />
            </div>
        )
      )
    }
    <PopupContainer  />
  </div>
)          

export default connect(
 state => ({
   devices: getDevices(state)
 })
)(ContentContainer)