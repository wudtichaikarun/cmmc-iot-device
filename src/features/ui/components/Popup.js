import React from 'react'
import { getPopupDevice } from '../selectors'
import { connect } from 'react-redux'

const Popup = ({ device }) => (
  <div className="popup" id="popup">

    <div className="popup__content">
      <div className="popup__content--left">
        <p className='popup__content--header'><span>device data</span></p>
        {
          Object.entries(device.d).map(([key, value]) => 
            <p> <span>{key} :</span> {value} </p>  
          )
        }
      </div>

      <div className="popup__content--right">
        <a href="#contents" className="popup__close">&times;</a>
        <p className='popup__content--header'><span>device informations</span></p>
        {
          Object.entries(device.info).map(([key, value]) => 
            <p> <span>{key} :</span> {value} </p>  
          )
        }
      </div>
    </div>

  </div>
)

const PopupContainer = ({device}) => (
  <Popup device={device} />
) 

export default connect(
  state => ({
    device: getPopupDevice(state)
  })
)(PopupContainer)