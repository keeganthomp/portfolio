import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import AboutPhoto from '../components/aboutPhoto'
import { WEB_TECH_OVERVIEW } from '../constants/tech'
import { renderStringFromArray } from '../helpers'

const About = () => (
  <Layout>
    <SEO title='About' />
    <div className='page-content_wrapper'>
      <AboutPhoto />
      <h3 className='page-content_title'>About</h3>
      <div className='page-content_block'>
        <p>
          My name is Keegan Thompson and I am a California based software
          developer. I am a freelance developer who enjoys working with
          technologies such as{' '}
          {renderStringFromArray({ items: WEB_TECH_OVERVIEW })}. I love working
          with creative and entreprenurial individuals who are pursuing their
          passion. Outside of my JavaScript addiction, I enjoy lifting weights,
          hiking, tattoos, puppies, creating things, and bourbon.
        </p>
      </div>
    </div>
  </Layout>
)

export default About
