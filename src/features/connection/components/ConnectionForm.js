import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
// import classNames from 'classnames/bind'

const renderField = ({
  input,
  label,
  type,
  // meta: { touched, error }
}) => (
  <div className='form__group'>
    <label className='form__label'>{label}</label>
    {
     <input {...input} type={type} placeholder={label} className='form__input' required/>
    }
    {
      // touched && error && <div className={styles.error}>{error}</div>
    }
  </div>
)

// let cx = classNames.bind(styles)
// let btn_green = cx('btn', 'btn--green')

const ConnectionForm = ({header, handleSubmit}) => (
  <section className='col-12 col-md-3'>
    <div className='form-group'>
      <div className='card'>
        <div className='card-body'>
          <form>
            <h3 className='text-right'>{header}</h3>

            <Field
              component={renderField}
              type='text'
              name='host'
              label='Host'/>
            <Field
              component={renderField}
              type='text'
              name='port'
              label='Port'/>
            <Field
              component={renderField}
              type='text'
              name='clientId'
              label='ClientID'/>
            <Field
              component={renderField}
              type='text'
              name='username'
              label='Username'/>
            <Field
              component={renderField}
              type='text'
              name='password'
              label='Password'/>
            <Field
              component={renderField}
              type='text'
              name='topic'
              label='Topic'/>

            <div>
              <button className='btn btn--green' type='submit' onClick={handleSubmit} >connect</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  </section>
)

ConnectionForm.propTypes = {
  header: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

// function validateForm(values) {
//   let errors = {}

//   if(!values.host) errors.host = 'Required.'

// }

export default reduxForm({
  form: 'connection',
  // validateForm
})(ConnectionForm) 