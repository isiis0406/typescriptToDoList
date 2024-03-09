"use strict";
"use client";
import React, { useEffect, useState } from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";
import { getTodos } from '../_services/getTodos';
import { TodoType } from '../_typescript/Todo';

const Todos = () => {
    const [todos, setTodos] = useState<TodoType[]>([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const todosFromServer = await getTodos('todos');
            setTodos(todosFromServer);
        }

        fetchTodos();
    }, []);


    return (
        <div className=''>
            <div className=' text-center'>
                <h1 className='text-4xl font-bold'>My todos</h1>
                <div className='flex justify-center items-center mt-10'>
                    <div className=''>
                        <ul>
                            {Array.isArray(todos) && todos.map((todo) => (
                                <li key={todo.id} className={`bg-slate-500 p-4 rounded-2xl mb-4 flex justify-between items-center w-80 `}>
                                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.todo}</span>
                                <div className=' flex'>
                                    <div className='bg-rose-500 p-2 rounded-2xl cursor-pointer'>
                                        <FaEdit />
                                    </div>
                                    <div className='bg-rose-500 p-2 rounded-2xl ml-2 cursor-pointer'>
                                        <FaTrash />
                                    </div>
                                </div>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todos