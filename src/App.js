import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import ActiveSprint from './pages/ActiveSprint';
import AdminPanel from './pages/AdminPanel';

const initialTasks = {
  todo: [{ id: 'asmnccksadjcn', content: 'Task 1' }, { id: '1209eujjhb', content: 'Task 2' }],
  inProgress: [{ id: 'almscn19826', content: 'Task 3' }],
  done: [{ id: 'aksbccah97216hgu', content: 'Task 4' }]
};

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (newTask) => {
    setTasks({
      ...tasks,
      todo: [...tasks.todo, newTask]
    });
  };

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sprint">Active Sprint</Link></li>
          <li><Link to="/admin">Admin Panel</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home tasks={tasks} />} />
        <Route path="/sprint" element={<ActiveSprint tasks={tasks} setTasks={setTasks} />} />
        <Route path="/admin" element={<AdminPanel addTask={addTask} />} />
      </Routes>
    </Router>
  );
};

export default App;
