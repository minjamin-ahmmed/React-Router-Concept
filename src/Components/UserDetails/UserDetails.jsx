import { useLoaderData } from "react-router-dom";


const UserDetails = () => {

    const user = useLoaderData()
    const {name, email, username} = user
    console.log(user);
    
    return (
        <div>
            <h2>The name of the User:{name} </h2>
            <p>Email:{email} </p>
            <p> Address: {user.address.city}</p>
            <p>UserName:{username} </p>
        </div>
    );
};

export default UserDetails;