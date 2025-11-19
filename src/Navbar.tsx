import React from 'react'

type Todo ={
    totalTodo: number,
    completed: number
}

const Navbar = ({totalTodo, completed}: Todo) => {
  return (
    <div className='flex justify-between items-center bg-[#fbf5ed] border-b border-black/[0.08] h-[20%] py-8 px-4 rounded-t-xl mt-2 ' >
      <img alt="logo" src="https://bytegrad.com/course-assets/react-nextjs/dots.png"/>
     <p className='text-2xl'>
        <span className='text-1xl'> <b>{totalTodo} /</b> {completed} </span> Todos Completed
     </p>
    </div>
  )
}

export default Navbar
