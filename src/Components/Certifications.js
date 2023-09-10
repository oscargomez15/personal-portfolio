import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAws,faFreeCodeCamp,faMeta } from '@fortawesome/free-brands-svg-icons'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'
import './Certifications.css'
import cloudCert from './cloud-practictioner.png'
import courseraCert from './coursera-meta.png'
import freeCodeCampCert from './freecodecamp.png'

export const Certifications = () => {
  return (
    <div className='certifications-container'>
        <div className='certs-heading'>
            <div className='certs-title'>
                <h1>Certifications</h1>
                <FontAwesomeIcon icon={faFileLines} />
            </div>
            <p> Click badges to verify.</p>
        </div>

            <div className='certification'>
                <a href='https://aw.certmetrics.com/amazon/public/verification.aspx' target='__blank'>
                    <img src={cloudCert} width='150px' alt='cloud-practictioner-certification' className='cert-badge'/>
                </a>
                <p>Validation Number: ENTDB5H2V244QKG2</p>
            </div>

            <div className='certification'>
                <a href='https://www.coursera.org/account/accomplishments/verify/JEPNHX3AT2GH' target='__blank'>
                    <img src={courseraCert} width='150px' alt='meta-webdev-certification' className='cert-badge'/>
                </a>
            </div>

            <div className='certification'>
                <a href='https://www.freecodecamp.org/certification/fcc017c1802-5df9-4f3b-878e-20584d956dee/responsive-web-design' target='__blank'>
                    <img src={freeCodeCampCert} width='150px' alt='freecodecamp-certification' className='cert-badge'/>
                </a>
        </div>
    </div>
  )
}
