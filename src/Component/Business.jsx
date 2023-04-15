import React from 'react'
import {stats} from '../data'

const Business = () => {
  return (
    <div id='business' className='flex flex-col text-white font-poppins mt-16 md:flex-row md:px-10 '>
      <div className='flex flex-col items-start md:flex-row md:w-1/2'>
        <div className='flex-1 flex flex-col items-start'>
            <h1 className='text-3xl mb-5 max-w-md md:text-5xl'>You do the business,we'll handle the money.</h1>
            <p className='max-w-sm text-[grey] mb-6'>With the right credit card you can improve your financial life by building credit,earning rewards and saving money. But with hundreds of credit cards on the market</p>
            <button type='button' className='btn'>Get Started</button>
        </div>
      </div>
      <div className='md:w-1/2'>
        {stats.map((stat,index) =>{
          return(
            <div key={stat.id}>
                <div className='flex items-center justify-center flex-col'>
                  <div className={`flex flex-row items-center p-6 ${index === stats.length - 2 ? "cards" :""} feature-card rounded-[20px] ${index !== stats.lenght-1 ? 'mb-6':'mb-0'} `}>
                    <div className='flex justify-center items-center h-[64px] w-[64px] bg-dimBlue rounded-full '>
                      <img src={stat.img} alt='/' className='w-[60%] h-[50%] object-contain'/>
                    </div>
                    <div className='flex-1 flex flex-col ml-3'>
                      <h3 className='font-poppins font-semibold text-[17px] leading-[23px] mb-1'>{stat.title}</h3>
                      <p className='font-poppins text-dimWhite font-semibold text-[16px] leading-[24px] mb-1'>{stat.content}</p>
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

export default Business