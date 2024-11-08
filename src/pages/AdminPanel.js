import React, { useState } from 'react';

const AdminPanel = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const generateTaskId = () => {
    return `task-${Math.floor(Math.random() * 10000)}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (title.length < 3 || description.length < 5) {
      alert("Title must be at least 3 characters, and description at least 5 characters");
      return;
    }

    const newTask = {
      id: generateTaskId(),
      content: title
    };

    addTask(newTask);

    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h1>Admin Panel - Create a Task</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default AdminPanel;
