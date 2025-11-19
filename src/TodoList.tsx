import React from 'react'


type InputProps = {
    handleSubmit: (e:React.FormEvent<HTMLFormElement>) => void;
    handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
    item: string
}

const TodoList = ({handleSubmit, handleChange, item}: InputProps) => {
    
  return (
    <div className='flex flex-col items-start justify-center w-[100%] mt-4'>
        <h1 className='text-lg lg:text-xl font-semibold py-2 '>Add a todo</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={item}
            onChange={handleChange}
            placeholder='Enter a task....'
            className='w-[85%] lg:w-[95%] text-sm lg:text-xl border py-2 px-3 lg:py-3 lg:px-2 rounded-xl mb-4 ' 
             />
            <button className='w-[85%] lg:w-[95%] py-2 lg:py-3 px-2 rounded-xl text-sm lg:text-lg text-white bg-[#473a2b] border'>Add To List </button>
        </form>
    </div>
  )
}

export default TodoList
