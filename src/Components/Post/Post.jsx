import { Link } from "react-router-dom";


const Post = ({post}) => {

    console.log(post);
    
    const {id, title, userId} = post
    
    return (
        <div className="container">
            <h2>Id: {id}</h2>
            <p>Title: {title} </p>
            <p>UserID: {userId} </p>

            <Link to={`/post/${id}`}>Show More Details</Link>
            
        </div>
    );
};

export default Post;