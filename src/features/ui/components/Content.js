import React from 'react'
import { connect } from 'react-redux'
import { getDevices } from '../selectors'

const Device = ({device}) => (
  <div className='card'>
    <p>name: {device.name} </p>
    <p>massage: {device.msg} </p>
  </div>
)

const ContentContainer = ({devices}) => (
  <div className='contents'>
    {
      devices.map(
        device => 
          <Device key={device.id} device={device} />
      )
    }
  </div>
)          

export default connect(
 state => ({
   devices: getDevices(state)
 })
)(ContentContainer)