import React from 'react'
import Card from '../assets/card.png'

const CardDeals = () => {
  return (
    <div className='flex flex-col text-white px-4 mt-10 md:flex-row md:px-10'>
        <div className='md:w-1/2'>
          <h1 className='font-poppins max-w-md font-semibold text-3xl leading-tight md:leading-tight'>Find a better card deal in few easy steps</h1>
          <p className='font-poppins max-w-sm text-dimWhite mt-5'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quits aliquiet eget maurid tortor.c Aliquet ultrices ac, ametau.</p>
          <button type='button' className='btn mt-8'>Get Started</button>
        </div>
        <div className='md:w-1/2'>
          <img src={Card} alt='/' className='w-[83%] h-[83%] object-contain'/>
        </div>
    </div>
  )
}

export default CardDeals