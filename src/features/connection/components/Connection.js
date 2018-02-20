import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'recompose'
import ConnectionForm from './ConnectionForm'
import { getMqttConfig } from '../selectors'
import { createConection } from '../actions'

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
      createConection(value) {
        dispatch(createConection(value))
        // MQTT_Connect(this.state.mqtt) ???
        props.history.push('./contents')
      }
    })
  )
)(CreateConnectionContainer)