import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import FA from 'react-fontawesome'

const Contact = () => (
  <Layout>
    <SEO title='Contact' />
    <div className='page-content_wrapper'>
      <h3 className='page-content_title'>Contact</h3>
      <div className='page-content_block'>
        <div className='contact-page_contact-block'>
          <div style={{ width: '2rem' }}>
            <FA name='map-marker' />
          </div>
          <span>San Diego, CA.</span>
        </div>
        <div className='contact-page_contact-block'>
          <div style={{ width: '2rem' }}>
            <FA name='envelope' />
          </div>
          <span>whereiskeegan@gmail.com</span>
        </div>
        <div className='contact-page_contact-block'>
          <div style={{ width: '2rem' }}>
            <FA name='phone' onClick={() => console.log('WEEEE')} />
          </div>
          <span>(334)618-9523</span>
        </div>
        <div className='contact-page_social-container'>
          <FA name='linkedin' size='2x'/>
          <FA name='github' size='2x'/>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contact
