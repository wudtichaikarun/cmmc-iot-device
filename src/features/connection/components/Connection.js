import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'recompose'
import ConnectionForm from './ConnectionForm'
import { createConection } from '../actions'

class CreateConnectionContainer extends PureComponent {
  render() {
    return (
      <ConnectionForm 
        header='Wating for connect...' 
        onSubmit={this.props.createConection} />
    )
  }
}

export default compose(
  withRouter,
  connect(
    // map state to props
    null,
    // map dispatch to props
    (dispatch, props) => ({
      createConection(value) {
        dispatch(createConection(value))
        // MQTT_Connect(this.state.mqtt) ???
        // props.history.push('./contents')
      }
    })
  )
)(CreateConnectionContainer)