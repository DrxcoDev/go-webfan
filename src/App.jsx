import * as React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GolangLogo from './assets/golang.svg'
import './App.css'
import './index.css'
import Companies from './components/companies'
import Testimonial from './components/testimonial'

function App() {
  

  return (
    <>
      <div className="text-gray-200">
        <div className="mt-[200px] pl-[50px]  md:pl-[100px] ">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 -mt-[200px]  -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              >
                <div
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                  className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#2986cc] to-[#56b6ff] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
              </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 max-w-7xl mx-auto space-y-12 lg:space-y-0 lg:space-x-8 flex flex-col py-20 lg:flex-row items-center justify-between">

            <div className="mr-[100px]">
              <h1 className="text-5xl md:text-7xl font-bold poppins-font bg-clip-text text-transparent bg-gradient-to-b from-blue-50 to-blue-400">Build simple, secure, scalable systems with <span className='text-blue-300'>Go</span></h1>

              <ul className='my-10 ml-5 text-lg list-disc'>
                <li>An open-source programming language supported by Google </li>
                <li>Easy to learn and great for teams </li>
                <li>Built-in concurrency and a robust standard library </li>
                <li>Large ecosystem of partners, communities, and tools </li>
              </ul>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="">
                  <button class="bg-cyan-500 shadow-sm shadow-cyan-500/50 h-[4rem] text-lg rounded-lg items-center justify-center flex w-[100%] max-w-[17.5rem]">
                    <a href="">Get Started</a>
                  </button>
                </div>
                <div className="">
                  <button class="border border-cyan-400  shadow-cyan-500/50 h-[4rem] text-lg rounded-lg items-center justify-center flex w-[100%] max-w-[17.5rem]">
                    <a href="">Download</a>
                  </button>
                </div>
              </div>

              <div className="my-8">
                <p>Download packages for Windows 64-bit, macOS, Linux, and more</p>
                <p className='w-[400px] md:w-[600px]'>The go command by default downloads and authenticates modules using the Go module mirror and Go checksum database run by Google. Learn more.</p>
              </div>
            </div>

            <div className="example-112">
              <div className="w-[450px] p-8 bg-neutral-900 rounded-lg border border-4 border-blue-300 backdrop-blur-md shadow-lg">
              <p className='text-xl'>
                package main <br />
                <br />
                import "fmt" <br />
                <br />
                func main() {"{"} <br />
                &nbsp;&nbsp;&nbsp;&nbsp;fmt.Println("Hello, World") <br />
                {"}"}
              </p>
              </div>
              <img className='absolute -mt-[50px] ml-2 z-50' src={GolangLogo} alt="" />

              
            </div>
          </div>

          <div className="mt-[500px] mb-[200px] sm:pl-28">
            <Companies></Companies>
          </div>
          <div className="mt-[200px] mr-[100px] mb-[200px] flex items-center justify-left">
            <Testimonial></Testimonial>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
