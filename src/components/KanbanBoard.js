import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './KanbanBoard.css';

const initialTasks = {
  todo: [{ id: '1', content: 'Bake' }, { id: '2', content: 'Cook' }],
  inProgress: [{ id: '3', content: 'Skate' }],
  done: [{ id: '4', content: 'Play' }]
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceCol = tasks[source.droppableId];
    const destCol = tasks[destination.droppableId];
    const [removed] = sourceCol.splice(source.index, 1);
    destCol.splice(destination.index, 0, removed);

    setTasks({
      ...tasks,
      [source.droppableId]: sourceCol,
      [destination.droppableId]: destCol
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban-board">
        {Object.keys(tasks).map((colId) => (
          <Droppable key={colId} droppableId={colId}>
            {(provided) => (
              <div
                className="task-column"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h2>{colId}</h2>
                {tasks[colId].map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                    {(provided) => (
                      <div
                        className="task-item"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {task.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;


