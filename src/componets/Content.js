import React from 'react'

export default function Content() {
  document.title = 'Left Navigation - Home';
  return (
    <div className='bg-blue-500 h-full ml-1'>
        <h1 className='text-5xl text-white text-center py-5 mt-10'>Welcome to React App</h1>
        <hr />
        <p className='text-white w-3/4 text-lg mt-10 ml-10 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iure tempore optio esse corporis quisquam asperiores quam eos officiis, odit possimus recusandae atque omnis adipisci! Minima dolore iste ullam itaque ratione, obcaecati facere voluptas nobis!</p>
    </div>
  )
}
