import React from 'react'
import { connect } from 'react-redux'
import { getDevices } from '../selectors'

const Popup = () => (
  <div className="popup" id="popup">

    <div className="popup__content">
      <div className="popup__left">
        <p> <span>ip :</span> 192.168.12.248 </p>
        <p> <span>heap :</span> 37504 </p>
        <p> <span>runtime :</span> LIGHT-SWITCH </p>
        <p> <span>millis :</span> 17171540 </p>
        <p> <span>prefix :</span> CMMC/ </p>
        <p> <span>mac :</span> 5c:cf:7f:09:98:4e </p>
        <p> <span>heap :</span> 37504 </p>
        <p> <span>runtime :</span> LIGHT-SWITCH </p>
        <p> <span>millis :</span> 17171540 </p>
        <p> <span>prefix :</span> CMMC/ </p>
        <p> <span>mac :</span> 5c:cf:7f:09:98:4e </p>
      </div>

      <div className="popup__right">
        <a href="#contents" class="popup__close">&times;</a>
        <p> <span>ip :</span> 192.168.12.248 </p>
        <p> <span>heap :</span> 37504 </p>
        <p> <span>runtime :</span> LIGHT-SWITCH </p>
        <p> <span>millis :</span> 17171540 </p>
        <p> <span>prefix :</span> CMMC/ </p>
        <p> <span>mac :</span> 5c:cf:7f:09:98:4e </p>
        <p> <span>heap :</span> 37504 </p>
        <p> <span>runtime :</span> LIGHT-SWITCH </p>
        <p> <span>millis :</span> 17171540 </p>
      </div>
    </div>

  </div>
)

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
              {/* <Modal key={device.info.id} device={device} /> */}
            </div>
        )
      )
    }
    <Popup  />
  </div>
)          

export default connect(
 state => ({
   devices: getDevices(state)
 })
)(ContentContainer)