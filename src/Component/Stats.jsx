import React from 'react'

const Stats = () => {
  return (
    <div className='flex flex-wrap font-poppins px-10 text-white space-x-20 mt-10 md:mt-0 flex-row md:px-10 '>
          <div className='flex items-center'>
              <h3 className='text-lg md:text-4xl'>3800+ {""} <small className='text-gradient text-[8px] md:text-sm'>USER ACTIVE</small></h3>
              <div className='xs:hidden md:h-[28px] w-[2px] bg-slate-300 '/>
          </div>
          <div className='flex items-center'>
              <p className='text-lg md:text-4xl'>$230M+</p>
              <h3 className='text-gradient text-[8px] ml-1 md:ml-2 md:text-sm'>TRANSACTION</h3>
          </div>
          <div className='flex items-center '>
              <p className='text-lg md:text-4xl'>230+</p>
              <h3 className='text-gradient text-[8px] ml-1 md:ml-2 md:text-sm'>TRUSTED BY COMPANY</h3>
              <div className='xs:hidden md:h-[28px] w-[2px] bg-slate-300'/>
          </div>
         
      </div>
  )
}

export default Stats