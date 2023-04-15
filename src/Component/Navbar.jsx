import React, { useState } from 'react'
import Hoobank from '../assets/logo.svg'
import Menu from '../assets/menu.svg'
import Close from '../assets/close.svg'
import {AiOutlineClose,AiOutlineMenu}from 'react-icons/ai'


const Navbar = () => {
    const[isopen, setIsopen] = useState(false)
    const handleClick = () => {
        setIsopen(prevopen => !prevopen)
    }
  return (
    <div className='px-6 py-4 text-white md:px-16'>
        <div className='flex justify-between items-center'>
            <div>
                <img className="w-[100px]" src={Hoobank} alt='/'/>
            </div>
            <div className='hidden md:block'>
                <ul className='flex items-center'>
                    <li className='m-4'>Home</li>
                    <li className='m-4'>About Us</li>
                    <li className='m-4'>Features</li>
                    <li className='m-4'>Solution</li>
                </ul>
            </div>
            <div onClick={handleClick} className="block md:hidden">
              <img src={isopen ? Close : Menu} alt=''/>
            </div>
            <ul className={isopen ? 'fixed flex- z-10 text-center bg-black-gradient items-center w-[60%] h-screen top-0 left-0 ease-in-out duration-500 md:hidden':'fixed left-[-100%]'}>
                <a href='#hero' onClick={handleClick}><li className='m-4 border-b border-[gray] p-4'>Home</li></a>
                <a href = '#footer' onClick={handleClick}> <li className='m-4 border-b border-[gray] p-4'>About Us</li></a>
                <a href = '#business' onClick={handleClick}><li className='m-4 border-b border-[gray] p-4'>Features</li></a>
                <li className='m-4 border-b border-[gray] p-4' onClick={handleClick}>Solution</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar