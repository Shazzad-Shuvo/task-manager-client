import { useState } from "react";
import InputField from "./InputField";

const TaskBoard = () => {

    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [ongoing, setOngoing] = useState([]);
    const [complete, setComplete] = useState([]);

    const handleAdd = (e) => {
        e.preventDefault();
    
        if (todo) {
          setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
          setTodo("");
        }
      };

    return (
        <div>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}></InputField>
        </div>
    );
};

export default TaskBoard;