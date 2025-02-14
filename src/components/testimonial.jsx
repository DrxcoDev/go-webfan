import * as React from 'react'
import '../index.css'


function Testimonial() {
  

  return (
    <>
      <div className="text-xl font-normal poppins-font">
        <h1 className="text-4xl">Testimonials</h1>
        <p className='w-[500px] md:w-[800px] text-left my-[10px] mt-[40px] text-[18px]'>
        At the time, no single team member knew Go, but within a month, everyone was writing in Go and we were building out the endpoints. It was the flexibility, how easy it was to use, and the really cool concept behind Go (how Go handles native concurrency, garbage collection, and of course safety+speed.) that helped engage us during the build. Also, who can beat that cute mascot!
        </p>
        <div className="text-gray-400 text-sm">
         ~ Jaime Enrique Garcia Lopez, Senior Software Development Manager at Capital One
        </div>
      </div>
    </>
  )
}

export default Testimonial
