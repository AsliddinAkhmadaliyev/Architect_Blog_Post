import React from 'react'
import {Button, Chip, IconButton, Typography} from '@material-tailwind/react';
import { FaLongArrowAltRight, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <div className='h-screen pt-10 flex items-center justify-start pl-52 py-20'>
      <div className='w-3/4 h-1/2'>
        <div className='relative h-10'>
          <Chip className='absolute w-[90px] h-8 pl-4 capitalize text-[14px] bg-teal-900' value="Hi There!"/>
          <p className='absolute bottom-0 left-6 w-4 h-4 rotate-[45deg] bg-teal-900'></p>
        </div>
        <Typography variant='h1' className='text-cyan-900'>AKHMADALIYEV ASLIDDIN</Typography>
        <Typography variant='h1' className='text-cyan-900'>I'M WEB DEVELOPER. </Typography>

        <Typography className='mt-4'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor temporibus aspernatur, voluptatibus enim vel aut,
        </Typography>
        <div className='flex items-center justify-start gap-x-4 mt-12'>
          <Button className="bg-teal-900 rounded-md flex items-center justify-around gap-4">HIRE ME <FaLongArrowAltRight /></Button>
          <Button className="bg-teal-400 rounded-md flex items-center justify-around gap-4">VIEW PORTFOLIO <FaLongArrowAltRight /></Button>
        </div>
        <div className='flex items-center justify-around w-[230px] mt-16'>
          <IconButton className='bg-cyan-600 text-[16px]'>
            <FaFacebookF />
          </IconButton>
          <IconButton className='bg-cyan-600 text-[16px]'>
            <FaTwitter />
          </IconButton>
          <IconButton className='bg-cyan-600 text-[16px]'>
            <FaLinkedinIn />
          </IconButton>
        
        </div>
      </div>
    </div>
  )
}

export default Home