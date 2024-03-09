"use client"
import React, { useState } from 'react'
import Header from '../../_components/Header'
import { TodoType } from '@/app/_typescript/Todo'
import { addTodo } from '@/app/_services/addTodo'

const AddTodo = () => {
  const [todo, setTodo] = useState<TodoType>({
    todo: '',
    completed: false,
    userId: 1,
    
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setTodo({
      ...todo,
      [e.target.id]: value
    })
}

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: TodoType = todo;
    const endpoint: string = 'todos/add';

    const newTodo = await addTodo(endpoint, data);
    //Redirect to todos page
    window.location.href = '/';
  }
  return (
    <>
      <div >
        <h1 className=' text-lg font-bold pb-4 text-center'>Add Todo</h1>
        <form className='flex flex-col space-y-4 justify-center items-center'
          onSubmit={handleSubmit}
        >

          <div>
            <textarea id='todo' className='rounded-md p-2 outline-none text-black' placeholder='Todo' name='todo'
              onChange={(e) => handleChange(e)}
            ></textarea>
          </div>

          <div>
            <input type="checkbox" name="completed" id="completed" onChange={(e) => handleChange(e)} />
            <label htmlFor="completed" className='pl-2'>Completed</label>
          </div>
          <div>
            <button className=' bg-slate-500 text-white rounded-xl px-6 py-2 hover:bg-slate-600'>Add</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddTodo