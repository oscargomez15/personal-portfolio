import React, { useState } from 'react'
import './Contact.css'
import { FormInput } from './FormInput'


export const Contact = () => {
    const [formValues, setValues] = useState({
        firstName:"",
        lastName:"",
        email:"",
    });

    const inputs = [
        {
            id:1,
            name:"firstName",
            type:"text",
            placeholder:"First Name",
            errorMessage:"First name length minimum is 2 and no special characters.",
            label:"First Name *"
        },
        {
            id:2,
            name:"lastName",
            type:"text",
            placeholder:"Last Name",
            errorMessage:"Last name length minimum is 2 and no special characters.",
            label:"Last Name *"
        },
        {
            id:3,
            name:"email",
            type:"email",
            placeholder:"Email",
            errorMessage:"Please enter a valid email.",
            label:"Email *"
        }

    ]

    const onChange = (e) => {
        setValues({...formValues, [e.target.name]: e.target.value})
        console.log(e.target.name);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div className='contact-container' id='contact'>

        <h1>Let's Connect!</h1>
        <form action='#' autoComplete='on' onSubmit={handleSubmit}>

            {inputs.map((input) => (
                <FormInput key={input.id} {...input} value={formValues[input.name]} onChange={onChange}/>
            )
            )}

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
            name='inquiry'/>            

            <input type='submit' value='Send' /> 
        </form>
    </div>
  )
}
