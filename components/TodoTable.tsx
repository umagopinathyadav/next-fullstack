"use client"

import React, { useEffect, useState } from 'react'

type TODO = {
    _id?: string,
    task: string,
    desc: string,
    createdAt?: string,
    updatedAt?: string,
    _v?: string
}
const TodoTable = () => {
    const [allTodos, setAllTodos] = useState<TODO[]>([])
    const getTodos = async () => {
        const res = await fetch("/api/todo/", {
            method: "GET",
            headers: {
                "content-Type": "application/json"
            }
        })
        const { result } = await res.json()
        console.log(result)
        setAllTodos(result)

    }
    useEffect(() => {
        getTodos()
    }, [])
    const deleteTodos = async () => {
        const res = await fetch("/api/todo", {
            method: "DELETE",
            headers: {
                "content-Type": "application/json"
            }
        })
        const { result } = await res.json()
        console.log(result)


    }
    useEffect(() => {
        deleteTodos()
    }, [])
    return <>
        {
            allTodos.map(item => <div className='flex gap-5' key={item._id}>
                <h1>{item.task}</h1>
                <button >Delete</button>
            </div>)
        }
    </>
}

export default TodoTable