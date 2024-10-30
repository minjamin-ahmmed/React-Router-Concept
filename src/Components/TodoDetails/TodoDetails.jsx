import { useLoaderData } from "react-router-dom";


const TodoDetails = () => {

    const todoDetails = useLoaderData()

    console.log(todoDetails);

    const {id, title, userId} = todoDetails 
    
    return (
        <div>
            <h1> {id} </h1>
            <p>{title} </p>
            <h3>{userId} </h3>
        </div>
    );
};

export default TodoDetails;