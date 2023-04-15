import React from 'react'

const CTA = () => {
  return (
    <div className='px-4  text-white mt-10 z-10 md:px-20'>
      <div className='flex items-center justify-between flex-col feature-stable py-6 px-10 rounded-md md:flex-row'>
        <div className='flex flex-col'>
          <h1 className='heading mb-3 xs:text-[32px]'>Let's try our service now!</h1>
          <p className='max-w-sm text-[grey]'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <div>
          <button className='animate-pulse px-10 py-4 outline-0 bg-blue-gradient font-medium rounded text-black mt-8'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default CTA