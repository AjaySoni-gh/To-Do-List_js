import React, { useState } from 'react'; 

function ToDoList() {
  const [tasks, setTasks] = useState(['Eat Breakfast', 'Take a shower', 'Walk a dog']);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== '') {
      setTasks((t) => [...t, newTask]);
      setNewTask('');
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskup(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          ADD
        </button>
      </div>
      <ol className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="task">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskup(index)}>
              up
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
//@ajay soni
export default ToDoList; // Export the ToDoList component
