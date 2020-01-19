import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyPhoto from '../components/homepagePhoto'
import { WEB_TECH_OVERVIEW } from '../constants/tech'
import { renderStringFromArray } from '../helpers'
import '../styles/index.scss'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <MyPhoto />
    <div className='page-content_wrapper'>
      <h3 className='page-content_title'>Keegan Thompson</h3>
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

export default IndexPage
