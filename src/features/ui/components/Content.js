import React from 'react'
import { connect } from 'react-redux'
import { getDevices } from '../selectors'

const Device = ({device}) => (
  <div className='MqttCard'>
    <div className={'MqttCard__header '+device.classCardHeader}> {device.d.myName} </div>
    <div className='MqttCard__content'>
      <p> Name: {device.d.myName }</p>
      <p> Mac: {device.info.mac} </p>
    </div>
    <div className='MqttCard__footer'>footer</div>
  </div>
)

const ContentContainer = ({devices}) => (
  <div className='contents'>
    {
      devices.map(
        device => 
          <Device key={device.info.id} device={device} />
      )
    }
  </div>
)          

export default connect(
 state => ({
   devices: getDevices(state)
 })
)(ContentContainer)