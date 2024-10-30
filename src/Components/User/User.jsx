import { Link } from 'react-router-dom';
import './User.css'

const User = ({user}) => {
    const {id, name, email, phone} = user
    return (
        <div className='container'>
            <h2>Name: {name}</h2>
            <p> Email: {email} </p>
            <p> Phone Number: {phone} </p>
            
            <Link to={`/user/${id}`}>Show Details</Link>
            
        </div>
    );
};

export default User;