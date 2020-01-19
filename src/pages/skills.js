import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Skills = () => (
  <Layout>
    <SEO title='Skills' />
    <div className='page-content_wrapper'>
      <h3 className='page-content_title'>Skills</h3>
      <div className='page-content_block'>
        <div style={{ display: 'flex' }}>
          <ul className='skills-page_skill-column'>
            <li>HTML</li>
            <li>CSS/Sass</li>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>AWS</li>
          </ul>
          <ul className='skills-page_skill-column'>
            <li>Postgres</li>
            <li>MongoDB</li>
            <li>Linux</li>
            <li>Wordpress</li>
            <li>Gatsby</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default Skills
