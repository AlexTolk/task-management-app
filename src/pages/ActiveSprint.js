import KanbanBoard from '../components/KanbanBoard';

const ActiveSprint = ({ tasks, setTasks }) => {

  return (
    <div>
      <h1>Active Sprint</h1>
      <KanbanBoard tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default ActiveSprint;
