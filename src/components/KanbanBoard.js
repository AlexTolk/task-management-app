import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './KanbanBoard.css';

const KanbanBoard = ({ tasks, setTasks }) => {

  tasks = tasks || {};
  const onDragEnd = (result) => {
      const { source, destination } = result;
    if (!destination) return;

    const sourceCol = Array.from(tasks[source.droppableId]);
    const destCol = Array.from(tasks[destination.droppableId]);
    const [movedTask] = sourceCol.splice(source.index, 1);
    destCol.splice(destination.index, 0, movedTask);


    setTasks({
      ...tasks,
      [source.droppableId]: sourceCol,
      [destination.droppableId]: destCol
    });
  };
  console.log('Current Tasks:', tasks);
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
                  <Draggable key={task.id.toString()} draggableId={task.id.toString()} index={index}>
                    {(provided) => {
                      console.log('Draggable ID:', task.id);  
                      return (
                        <div
                          className="task-item"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {task.content}
                        </div>
                      );
                    }}
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
