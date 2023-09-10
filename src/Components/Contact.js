import React from 'react'
import './Contact.css'
import { useFormik } from 'formik'
import * as yup from 'yup'

export const Contact = () => {

    const userSchema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().email().required(),
        inquiry: yup.string().min(20).required(),
    })

    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          reason:'',
          inquiry:'',
        },
        onSubmit: values => {
            console.log('Form Values:', formik.values);
            const userValidation = userSchema.isValid(formik.values)
            console.log(userValidation);
        },
      });


  return (
    <div className='contact-container' id='contact'>

        <h1>Let's Connect!</h1>
        <form action='#' autoComplete='on' onSubmit={formik.handleSubmit}>
            <label htmlFor='firstName'> Name* </label>
            <input 
            type='text' 
            id='firstName' 
            name='firstName' 
            onChange={formik.handleChange} 
            value={formik.values.firstName} 
            required></input>

            <label htmlFor='lastName' >Last Name* </label>
            <input 
            type='text' 
            id='lastName' 
            name='lastName' 
            onChange={formik.handleChange} 
            value={formik.values.lastName} 
            required ></input>

            <label htmlFor='email'>Email* </label>
            <input 
            type='email' 
            id='email' 
            name='email' 
            onChange={formik.handleChange} 
            value={formik.values.email} 
            required></input>

            <label htmlFor='reason'>Reason: </label>
            <select id='reason' onChange={formik.handleChange}>
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
            name='inquiry' 
            onChange={formik.handleChange} 
            value={formik.values.inquiry} />            

            <input type='submit' value='Send' /> 
        </form>
    </div>
  )
}
