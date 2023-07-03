import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <div>
      <nav className='h-full px-14 py-10 bg-red-500'>
        <h1 className='text-white font-sans text-2xl pb-10'>Left Navigation</h1>
        <ul className='flex flex-col'>
            <Link className='list-none text-white font-mono px-2 my-1 bg-black/50 hover:bg-black/70 active:bg-black/20 cursor-pointer' to='/'>Home</Link>
            <Link className='list-none text-white font-mono px-2 my-1 bg-black/50 hover:bg-black/70 active:bg-black/20 cursor-pointer' to='/about'>About</Link>
            <Link className='list-none text-white font-mono px-2 my-1 bg-black/50 hover:bg-black/70 active:bg-black/20 cursor-pointer' to='/information'>Information</Link>
            <Link className='list-none text-white font-mono px-2 my-1 bg-black/50 hover:bg-black/70 active:bg-black/20 cursor-pointer' to='/contact'>Contact Us</Link>
        </ul>
      </nav>
    </div>
  )
}
