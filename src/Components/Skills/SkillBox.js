import React from 'react'

export const SkillBox = (props) => {
  return (
    <div className='skillbox'>
        <video autoPlay muted loop>
            <source src={props.video} type='video/mp4'/>            
        </video>
        <h1 className='skillbox-heading'>{props.heading}</h1>
        <p className='skillbox-description'>{props.description}</p>
    </div>
  )
}
