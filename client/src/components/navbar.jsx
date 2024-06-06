import { Typography } from '@material-tailwind/react'
import { useState, useEffect } from 'react'

const Navbar = () => {

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  }
  return (
    <div className={scrolling 
      ? `fixed z-10 h-16 bg- w-full flex items-center justify-center navbar-scroll duration-300`
      : "fixed z-10 h-20 bg- w-full flex items-center justify-center duration-300"}>
      <div className='h-full w-[1100px] flex items-center justify-between'>
        <Typography className={scrolling ? "text-2xl text-white font-bold" :'text-2xl text-teal-800 font-bold'}>Architect Post</Typography>
        <ul className='flex items-center h-full w-auto justify-between gap-x-12 text-white'>
          <a href="#">
            <li className={scrolling ? "text-white" : `text-teal-800`}>Home</li>
          </a>
          <a href="#">
            <li className={scrolling ? "text-white" : `text-teal-800`}>About</li>
          </a>
          <a href="#">
            <li className={scrolling ? "text-white" : `text-teal-800`}>Services</li>
          </a>
          <a href="#">
            <li>Portfolio</li>
          </a>
          <a href="#">
            <li>Pricing</li>
          </a>
          <a href="#">
            <li>Blog</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </div>
  )
}
export default Navbar