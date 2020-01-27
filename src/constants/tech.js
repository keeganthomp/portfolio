import moment from 'moment'

export const WEB_TECH_OVERVIEW = [
  'ReactJS',
  'NodeJS',
  'Sass/CSS',
  'React Native',
  'Postgres',
  'MongoDB',
  'AWS',
]

const dateStartedProgramming = moment('2016-05-20')
const currentDate = moment()
export const yearsOfExp = moment
  .duration(currentDate.diff(dateStartedProgramming))
  .years()
