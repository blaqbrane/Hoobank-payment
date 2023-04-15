import React from 'react'
import Apple from '../assets/apple.svg'
import Google from '../assets/google.svg'
import Bill from '../assets/bill.png'

const Billings = () => {
  return (
    <div className='flex flex-col-reverse text-white px-4 mt-16 md:px-10 md:flex-row'>
      <div className='flex relative md:w-1/2'>
        <img className='relative w-[100%] h-[100%] object-contain z-[5]' src={Bill} alt='/'/>
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[3] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className='w-full flex flex-col justify-center md:ml-[100px] md:w-1/2'>
        <h1 className='font-poppins font-medium text-3xl leading-tight max-w-md md:leading-tight md:text-[40px] '>Easily control your billing & invoicing.</h1>
        <p className='max-w-sm text-dimWhite font-poppins font-normal text-[15px] leading-[30px] mt-8'>
          Elit enim sed massiam,Mauris eu adipiscing <br className='block md:hidden'/> ultrices ametadio aenean neque. Fusce ipsum orci <br className='block md:hidden'/> rhoncus aliporttitor integer platea placerat
        </p>
        <div className='flex flex-row mt-4'>
          <img src={Apple} alt='/'/>
          <img className='m-4' src={Google} alt='/'/>
        </div>
      </div>
    </div>
  )
}

export default Billings