import SingleTodo from "./SingleTodo";

const TodoList = ({ todos, setTodos }) => {
    return (
        <div>
            <div className="container flex justify-between items-start mt-10">
                <div className="todos">
                    <span className="todos__heading">
                        To-Do
                    </span>
                    {
                        todos.map(todo =>
                            <SingleTodo
                                key={todo._id}
                                todo={todo}
                                todos={todos}
                                setTodos={setTodos}
                            ></SingleTodo>
                        )
                    }
                </div>
                <div className="todos remove">
                    <span className="todos__heading">
                        Ongoing
                    </span>
                    {
                        todos.map(todo =>
                            <SingleTodo
                                key={todo._id}
                                todo={todo}
                                todos={todos}
                                setTodos={setTodos}
                            ></SingleTodo>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default TodoList;