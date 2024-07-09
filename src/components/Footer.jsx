import React from 'react'

const Footer = () => {
  return (
    <footer className=' bg-gradient-to-r from-slate-600 to-slate-900 text-lg py-2 text-white flex flex-col justify-center items-center'>
        <div className="logo md:text-2xl text-xl font-semibold">
                    <span className='text-green-600'>&lt;</span> Pass
                    <span className='text-green-600'>OP /&gt; </span>
                </div>
        <div className='flex items-center md:text-2xl text-base'>
            Created with <img className='px-1 w-10' src="./icons/heart.png" alt="" /> by Sameer
        </div>
    </footer>
  )
}

export default Footer
