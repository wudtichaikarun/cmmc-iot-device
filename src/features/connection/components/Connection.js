import React from 'react'
import { connect } from 'react-redux'
import { getMqttConfig } from '../selectors'
import { createConection } from '../actions'
import ConnectionForm from './ConnectionForm'
import { MQTT_Connect } from 'Lib'

const CreateConnectionContainer = ({ mqtt, onConection }) => (
  <ConnectionForm 
    header='Wating for connect...' 
    initialValues={mqtt}
    onSubmit={onConection} />
)

export default connect(
    // map state to propcs
    state => ({
      mqtt: getMqttConfig(state)
    }) ,
    // map dispatch to props
    (dispatch, props) => ({
      onConection(formValue) {
        dispatch(createConection(formValue))
        //let next = dispatch
        MQTT_Connect(formValue)
        props.history.push('./contents')
      }
    })
 )(CreateConnectionContainer)