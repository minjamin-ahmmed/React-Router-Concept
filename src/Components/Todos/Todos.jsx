import { useLoaderData } from "react-router-dom";
import Todo from "../Todo/Todo";


const Todos = () => {

    const todos = useLoaderData()

    return (
        <div>
            <h1> We have to do {todos.length} work </h1>

            {
                todos.map(todo => <Todo key={todo.id} todo={todo}></Todo>)
            }
        </div>
    );
};

export default Todos;