import { Draggable } from 'react-beautiful-dnd';


const Task = ({ task, index }) => {

    

    return (
        <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    // isDragging={snapshot.isDragging}

                >
                    <div className='mt-2 bg-green-200'>
                        <div>
                            <p className='flex justify-start px-2 pt-2'>
                                <small>
                                    #{task.id}
                                    {"  "}
                                </small>
                            </p>
                            <h2 className='flex justify-center p-2'>{task.title}</h2>
                        </div>
                    </div>
                    {provided.placeholder}
                </div>
            )}
        </Draggable>
    );
};

export default Task;