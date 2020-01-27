import React from 'react'

const ContactButton = ({ title }) => {
  const openEmail = () => {
    window.location = `mailto:whereiskeegan@gmail.com?&subject=${title ||
      `Let's Talk`}`
  }
  return (
    <div className='contact-button_container'>
      <button onClick={() => openEmail()} className='contact-button'>
        {title || `Let's Talk!`}
      </button>
    </div>
  )
}

export default ContactButton
