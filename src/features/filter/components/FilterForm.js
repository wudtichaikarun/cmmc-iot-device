import React from 'react'
import { Field, reduxForm } from 'redux-form'
import logo from 'Theme/assets/cmmc-logo.png'

const renderField = ({
  input,
  id,
  name,
  label,
  type,
  element
}) => (
  <div>
  {
    type === 'text'
    ? <input {...input} type={type} placeholder={label} className='search__input' /> 
    : <div className='form__radio-group'>
        <input {...input} type={type} className='form__radio-input' name={name} id={id} value={id} />
        <label htmlFor={id} className='form__radio-label'>
          <span className={'form__radio-btn form__radio-btn--'+id}></span>
          {label}
        </label>
      </div>
  }
  </div>
)

const FilterForm = () => (
  <div className='header-item'>
    <img className='header-item__logo logo' src={logo} alt='' />

    <div className='header-item__search search'>
      <Field
        component={renderField}
        type='text'
        name='search'
        label='Filter device by name' />
    </div>
    
    <div className='header-item__radio'>
      <Field
        component={renderField}
        type='radio'
        name='filter'
        id='all'
        label='All' />
      <Field
        component={renderField}
        type='radio'
        name='flter'
        id='online'
        label='Online' />
      <Field
        component={renderField}
        type='radio'
        name='filter'
        id='ofline'
        label='Ofline' />
    </div>
    
  </div>
)

export default reduxForm({
  form: 'filter'
})(FilterForm)