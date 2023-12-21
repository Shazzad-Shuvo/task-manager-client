import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';


const Board = () => {

    const [todo, setTodo] = useState([]);
    const [ongoing, setOngoing] = useState([]);
    const [complete, setComplete] = useState([]);


    return (
        <DragDropContext>
            <h2 className='text-center'>Task Board</h2>
            <div className='flex flex-row justify-between items-center'>
                <Column title={"To-Do"} tasks={"Incomplete"} id={"1"}/>
            </div>
        </DragDropContext>
    );
};

export default Board;