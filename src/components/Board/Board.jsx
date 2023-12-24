import { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';


const Board = () => {

    const [todo, setTodo] = useState([]);
    const [ongoing, setOngoing] = useState([]);
    const [complete, setComplete] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                setComplete(json.filter((task) => task.completed));
                setTodo(json.filter((task) => !task.completed));
            })
    }, [])

    const handleDragEnd = (result) =>{
        const {destination, source, draggableId} = result;

        if(source.droppableId === destination.droppableId) return;
    }


    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <h2 className='text-center'>Task Board</h2>
            <div className='flex flex-row justify-between items-center'>
                <Column title={"To-Do"} tasks={"Incomplete"} id={"1"} />
            </div>
        </DragDropContext>
    );
};

export default Board;