import React from 'react'
import './Contact.css'
export const Contact = () => {

  return (
    <div className='contact-container' id='contact'>

        <h1>Let's Connect!</h1>
        <form action='#' autoComplete='on'>
            <label htmlFor='firstName'> Name* </label>
            <input 
            type='text' 
            id='firstName' 
            name='firstName' 
            required></input>

            <label htmlFor='lastName' >Last Name* </label>
            <input 
            type='text' 
            id='lastName' 
            name='lastName' 
            required ></input>

            <label htmlFor='email'>Email* </label>
            <input 
            type='email' 
            id='email' 
            name='email' 
            required></input>

            <label htmlFor='reason'>Reason: </label>
            <select id='reason'>
                <option value=''></option>
                <option value='Job Offer'>Job Offer</option>
                <option value='Freelance'>Freelance</option>
                <option value='Collaboration'>Collaboration</option>
                <option value='Other'>Other</option>
            </select>

            <label htmlFor='inquiry'>Additional Information*</label>
            <textarea 
            id='inquiry' 
            rows='10'
            name='inquiry' />            

            <input type='submit' value='Send' /> 
        </form>
    </div>
  )
}
