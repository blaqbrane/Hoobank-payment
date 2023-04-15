import React from 'react'
import Logo from '../assets/robot.png'
import discount from '../assets/Discount.svg'
import Arrow from '../assets/arrow-up.svg'

const Hero = () => {
  return (
    <div className='' id='hero'>
        <div className='text-white flex flex-col font-poppins md:flex-row '>
          <div className='flex flex-col justify-center items-start md:w-1/2 md:px-10'>
              <div className='flex flex-row items-center bg-discount-gradient rounded-[6px] px-2 '>
                  <img className='w-[32px] h-[32] ' src={discount} alt=''/>
                  <h2>
                    20% {""} <span  className='text-[grey] '>Discount</span> {""} 1 Month {""} <span  className='text-[grey]'>Account</span>
                  </h2>
              </div>
              <div className='flex flex-row items-center'>
               
                <div className=''>
                  <h1 className='text-4xl my-4 md:text-6xl'>The Next</h1>
                  <h1 className='text-4xl text-gradient mt-4 md:text-6xl'>Generation</h1>
                </div>
                
                <div className='hidden md:transform animate-pulse md:flex rounded-full bg-blue-gradient w-[150px] h-[150px] flex-col items-center justify-center text-center mr-0'>
                  <div className='bg-discount-gradient rounded-full w-[140px] h-[140px] flex flex-col items-center justify-center text-center mr-0'>
                    <div className='flexstart '>
                        <p className='font-poppins font-medium leading-[23px] text-[18px]'>
                            <span className='text-gradient'>Get</span>
                        </p>
                        <img className='w-[23px] h-[23px] object-contain' src={Arrow} alt=''/>
                    </div>
                    <p className='font-poppins font-medium leading-[23px] text-[18px]'>
                      <span className='text-gradient'>Started</span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className='text-4xl my-4 md:text-6xl'>Payment Method</p>
                <p className='text-md mt-8 max-w-[468px] text-[grey]'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentages rates. annual fees.</p>
              </div>
          </div>
          <div className='mt-10 md:w-1/2 md:mt-0'>
              <img src={Logo} alt=''className='w-[100%] h-[100%] relative z-[5]' />
              <div className='absolute top-0 w-[100px] h-[35%] z-[0] pink__gradient'/>
              <div className='absolute top-0 w-[300px] h-[80%] z-[1] bottom-40 rounded-full white__gradient'/>
              <div className='absolute top-0 w-[250px] h-[50%] z-[0] right-20 bottom-20 blue__gradient'/>
          </div>
      </div>
    </div>
   
  )
}

export default Hero;