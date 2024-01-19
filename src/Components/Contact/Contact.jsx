import React, {useEffect, useState } from 'react'
import 'Components/Contact/Contact.css'
import { FormInput } from 'Components/Contact/FormInput'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Lottie from 'lottie-react';
import sentAnimation from '../../Assets/sentAnimation';

export const Contact = () => {
const containerRef = useRef();
const overlayRef = useRef();
const lottieRef = useRef();

    const [formValues, setValues] = useState({
        firstName:"",
        lastName:"",
        email:"",
        reason:"",
        inquiry:""
    });
    const [isSelectBlur, setSelectBlur] = useState(false);
    const [isTextAreaBlur, setTextAreaBlur] = useState(false);
    const [isFormValid, setFormValid] = useState(false);
    const [isModalOpen, setModal] = useState(false);


    const inputs = [
        {
            id:1,
            name:"firstName",
            type:"text",
            errorMessage:"First name length minimum is 2 and no special characters.",
            pattern: /^[A-Za-z]{2,25}$/,
            label:"First Name",
            required:true
        },
        {
            id:2,
            name:"lastName",
            type:"text",
            errorMessage:"Last name length minimum is 2 and no special characters.",
            pattern: /^[A-Za-z]{3,25}$/,
            label:"Last Name",
            required:true
        },
        {
            id:3,
            name:"email",
            type:"email",
            errorMessage:"Please enter a valid email.",
            pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            label:"Email",
            required: true
        }
    ]

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
        })
        openModal();
        resetForm();
    }

    const fillForm = (e) => {
        setValues({...formValues, [e.target.name]: e.target.value});
    }

    const openModal = () => {
        overlayRef.current.classList.remove('hide');
        lottieRef.current.play();
        setModal(!isModalOpen);
    }

    const closeModal = () => {
        overlayRef.current.classList.add('hide');
        lottieRef.current.goToAndStop(1,0);
        setModal(!isModalOpen);
    }

    const resetForm = () => {
        setValues({
            firstName:"",
            lastName:"",
            email:"",
            reason:"",
            inquiry:""
        });
        setTextAreaBlur(false)
        setSelectBlur(false)
    }

    useEffect(() => {
        if(isModalOpen){
            document.body.style.overflow = 'hidden';
            console.log("Modal has been opened");
        }else{
            document.body.style.overflow = 'unset';

            console.log("Modal has been closed");
        }
    },[isModalOpen])

    const checkFormValues = () => {
        //storing all inputs validity to then use AND in conjunction to determine if the whole form is valid
        //if one input returns false, then the it should return false
        let formValidityArray = []
        Object.keys(formValues).map((key, value) => {
            if(formValues[key].length < 2){
                formValidityArray.push(false);
                return
            }else{
                formValidityArray.push(true);
            }
        })

        let checkArray = (element) => element.every (v=> v === true);
        setFormValid(checkArray(formValidityArray));
    }

  return (
    <section className='contact-wrapper ' id='contact'>
    <div className='contact-container fade-in-effect' id='contact' ref={containerRef}>

        <h2 className='secondary-heading'>Let's Connect!</h2>
        <p className='sub-heading'>Fill out the form below to reach me out about any collaboration, employment offer, or any other topic you want to discuss.  </p>
        <form action='#' onSubmit={handleSubmit}>

            {inputs.map((input) => (
                <FormInput key={input.id} pattern={input.pattern} {...input} value={formValues[input.name]} fillForm={fillForm} checkForm={checkFormValues} />
            )
            )}

            <div className='formInput'>
                <label htmlFor='reason'>Reason</label>
                <select
                name='reason'
                onChange={fillForm}
                value={formValues.reason}
                onBlur={() => {setSelectBlur(true)
                checkFormValues()}}>
                    <option value=""></option>
                    <option value='Job Offer'>Job Offer</option>
                    <option value='Freelance'>Freelance</option>
                    <option value='Collaboration'>Collaboration</option>
                    <option value='Other'>Other</option>
                </select>
                {(isSelectBlur && formValues.reason === "") ? <span tabIndex="0">Please choose one item from the dropdown</span> : ""}
            </div>

            <div className='formInput'>
                <label htmlFor='inquiry'>Additional Information</label>
                <textarea
                id='inquiry'
                rows='5'
                name='inquiry'
                value={formValues.inquiry}
                pattern="[A-Zaz]{5,250}$"
                minLength="25"
                onChange={fillForm}
                onBlur={() => {setTextAreaBlur(true)
                    checkFormValues()}}/>
                {(formValues.inquiry.length <= 25 && isTextAreaBlur) ? <span tabIndex="0"> Must be minimum of 25 characters. </span> : ""}
            </div>

            <button
            className='button-text'
            type='submit'
            value='Send'
            onSubmit={handleSubmit}
            disabled={isFormValid ? false : true}> Submit </button>
        </form>
    </div>
    <div className='overlay-wrapper hide' ref={overlayRef}>
            <div className='popup'>
                <div className='lottie'><Lottie lottieRef={lottieRef} loop={false} autoplay={false} animationData={sentAnimation}/></div>
                <h2>Success </h2>
                <p>Your message has been sent. <br/>
                Check your email for a response within the next 24 hours. </p>
                <button type='button' onClick={closeModal}> Close </button>
            </div>
        </div>
    </section>
  )
}
