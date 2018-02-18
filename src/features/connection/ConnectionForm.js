import React from 'react'
import { Field, reduxForm } from 'redux-form'
import styles from './ConnectionForm.scss'
import classNames from 'classnames/bind'

const renderField = ({
  input,
  label,
  type
  // meta: { touched, error }
}) => (
  <div className={styles['form__group']}>
    <label className={styles['form__label']}>{label}</label>
    {
     <input {...input} type={type} placeholder={label} className={styles['form__input']} required/>
    }
    {
      // touched && error <div className={styles.error}>{error}</div>
    }
  </div>
)

let cx = classNames.bind(styles)
let btn_green = cx('btn', 'btn--green')

const ConnectionForm = () => (
  <section className='col-12 col-md-3'>
    <div className='form-group'>
      <div className='card'>
        <div className={styles['card-body']}>
          <form>
            <h6 className='text-right'>Waiting for connection</h6>

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
              <button className={btn_green} type='submit'>connect</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  </section>
)

/*function validateForm(value) {
  let errors = {}

  if(!formValueSelector.host) errors.host = 'Required.'

}*/

export default reduxForm({
  form: 'connection',
  // validateForm
})(ConnectionForm) 