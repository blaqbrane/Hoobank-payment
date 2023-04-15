import React from 'react'
import {Clients} from '../Component'
import {testmonials} from '../data'


const Testimonials = () => {
  return (
    <div className='px-4 text-white font-poppins mt-12 md:px-10'>
      <div className='flex flex-col items-start mb-10 md:flex-row md:items-center'>
        <h1 className='heading max-w-md mb-2'>What people are saying about us</h1>
        <p className='font-poppins max-w-sm text-dimWhite md:ml-auto'>Everything you need to accept card payments and grow your business anywhere on the planet</p>
      </div>
      <div className='grid space-y-4 md:grid-cols-3 md:space-y-0 md:space-x-4'>
        {testmonials.map((testm,index) => {
            return(
              <div key={testm.id}>
                <div className={`flex flex-col ${index === testmonials.length - 2 ? "cards" : ""} feature-card p-4 w-fit rounded-[20px] `}>
                  <p className='text-6xl text-gradient'>{testm.symbol}</p>
                  <p className='max-w-[300px]'>{testm.text}</p>
                  <div className='flex flex-row items-center my-6'>
                    <div>
                      <img className='w-[35px] h-[35px]' src={testm.img} alt='peopleo1'/>
                    </div>
                    <div className='ml-2'>
                      <h2>{testm.name}</h2>
                      <p className='text-[grey] text-sm'>{testm.role}</p>
                    </div>
                  </div>
                </div>

              </div>
            )
        })}
      </div>
    </div>
  )
}

export default Testimonials