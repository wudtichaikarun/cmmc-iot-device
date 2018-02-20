import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'recompose'
import { getMqttConfig } from '../selectors'
import { createConection } from '../actions'
import ConnectionForm from './ConnectionForm'
// import { MQTT_Connect } from 'Lib'

class CreateConnectionContainer extends PureComponent {
  render() {
    return (
      <ConnectionForm 
        header='Wating for connect...' 
        initialValues={this.props.mqtt}
        onSubmit={this.props.createConection} />
    )
  }
}

export default compose(
  withRouter,
  connect(
    // map state to props
    state => ({
      mqtt: getMqttConfig(state)
    }) ,
    // map dispatch to props
    (dispatch, props) => ({
      createConection(formValue) {
        dispatch(createConection(formValue))
        //let next = dispatch
        //  MQTT_Connect(dispatch, formValue)
        props.history.push('./contents')
      }
    })
  )
)(CreateConnectionContainer)