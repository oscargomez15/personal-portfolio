import React, {useEffect, useState } from 'react'
import 'Components/Contact/Contact.css'
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import axios from 'axios';
import LoadingIcons from 'react-loading-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws } from '@fortawesome/free-brands-svg-icons';

export const Contact = () => {
const [isLoading, setIsLoading] = useState(false);
const defaultForm = {
    fname:"",
    lname:"",
    email:"",
    message:""
}

const contactRef = useRef();
const contactIsInView = useInView(contactRef,{amount:0.2});
const [form, setForm] = useState({
    fname:"",
    lname:"",
    email:"",
    message:""
})

const handleChange = (e) => {
    setForm( (prev) => ({
        ...prev,
        [e.target.name] : e.target.value
    }))
}

const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        setIsLoading(true);
        await axios.post('https://er4js3177f.execute-api.us-east-1.amazonaws.com/production/sendForm', form);
        setIsLoading(false);
        clearForm();
    }catch(err){
        console.error('could not establish a connection with the backend', err);
    }
}

const clearForm = () => {
    setForm(defaultForm);
}

  return (
    <section id='contact'>
        <motion.article className='content'
        ref={contactRef}
        animate={{opacity: contactIsInView ? 1 : 0 }}>
            <div className="contact-heading">
                <h1 className='section-heading'>Contact</h1>
                <h3 className='section-subheading'>Powered by <FontAwesomeIcon icon={faAws}/></h3>
            </div>
            <form action="submit" onSubmit={handleSubmit}>
                <div className="field-container">
                    <label htmlFor="fname"> First Name </label>
                    <input type="text" name="fname" id="fname" value={form.fname} onChange={handleChange}/>
                </div>

                <div className="field-container">
                    <label htmlFor="lname"> Last Name </label>
                    <input type="text" name="lname" id="lname" value={form.lname} onChange={handleChange}/>
                </div>

                <div className="field-container">
                    <label htmlFor="email"> Email </label>
                    <input type="text" name="email" id="email" value={form.email} onChange={handleChange}/>
                </div>

                <div className="field-container">
                    <label htmlFor="message">Message</label>
                    <textarea rows="5" id='message' name='message' value={form.message} onChange={handleChange} />
                </div>

                <motion.button
                className='form-send'
                animate={{backgroundColor: isLoading ? "#585858" : "",paddingInline: isLoading ? '2px' : ''}}
                whileHover={{opacity:0.8, cursor:"pointer"}}
                transition={{duration:.2, delay:0}}> {isLoading ? <div className="loading-animation"> <LoadingIcons.Bars/></div> : "Send"} </motion.button>
            </form>
        </motion.article>
    </section>
  )
}
