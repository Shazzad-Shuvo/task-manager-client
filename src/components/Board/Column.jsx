import { Droppable } from 'react-beautiful-dnd';
import "./scroll.css"


const Column = ({ title, tasks, id }) => {
    return (
        <div className='bg-gray-200 rounded-lg p-3 w-64 h-[475px] overflow-y-scroll column'>
            <h2 className='sticky px-8 py-2 text-center rounded-lg font-semibold bg-cyan-200 '>{title}</h2>
            <Droppable droppableId={id}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
                        {...provided.droppableProps}
                        // isDraggingOver={snapshot.isDraggingOver}
                    >
                        {/* Provide your tasks */}
                        {provided.placeholder}
                    </div>
                )

                }
            </Droppable>
        </div>
    );
};

export default Column;