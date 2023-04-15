import React from 'react'
import {logo, facebook,instagram, linkedin,twitter,} from '../assets'

const Footer = () => {
  return (
    <div className='text-white mt-10 px-4 bg-black md:px-28' id='footer'>
      <div className='grid mb-6 md: grid-cols-3'>
        <div>
          <img className='w-[100px] h-[100px] object-contain mt-6 md:mt-0 md:w-[150px] md:h-[150px]'src={logo} alt='/'/>
          <p className='max-w-[120px] text-[grey] mt-[-20px] text-[12px]'>A new way to make payments easy, reliable and secure.</p>
      
        </div>
        <ul className='mt-16 text-[grey] leading-[28px] cursor-pointer'>
          <li className='font-bold mb-6 text-white'>Useful Links</li>
          <li>Contents</li>
          <li>How it works</li>
          <li>Create</li>
          <li>Explore</li>
          <li>Terms and Services</li>
        </ul>
        <ul className='mt-16 text-[grey] leading-[28px] cursor-pointer'>
          <li className='font-bold mb-6 text-white'>Community</li>
          <li>Help Center</li>
          <li>Partners</li>
          <li>Suggestions</li>
          <li>Blog</li>
          <li>Newsletters</li>
        </ul>
      
      </div>
      <hr className='mb-4'/>
      <div className='hidden md:flex flex-row items-center justify-between'>
          <div>
            <h1 className='text-[grey]'>Copyright @ 2022 HooBank, All Right Reserved.</h1>
          </div>
          <div className='flex items-center cursor-pointer'>
            <img src={instagram} alt='/'/>
            <img className='m-4'src={facebook} alt='/'/>
            <img className='mr-4'src={twitter} alt='/'/>
            <img src={linkedin} alt='/'/>
          </div>
      </div>
      <div className='flex items-center md:hidden '>
          <div className='w-1/2'>
            <h1 className='text-[grey] max-w-[200px]'>Copyright @ 2022 HooBank, All Right Reserved.</h1>
          </div>
          <div className='w-1/2 flex items-center cursor-pointer'>
            <img src={instagram} alt='/'/>
            <img className='m-4'src={facebook} alt='/'/>
            <img className='mr-4'src={twitter} alt='/'/>
            <img src={linkedin} alt='/'/>
          </div>
      </div>
    </div>
  )
}

export default Footer