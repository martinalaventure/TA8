import './App.css';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addTask = (e) => {
    e.preventDefault();
    if(task.trim()) {
      if(editIndex !== null) {
        const updatedTasks = tasks.map((t, i) => i === editIndex ? task : t);
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, task]);
      }
    }
    setTask('');
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  const startEditing = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
  }

  return (
    <div className="App">
      <form onSubmit={addTask}>
        <input type="text" placeholder="Agregar tarea" value={task} onChange={(e) => setTask(e.target.value)} />
        <button type="submit">{editIndex !== null ? 'Actualizar Tarea' : 'Agregar Tarea'}</button>
      </form>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => deleteTask(index)} style={{ marginLeft: '10px' }}>Delete</button>
            <button onClick={() => startEditing(index)} style={{ marginLeft: '10px' }}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;