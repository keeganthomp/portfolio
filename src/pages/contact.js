import React from 'react'

import SEO from '../components/seo'
import { FaLinkedin, FaPhone, FaMapMarkerAlt, FaEnvelope, FaGithub } from 'react-icons/fa'

const SOCIAL_ICON_SIZE = '2.5rem'

const Contact = () => (
  <>
    <SEO title='Contact' />
    <div className='page-content_wrapper'>
      <h3 className='page-content_title'>Contact</h3>
      <div className='page-content_block'>
        <div className='contact-page_contact-block'>
          <div style={{ width: '2rem' }}>
            <FaMapMarkerAlt />
          </div>
          <span>San Diego, CA.</span>
        </div>
        <div className='contact-page_contact-block'>
          <div style={{ width: '2rem' }}>
            <FaEnvelope />
          </div>
          <span>whereiskeegan@gmail.com</span>
        </div>
        <div className='contact-page_contact-block'>
          <div style={{ width: '2rem' }}>
            <FaPhone onClick={() => console.log('WEEEE')} />
          </div>
          <span>(334)618-9523</span>
        </div>
        <div className='contact-page_social-container'>
          <FaLinkedin size={SOCIAL_ICON_SIZE}/>
          <FaGithub size={SOCIAL_ICON_SIZE}/>
        </div>
      </div>
    </div>
    </>
)

export default Contact
