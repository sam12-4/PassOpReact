import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-gradient-to-r from-slate-900 to-slate-600 text-lg p-4 text-white  '>
            <div className='relative flex justify-between w-full items-center px-[10%]'>
                <div className="logo md:text-3xl text-xl font-semibold">
                    <span className='text-green-600'>&lt;</span> Pass
                    <span className='text-green-600'>OP /&gt; </span>
                </div>
                {/* <ul className=''>   
                    <li className="list-none flex gap-4">
                        <a className="no-underline" href="#">Home</a>
                        <a className="no-underline" href="#">About</a>
                        <a className="no-underline" href="#">Contact</a>
                    </li>
                </ul> */}
                <div>
                    <button className='bg-green-600 px-2 md:py-1 md:p-2 p-1 rounded-full flex gap-4  hover:bg-green-500 hover:text-black hover:cursor-pointer md:text-xl text-base'>
                    <img className=' w-7 hover:invert-0' src="./icons/github.svg" alt="" />
                    Github
                    </button>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
