import React from 'react';

const Home = ({ tasks }) => {
  return (
    <div>
      <h1>Task Dashboard</h1>
      <h2>Tasks</h2>
      {tasks.todo.map((task) => (
        <div key={task.id}>{task.content}</div>
      ))}
      <h2>Uncompleted Tasks</h2>
    </div>
  );
};

export default Home;
