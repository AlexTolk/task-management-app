import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ActiveSprint from './pages/ActiveSprint';
import AdminPanel from './pages/AdminPanel';

const initialTasks = {
  todo: [{ id: '1', content: 'Task 1' }, { id: '2', content: 'Task 2' }],
  inProgress: [{ id: '3', content: 'Task 3' }],
  done: [{ id: '4', content: 'Task 4' }]
};

const App = () => {
  // State to manage tasks
  const [tasks, setTasks] = useState(initialTasks);

  // Function to add a new task to the 'todo' column
  const addTask = (newTask) => {
    setTasks({
      ...tasks,
      todo: [...tasks.todo, newTask] // Add new task to the 'todo' column
    });
  };

  return (
    <Router>
      <Routes>
        {/* Pass the tasks to Home and ActiveSprint components */}
        <Route path="/" element={<Home tasks={tasks} />} />
        <Route path="/sprint" element={<ActiveSprint tasks={tasks} setTasks={setTasks} />} />

        {/* Pass the addTask function to AdminPanel to allow adding new tasks */}
        <Route path="/admin" element={<AdminPanel addTask={addTask} />} />
      </Routes>
    </Router>
  );
};

export default App;

