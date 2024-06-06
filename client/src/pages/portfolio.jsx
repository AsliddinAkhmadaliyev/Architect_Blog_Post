import { Typography } from '@material-tailwind/react'
import React from 'react'

const Portfolio = () => {
  return (
    <div>
      <Typography variant='h5' className='text-center text-teal-700 mt-10'>PORTFOLIO</Typography>
      <Typography variant='h2' className='text-center'>My Latest Work</Typography>
    <div className='flex flex-wrap items-center justify-center gap-4 h-auto w-[1000px] mt-12'>
        <div className='portfolio-card h-[40vh] w-[450px]'> 
          <div className='card h-full duration-300 cursor-pointer flex items-center justify-center flex-col text-white'>
            <Typography variant='h4'>Full Stack Project</Typography>
            <Typography variant='h6'>WEB SITE</Typography>
          </div>
        </div>
        <div className='portfolio-card h-[40vh] w-[450px]'> 
          <div className='card h-full duration-300 cursor-pointer flex items-center justify-center flex-col text-white'>
            <Typography variant='h4'>Full Stack Project</Typography>
            <Typography variant='h6'>WEB SITE</Typography>
          </div>
        </div>
        <div className='portfolio-card h-[40vh] w-[450px]'> 
          <div className='card h-full duration-300 cursor-pointer flex items-center justify-center flex-col text-white'>
            <Typography variant='h4'>Full Stack Project</Typography>
            <Typography variant='h6'>WEB SITE</Typography>
          </div>
        </div>
        <div className='portfolio-card h-[40vh] w-[450px]'> 
          <div className='card h-full duration-300 cursor-pointer flex items-center justify-center flex-col text-white'>
            <Typography variant='h4'>Full Stack Project</Typography>
            <Typography variant='h6'>WEB SITE</Typography>
          </div>
        </div>
        <div className='portfolio-card h-[40vh] w-[450px]'> 
          <div className='card h-full duration-300 cursor-pointer flex items-center justify-center flex-col text-white'>
            <Typography variant='h4'>Full Stack Project</Typography>
            <Typography variant='h6'>WEB SITE</Typography>
          </div>
        </div>
        <div className='portfolio-card h-[40vh] w-[450px]'> 
          <div className='card h-full duration-300 cursor-pointer flex items-center justify-center flex-col text-white'>
            <Typography variant='h4'>Full Stack Project</Typography>
            <Typography variant='h6'>WEB SITE</Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
