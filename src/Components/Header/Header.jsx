import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>This is Header Page</h2>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contactUs'}>ContactUs</Link>
                <Link to={'/users'}>Users</Link>
                <Link to={'/posts'}>Posts</Link>
                <Link to={'/todo'}>ToDo</Link>
                

                
            </nav>
        </div>
    );
};

export default Header;