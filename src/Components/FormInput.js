import React, { useState } from 'react'
import './Contact.css'

export const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const {label, onChange, id, errorMessage, ...inputProps} = props;

  const handleFocus = (e) => {
    setFocused(true);
  }

  return (
    <div className='formInput'>
        <label htmlFor={props.name}>{label}</label>
        <input 
        {...inputProps} 
        onChange={onChange} 
        onBlur={handleFocus} 
        focused={focused.toString()}/>
        <span>{errorMessage}</span>
    </div>
  )
}
