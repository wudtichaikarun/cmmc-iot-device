import React from 'react'
import { connect } from 'react-redux'
import { getDevices } from '../selectors'

const Device = (data) => (
  <div>
    <p>ip: </p>
    <p>heap:</p>
  </div>
)

const ContentContainer = (devices) => (
  <div>
    {
      devices.map(
        device => 
          <Device  data={device} />
      )
    }
  </div>
)          

export default connect(
 state => ({
   devices: ['romantic1', 'romantic2']
 })
)(ContentContainer)