import React, { useState } from 'react'
import './Contact.css'
import { FormInput } from './FormInput'


export const Contact = () => {
    const [formValues, setValues] = useState({
        firstName:"",
        lastName:"",
        email:"",
    });

    const [isFocused, setFocus] = useState(false); 

    const inputs = [
        {
            id:1,
            name:"firstName",
            type:"text",
            placeholder:"First Name",
            errorMessage:"First name length minimum is 2 and no special characters.",
            pattern: "^[A-Za-z]{2,16}$",
            label:"First Name *",
            required:true
        },
        {
            id:2,
            name:"lastName",
            type:"text",
            placeholder:"Last Name",
            errorMessage:"Last name length minimum is 2 and no special characters.",
            pattern: "^[A-Za-z]{3,16}$",
            label:"Last Name *",
            required:true
        },
        {
            id:3,
            name:"email",
            type:"email",
            placeholder:"Email",
            errorMessage:"Please enter a valid email.",
            label:"Email *",
            required: true
        }

    ]

    const onChange = (e) => {
        setValues({...formValues, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleFocus = (e) => {
        setFocus(true);
        console.log("Hey you clicked and exit the text area.");
    }

  return (
    <div className='contact-container' id='contact'>

        <h1>Let's Connect!</h1>
        <form action='#' autoComplete='on' onSubmit={handleSubmit}>

            {inputs.map((input) => (
                <FormInput key={input.id} {...input} value={formValues[input.name]} onChange={onChange}/>
            )
            )}

            <label htmlFor='reason'>Reason * </label>
            <select id='reason' required>
                <option value=''></option>
                <option value='Job Offer'>Job Offer</option>
                <option value='Freelance'>Freelance</option>
                <option value='Collaboration'>Collaboration</option>
                <option value='Other'>Other</option>
            </select>
            <div className='formInput'>
                <label htmlFor='inquiry'>Additional Information*</label>
                <textarea 
                id='inquiry' 
                rows='10'
                name='inquiry'
                pattern="[A-Zaz]{5,250}$"
                minLength={"25"}
                onBlur={handleFocus}
                isFocused={isFocused.toString()}/>
                <span> Must be minimum of 25 characters. </span>          
            </div>
            <input type='submit' value='Send' /> 
        </form>
    </div>
  )
}
