import React from 'react'
import {Navbar,Hero,Stats,Business,Billings,CardDeals,Testimonials,Clients,CTA,Footer} from "./Component"
function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <div className='px-6 py-4'>
        <Hero/>
      </div>
      <div className='px-6 py-4'>
        <Stats/>
        <Business/>
        <Billings/>
        <CardDeals/>
        <Testimonials/>
        <Clients/>
        <CTA/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
