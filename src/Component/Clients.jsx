import React from 'react'
import {airbnb,binance,coinbase,dropbox} from '../assets';
const Clients = () => {
  return (
    <div className='px-4 text-white md:px-10'>
      <div className='flex flex-row flex-wrap space-x-4 items-center justify-between'>
        <img className='w-[100px] h-[100px] object-contain' src={airbnb} alt='/'/>
        <img className='w-[100px] h-[100px] object-contain' src={binance} alt='/'/>
        <img className='w-[100px] h-[100px] object-contain' src={coinbase} alt='/'/>
        <img className='w-[100px] h-[100px] object-contain' src={dropbox} alt='/'/>
      </div>
    </div>
  )
}

export default Clients