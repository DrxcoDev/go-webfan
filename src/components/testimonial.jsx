import * as React from 'react'
import '../index.css'


function Testimonial() {
  

  return (
    <> <div className="grid grid-cols-1 font-normal poppins-font md:grid-cols-2">
        <div className="text-xl font-normal poppins-font">
          <h1 className="text-4xl">Testimonials</h1>
          <p className='w-[500px] md:w-[800px] text-left my-[10px] mt-[40px] text-[18px] md:blur-xs hover:blur-none duration-500'>
          At the time, no single team member knew Go, but within a month, everyone was writing in Go and we were building out the endpoints. It was the flexibility, how easy it was to use, and the really cool concept behind Go (how Go handles native concurrency, garbage collection, and of course safety+speed.) that helped engage us during the build. Also, who can beat that cute mascot!
          </p>
          <div className="text-gray-400 text-sm md:blur-xs hover:blur-none duration-500">
          ~ Jaime Enrique Garcia Lopez, Senior Software Development Manager at Capital One
          </div>
        </div>

        <div className="text-xl font-normal poppins-font md:pl-[100px]">
          <p className='w-[500px] md:w-[800px] text-left my-[10px] mt-[80px] text-[18px] md:blur-xs hover:blur-none duration-500'>
          A small language that compiles fast makes for a happy developer. The Go language is small, compiles really fast, and as a result it lets your mind focus on the actual problem and less on the tool you are using to solve it. Code, test, debug cycles are so quick that you forget you are not working with an interpreted language. Looking at our code, you see less boilerplate and more business logic.
          </p>
          <div className="text-gray-400 text-sm md:blur-xs hover:blur-none duration-500">
          ~ Clayton Coleman, Lead Engineer, Open Shift at RedHat
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Testimonial
