import React from 'react'
import AboutImageCard from '../components/aboutImageCard'
import TabCard   from '../components/tabs'

const AboutMe = () => {
  return (
    <div className='flex items-center justify-center gap-x-16 h-screen py-80 w-full'>
      <AboutImageCard/>
      <TabCard/>
    </div>
  )
}

export default AboutMe