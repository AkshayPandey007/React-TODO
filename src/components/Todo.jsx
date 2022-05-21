import React, { useState } from "react";
import styles from "./todo.module.css"
import TodoItem from "./TodoItem.jsx";


const Todo =()=>{

    const[value,setValue] =useState("")
    const [todos,setTodos] = useState([])

    const onDelete =(id)=>{
        let newTodo=todos.filter(todo=>todo.id!==id)
        setTodos(newTodo)
    }
    
    return (
        <div>Todo
            <input value={value} onChange={(e) =>
            {
                setValue(e.target.value)
            }}/>
            <button onClick={()=>
            {
                setTodos([...todos,{value:value,id:Date.now()}])
                setValue("")
            }}>
                Add</button>

<div className={styles.todoList}>
        {todos.map((todo)=>
            <TodoItem key={todo.id} todo={todo} onDelete={onDelete}/>
    )}
          </div>
          </div>
    )
}

export default Todo