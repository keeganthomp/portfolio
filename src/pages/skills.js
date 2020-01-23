import React from 'react'
import { Line } from 'rc-progress'

import SEO from '../components/seo'

const SKILLS = [
  {
    name: 'HTML',
    percent: 100,
  },
  {
    name: 'Sass/CSS',
    percent: 100,
  },
  {
    name: 'JavaScript/ES6',
    percent: 95,
  },
  {
    name: 'ReactJS',
    percent: 90,
  },
  {
    name: 'NodeJS',
    percent: 90,
  },
  {
    name: 'AWS',
    percent: 75,
  },
  {
    name: 'Gatsby',
    percent: 75,
  },
  {
    name: 'WordPress',
    percent: 70,
  },
  {
    name: 'Linux',
    percent: 82,
  },
]

const GAUGE_COLOR = '#AFF8DB'
const GAUGE_WIDTH = '3'
const TRIAL_WIDTH = '3'

const renderSkillMeter = ({ skill }) => {
  const { percent, name } = skill
  const stringifiedPercent = percent.toString()
  return (
    <div className='skills_skill-container'>
      <span className='skills_skill-title'>{name}</span>
      <div>
        <Line
          percent={stringifiedPercent}
          strokeWidth={GAUGE_WIDTH}
          strokeColor={GAUGE_COLOR}
          trailWidth={TRIAL_WIDTH}
        />
      </div>
    </div>
  )
}

const Skills = () => (
  <>
    <SEO title='Skills' />
    <div className='page-content_wrapper'>
      <h3 className='page-content_title'>Skills</h3>
      <div className='page-content_block'>
        <div className='skills_container'>
          {SKILLS.map(skill => renderSkillMeter({ skill }))}
        </div>
      </div>
    </div>
  </>
)

export default Skills
