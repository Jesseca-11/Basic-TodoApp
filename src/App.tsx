import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';


type Todo = {
    id: number,
    text: string,
    completed: boolean
}

function App() {

   const [todos, setTodos] = useState<Todo[]>([])
   const [item, setItem] = useState<string>("")

   const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setItem(e.target.value)
   }

   const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!item.trim())return;

    const newTodo:Todo = {
      id: Date.now(),
      text: item.trim(),
      completed: false
    }
    setTodos(prev => [...prev, newTodo]);
    setItem("")
   };

   const handleDelete = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
   }

   const handleCompleted = (id: number) => {
      setTodos(prev => prev.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
   }

   const totalTodo = todos.length;
   const completedtodo = todos.filter(todo => todo.completed).length
   
  
  return (
    <div className="App  flex justify-center items-center  h-screen bg-gradient-to-b from-[#f1d4b3] to-pink-200">
      <div className="">
        <h1 className="font-extrabold text-2xl sm:text-[120px] text-black/5 left-[30%] lg:left-[20%] 
       -translate-x-4/2 top-[-2%]  lg:top-[-5%] absolute tracking-[0.2em]">TODO APP</h1>
      </div>

      <div className="flex flex-col w-[90%] lg:w-[73%] h-[90%] shadow-[0_4px_4px_rgba(0,0,0,0.07)]">
        <Navbar totalTodo={totalTodo} completed={completedtodo}  />
      <Header handleSubmit={handleSubmit} handleChange={handleChange} 
      handleDelete={handleDelete} todos={todos} item={item} 
      handleCompleted={handleCompleted}
      />
      </div>
    </div>
  );
}

export default App;
