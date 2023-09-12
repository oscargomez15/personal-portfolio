import React from 'react'
import './Contact.css'

export const FormInput = (props) => {

  const {label, onChange, id, errorMessage, ...inputProps} = props;

  return (
    <div className='formInput'>
        <label htmlFor={props.name}>{label}</label>
        <input {...inputProps} onChange={onChange}></input>
        <span>{errorMessage}</span>
    </div>
  )
}
