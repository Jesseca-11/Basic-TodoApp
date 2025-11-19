import React, { use, useState } from 'react'
import TodoList from './TodoList'
import TodoItem from './TodoItem'

type Todo = {
    id: number,
    text: string,
    completed: boolean
}


type InputProps = {
    handleSubmit: (e:React.FormEvent<HTMLFormElement>) => void;
    handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
    handleDelete: (id: number) => void;
    handleCompleted: (id: number) => void
    todos: Todo[];
    item: string

}


const Header = ({handleSubmit, handleChange, handleDelete, handleCompleted, todos, item}: InputProps) => {

  return (
    <div className='flex bg-white h-full  justify-center items-start  '>
      
      <div className="flex w-[100%] lg:w-[65%] h-full ps-10 items-center border-2 border-black/[0.08]"><TodoItem  handleDelete={handleDelete} todos={todos} handleCompleted={handleCompleted} /></div>
      <div className= "w-[50%]  lg:w-[35%] ps-4  "><TodoList handleSubmit={handleSubmit} handleChange={handleChange} item={item} /> </div>
    </div>
  )
}

export default Header
