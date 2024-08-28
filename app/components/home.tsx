import React from 'react'
import Navbar from './navbar'
const HomeComponent = () => {
  return (
    <div id="Home" className='h-screen w-full bg-[#1D1B25]'>
      <Navbar />
      <div className='flex flex-col items-center justify-center h-screen gap-6'>
        <h1 className='flex text-3xl md:text-6xl font-bold text-secondary'>
          Hello! 👋🏻,
        </h1>
        <p className='text-3xl md:text-6xl font-bold text-secondary'>I'm Yabets Temesgen </p>
        <p className='text-3xl md:text-6xl font-bold text-primary-light'>Full-stack Developer</p> 
        <button className='rounded-lg bg-secondary px-6 py-3 text-primary'>
          Portfolio
        </button>
      </div>
    </div>
  )
}

export default HomeComponent