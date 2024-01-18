import React, {useState } from 'react'
import 'Components/Contact/Contact.css'

export const FormInput = (props) => {
  const [isBlur, setBlur] = useState(false) //if has been clicked
  const [isFocus, setFocus] = useState(false)
  const [input, setInput] = useState('')
  const [validInput, setValidInput] = useState(false)
  const [hasError, setError] = useState(false)
  const {label, fillForm, id, pattern, errorMessage, value, checkForm, ...inputProps} = props

  const handleBlur = () => {
    setBlur(true);
    if(input === ""){
      setError(true);
    }else{
      setError(!validInput);
    }
    checkForm();
  }

  const handleChange = (e) => {
    setInput(e.target.value);
    setValidInput(pattern.test(input));
    console.log()
    fillForm(e);
  }

  return (
    <div className='formInput'>
        <label htmlFor={props.name}>{label}</label>
        <input
        {...inputProps}
        id={props.name}
        name={props.name}
        onChange={handleChange}
        onFocus={() => {setFocus(true)}}
        onBlur={handleBlur}
        value={value}/>
        {hasError ? <span tabIndex="0">{errorMessage}</span> : "" }
    </div>
  )
}
