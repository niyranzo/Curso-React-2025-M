import react from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className='text-xl font-bold -text-center mb-4'>
        Gestor de Tareas con contexto
      </h1>
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default App;
