import React, { useEffect, useState } from 'react'
import 'Components/Contact/Contact.css'
import { FormInput } from 'Components/Contact/FormInput'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
const containerRef = useRef();
const modalRef = useRef();
const overlayRef = useRef();
const [isVisible, setVisibility] = useState(false);

useEffect(() => {
    const observer = new IntersectionObserver((entries => {
      const entry = entries[0];
  
    if(entry.isIntersecting){
      setVisibility(true);
      observer.unobserve(containerRef.current);
    }
    }));
  
    //observing skills container
      observer.observe(containerRef.current);
    
  },[containerRef])

    const [formValues, setValues] = useState({
        firstName:"",
        lastName:"",
        email:"",
        reason:"",
        inquiry:""
    });
    const [isFocused, setFocus] = useState(false); 
    const inputs = [
        {
            id:1,
            name:"firstName",
            type:"text",
            placeholder:"First Name",
            errorMessage:"First name length minimum is 2 and no special characters.",
            pattern: "^[A-Za-z]{2,25}$",
            label:"First Name *",
            required:true
        },
        {
            id:2,
            name:"lastName",
            type:"text",
            placeholder:"Last Name",
            errorMessage:"Last name length minimum is 2 and no special characters.",
            pattern: "^[A-Za-z]{3,25}$",
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

    let isValid = false;
    const onChange = (e) => {
        setValues({...formValues, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        
        //Sending Form to Gmail through EmailJS
        (function(){
            emailjs.init("9k_A3kB7nMVLYiJ6w");
        })();
        
        const serviceID = "service_wmvdhfq"
        const templateID = "template_xq5ohxl"

        var params = {
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            senderEmail: formValues.email,
            reason: formValues.reason,
            message: formValues.inquiry
        }

        emailjs.send(serviceID,templateID, params)
        .then(res => {
            modalRef.current.classList.add('openModal');
            overlayRef.current.classList.add('hide');
        })
        

        let inputsParents = [...document.getElementsByTagName('input')];
        inputsParents.map((inputField) => {
            inputField.setAttribute('focused',false);
        }); 

        setValues({
            firstName:"",
            lastName:"",
            email:"",
            reason:"",
            inquiry:""
        });
    }

    const handleFocus = (e) => {
        setFocus(true);
    }

    const closeModal = () => {
        modalRef.current.classList.remove("openModal");
        overlayRef.current.classList.remove('hide');
    }

  return (
    <>
    <div className={`contact-container ${isVisible ? 'slideY-animation' : ''} `} id='contact' ref={containerRef}>

        <h1>Let's Connect!</h1>
        <form action='#' autoComplete='on' onSubmit={handleSubmit}>

            {inputs.map((input) => (
                <FormInput key={input.id} {...input} value={formValues[input.name]} onChange={onChange}/>
            )
            )}

            <div className='formInput'>
                <label htmlFor='reason'>Reason * </label>
                <select 
                id='reason' 
                name="reason" 
                value={formValues.reason} 
                onChange={onChange}
                onBlur={handleFocus}
                isFocused={isFocused.toString()}
                required>
                    <option value=''></option>
                    <option value='Job Offer'>Job Offer</option>
                    <option value='Freelance'>Freelance</option>
                    <option value='Collaboration'>Collaboration</option>
                    <option value='Other'>Other</option>
                </select>
                <span>Please choose one item from the dropdown</span>
            </div>

            <div className='formInput'>
                <label htmlFor='inquiry'>Additional Information*</label>
                <textarea 
                id='inquiry' 
                rows='10'
                name='inquiry'
                value={formValues.inquiry}
                pattern="[A-Zaz]{5,250}$"
                minLength="25"
                onChange={onChange}/>
                <span> Must be minimum of 25 characters. </span>          
            </div>
            <input type='submit' value='Send'/>


        </form>
        <div className='overlay' ref={overlayRef}>
            <div className='popup' ref={modalRef}>
                <h2> Success <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon></h2>
                <p>Email has been sent! <br/> Expect a reply within 24 hours.</p>
                <button type='button' onClick={closeModal}> Close </button>
            </div>
        </div>
    </div>
    </>
  )
}
