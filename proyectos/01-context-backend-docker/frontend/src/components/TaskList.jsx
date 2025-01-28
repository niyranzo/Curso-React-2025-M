import { useContext, useState } from "react"
import { TaskContext } from "../context/TaskContent";

const TaskList = () => {
    const { tasks, deleteTask, completeTask, editTask } = useContext(TaskContext);
    const [ taskEditId, setTaskEditId ] = useState(null);
    const [taskNameInput, setTaskNameInput] = useState("");
    const handleSave = (e, taskId, text) =>{
        e.preventDefault();
        // si tiene texto el input para agg la tarea 
        if(taskNameInput.trim() !== ""){
            editTask(taskId, text);
        }
    }
  return (
    <div className="p-4 bg-gray-200 rounded-lg mt-10 shadow-md">
        <h2 className="text-xl font-bold mb-4">Lista de Tareas</h2>
        {tasks.length === 0 && (
            <p className="text-xl text-gray-800"> No hay tareas</p>
        )}
        <ul>
            {
                tasks.map(task=>(
                    <li key={task.id} className="flex justify-between items-center p-2 mb-2 bg-white rounded-md shadow-md">
                        { task.id === taskEditId  ? 
                            (<input type="text" value={taskNameInput} onChange={e=>setTaskNameInput(e.target.value)} 
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleSave(e, task.id, taskNameInput);
                                    setTaskEditId(null);
                                }
                            }}                            
                            className="flex-1 border-gray-300 rounded-lg px-2 py-1"/>) 
                            : 
                            (<span className={`flex-1 ${task.completed ? "line-through text-gray-600" : ""}`} >{task.title}</span>) 
                        }
                        <button className="px-3 py-1 bg-blue-600 hover:bg-blue-900 rounded mr-2 text-white" onClick={() => completeTask(task.id)}>Completar</button>
                        <button className="px-3 py-1 bg-pink-600 hover:bg-pink-900 rounded mr-2 text-white" onClick={() => {                            
                            //poner el texto de la tarea en el input 
                            setTaskNameInput(task.title);
                            //para saber q tarea modifico
                            setTaskEditId(task.id);
                            }}>Editar</button>
                        <button className="px-3 py-1 bg-red-600 hover:bg-red-900 rounded mr-2 text-white"  onClick={() => deleteTask(task.id)}>Eliminar</button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default TaskList