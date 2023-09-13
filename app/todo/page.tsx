
import TodoTable from '@/components/TodoTable'
import React from 'react'

const page = () => {


    const todoData: {
        task: FormDataEntryValue | null,
        desc: FormDataEntryValue | null
    } = {
        task: "",
        desc: ""
    }
    const handleUserResponse = async (e: FormData) => {
        "use server"
        try {
            todoData.task = e.get("task")
            todoData.desc = e.get("desc")
            const res = await fetch("http://localhost:3000/api/todo", {
                method: "POST",
                body: JSON.stringify(todoData),
                headers: {
                    "content-Type": "application/json"
                }
            })
            const result = await res.json()
            console.log(result);

        } catch (error) {

        }
    }


    return <>

        <form action={handleUserResponse}>
            <input type="text" name="task" />
            <input type="text" name="desc" />
            <button >Add todo</button>
            <TodoTable />
        </form>
    </>
}


export default page