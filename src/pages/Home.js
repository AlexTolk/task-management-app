import React from 'react';

const Home = ({ tasks }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Todo</h2>
      {tasks.todo.map(task => (
        <p key={task.id}>{task.content}</p>
      ))}
      <h2>In Progress</h2>
      {tasks.inProgress.map(task => (
        <p key={task.id}>{task.content}</p>
      ))}
      <h2>Done</h2>
      {tasks.done.map(task => (
        <p key={task.id}>{task.content}</p>
      ))}
    </div>
  );
};

export default Home;
