import React, { useState } from 'react';

const AdminPanel = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Function to generate a unique task ID
  const generateTaskId = () => {
    return `task-${Math.floor(Math.random() * 10000)}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validate that the task has a title and description
    if (title.length < 3 || description.length < 5) {
      alert("Title must be at least 3 characters, and description at least 5 characters");
      return;
    }

    // Create a new task object
    const newTask = {
      id: generateTaskId(),
      content: title // In a real case, you'd combine title and description
    };

    // Add the new task to the todo list via the addTask function passed as a prop
    addTask(newTask);

    // Clear the form fields
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
