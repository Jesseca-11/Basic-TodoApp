import React from 'react'


type Todo = {
    id: number,
    text: string,
    completed: boolean
}

type InputProps = {
    handleDelete: (id: number) => void,
    handleCompleted: (id: number) => void,
    todos: Todo[]

}


const TodoItem = ({handleDelete, todos, handleCompleted}: InputProps) => {
    const hasTodo = todos.length > 0
  return (
    <div className={`w-[90%] lg:w-[60%] h-full flex flex-col  ${hasTodo ? "justify-start pt-6" : "justify-center"} transition-all duration-300`} >
      <ul className="">
        {!hasTodo && (<p className='flex items-center justify-start text-sm lg:text-lg font-medium'>Start by Adding A todo....</p> ) }
        {todos.map((todo) => (
            <li key={todo.id} className="flex justify-between items-start ">
                <span onClick={() => handleCompleted(todo.id)} className={todo.completed ? "line-through text-gray-500" : "text-black cursor-pointer"}>
                {todo.text}
                </span>
                <button onClick={() => handleDelete(todo.id)} className='text-red-600 text-2xl font-semibold'>X</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoItem
