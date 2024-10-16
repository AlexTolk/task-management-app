import { useState } from "react";

const AdminPanel = () => {
    const [task, setTask] = useState({title: '', assignee: '', description: ''});

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(task)
    }

    return (
        <div>
            <h1>Admin Panel</h1>
            <h3>Create a task</h3>
            <form>
                <label>Task title:</label>
                <input placeholder="input the task" type="text" value={task.title} onChange={(e) => setTask({...task, title: e.target.value})} />

                <label>Who will do the task?</label>
                <input placeholder="input employee name" type="text" value={task.assignee} onChange={(e) => setTask({...task, assignee: e.target.value})} />

                <label>Task description</label>
                <textarea placeholder="Describe the task in detail" value={task.description} onChange={(e) => setTask({...task, description: e.target.value})} />

                <button type="submit" onSubmit={handleSubmit()}>Create task</button>
            </form>
        </div>
    );
};

export default AdminPanel;