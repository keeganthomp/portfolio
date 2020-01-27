import React from 'react'

import SEO from '../components/seo'
import AboutPhoto from '../components/aboutPhoto'
import ContactButton from '../components/ContactButton'

const About = () => (
  <>
    <SEO title='About' />
    <div className='page-content_wrapper'>
      <AboutPhoto />
      <h3 className='page-content_title'>About</h3>
      <div className='page-content_block'>
        <p>
          My name is Keegan Thompson. I grew up in Dothan, Alabama, moved to
          Nashville to attend Belmont University where I majored in information
          systems management. In 2016, I quit my full-time job to attend a
          coding bootcamp, as I have been tinkering with programming since high
          school. I got my first engineering role right after finishing my
          bootcamp. Since then, programming became a passion and a career.
          Because of my ambition, drive, and time put into the craft after work
          hours, I rose the ranks of senior engineer within two years. In 2019,
          I moved across the country with my wife and two pups. I am now
          thrilled to be a resident of San Diego, California.
        </p>
        <p>
          Since moving, I have quit my role as a full-time employee and work for
          myself to fill my entrepreneurial itch. A 9-5 does not suit me. Simply
          put, working in a cubicle makes me hate life. I have, and always be,
          entrepreneurial. Aside from working on my business, I enjoy pursuing
          side projects, working out, puppies, tattoos and bourbon...I really
          like bourbon. I have an affinity for skateboarding, motocross,
          surfing, cinema, startups, cannabis, investing, and tech. My interest
          are all over the place. I'm happy to meet new people, so let's grab an
          old fashioned.
        </p>
        <p>Cheers!</p>
        <ContactButton title={`Let's Grab a Drink!`}/>
      </div>
    </div>
  </>
)

export default About
