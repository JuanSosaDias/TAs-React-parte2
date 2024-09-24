import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
/*
TA 6
Crear una aplicación en ReactJS, donde se le permite al usuario mediante un input ingresar una lista de tareas.
Cada vez que se agrega una nueva tarea, el input debe quedar limpio,
y la aplicación debe volver a renderizarse para mostrar la información actualizada.

TA 7
Utilizando como base la TA 6, agregar (de la manera que le parezca más amigable a nivel de UI), 
una manera de poder borrar una tarea. 

TA 8
Utilizando como base la TA 7, agregar (de la manera que le parezca más amigable a nivel de UI),
una manera de poder editar una tarea.

*/
function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // Estado para el índice de edición

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir el refresco de la página
    if (task.trim() !== '') {
      setTasks([...tasks, task]); // Agregar tarea a la lista
      setTask(''); // Limpiar el input
    }
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); // Eliminar tarea por índice
  };

  const handleEdit = (index) => {
    setTask(tasks[index]); // Establecer la tarea en el input
    setEditIndex(index); // Establecer el índice de edición
  };

  return (
    <div className="App">
      <header className="App-header">
      <h3>TASKS LIST:</h3><br></br>
      <form onSubmit={handleSubmit}>New task:<br></br>
      <input
            type="text"
            value={task}
            onChange={handleInputChange}
            placeholder="Enter your new task"
          />
      <button type='submit'>Add.</button>
      </form>

      <ul>
      {tasks.map((t, index) => (
            <li key={index}>{t}
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleEdit(index)}>Edit</button>
            </li>
          ))}
      </ul>

      </header>
    </div>
  );
}

export default App;
