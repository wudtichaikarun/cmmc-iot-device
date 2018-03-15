import React from 'react'
import { connect } from 'react-redux'
import { getDevices } from '../selectors'
import PopupContainer from './Popup'

const Device = ({device}) => {
  const {d, info} = device
  
  return(
    <div className='MqttCard'>	
      <div className={'MqttCard__header '+device.device_status}> {device.d.myName} </div>	
      <div className='MqttCard__content'>	
        <p> <span>ip :</span> {info.ip }</p>	
        <p> <span>heap :</span> {d.heap} </p>	
        <p> <span>runtime :</span> {d.myName }</p>	
        <p> <span>millis :</span> {d.millis} </p>	
        <p> <span>prefix :</span> {info.prefix }</p>	
        <p> <span>mac :</span> {info.mac} </p>	
      </div>	
      <div className='MqttCard__footer'>	
        <a href='#popup' className='btn-text'>More Info.</a>	
      </div>	
    </div>
  )
}

const ContentContainer = ({devices}) => (
  <div className='contents' id='contents'>
    {
      devices.map(
        device => (
          <Device key={device.info.id} device={device} />
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