import React from 'react'
import { connect } from 'react-redux'
import { getDevices } from '../selectors'
import PopupContainer from './Popup'

const ContentContainer = ({devices}) => (
  <div className='contents' id='contents'>
    {
      devices.map(
        device => (
            <div>
              <Device key={device.info.id} device={device} />
              {/* <Modal key={device.info.id} device={device} /> */}
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