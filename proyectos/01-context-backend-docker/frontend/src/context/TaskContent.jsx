// import 
import { useState } from "react";
import { createContext, useEffect } from "react";

// crear el contexto 
export const TaskContext = createContext();

// HOOKS

// crear el provider del contexto
export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(() => {
        const savedTask = localStorage.getItem('tasks');
        return savedTask ? JSON.parse(savedTask) : [];
    });
    // acciones q puedo realizar con las tareas 
    // crear, eliminar, completar editar
    useEffect(() => {
        localStorage.setItem('task', JSON.stringify(tasks))
    }, [tasks]); 

    // crear
    const addTask = (task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    }

    // borrar
    const deleteTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    }

    // completar
    const completeTask = (taskId) => {
        setTasks((prevTasks) => 
            prevTasks.map((task) => 
                task.id === taskId ? { ...task, completed: !task.completed } : task // Mantener la tarea igual si no es la que se completó
            )
        );
    }
    // editar 
    const editTask = () => {

    }
        return (
        <TaskContext.Provider value={ {tasks, addTask, deleteTask, completeTask} }>
            {children}
        </TaskContext.Provider>
    );
}

/* es lo mismo que { {tasks,addTask} }
{
    {
        tasks:tasks,
        addTask:addTask,
    }
}
*/