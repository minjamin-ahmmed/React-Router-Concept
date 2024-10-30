import { Link } from "react-router-dom";


const Todo = ({todo}) => {


    const {title, userId} = todo
    
    return (
        <div className="container">
            <h2>{userId} </h2>
            <p> {title} </p>

            <Link to={`/todo/${userId}`}> Show Details </Link>
        </div>
    );
};

export default Todo;