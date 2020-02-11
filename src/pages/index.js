import React from 'react'

import SEO from '../components/seo'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyPhoto from '../components/homepagePhoto'
import ContactButton from '../components/ContactButton'
import { yearsOfExp } from '../constants/tech'
import '../styles/index.scss'

const IndexPage = () => (
  <>
    <SEO title='Home' />
    <MyPhoto />
    <div className='page-content_wrapper'>
      <h3 className='page-content_title page-content_title--home'>
        Keegan Thompson
      </h3>
      <div className='page-content_block'>
        <p>
          I am a San Diego based full stack
          developer. I enjoy working with creative
          entrepreneurs and small business owners who are passionate about their
          work and vision. I have {yearsOfExp}+ years of experience with
          ReactJS, Redux, Sass/CSS, NodeJS, AWS, Postgres, and MongoDB.
        </p>
        <ContactButton />
      </div>
    </div>
  </>
)

export default IndexPage
