import React from 'react'

export const FormInput = () => {
  return (
    <div className='formInput'>
        <label htmlFor={props.name}></label>
        <input type={props.input} placeholder={props.placeholder} ></input>
    </div>
  )
}
