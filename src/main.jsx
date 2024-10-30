import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Components/Header/Header.jsx';
import About from './Components/About/About.jsx';
import Home from './Components/Home/Home.jsx';
import Contacts from './Components/Contacts/Contacts.jsx';
import Users from './Components/Users/Users.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDetails from './Components/PostDetails/PostDetails.jsx';
import Todos from './Components/Todos/Todos.jsx';
import TodoDetails from './Components/TodoDetails/TodoDetails.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

    children: [
      {
        path:"/about",
        element: <About></About>
      },
      {
        path:"/contactUs",
        element:<Contacts></Contacts>
      },
      {
        path:"/users",
        loader:() => fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },

      {
        path:"/user/:userId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>
      },
      {
        path:"/posts",
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
        path:"/post/:postId",
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<PostDetails></PostDetails>
      },
      {
        path:"/todo",
        loader: () => fetch('https://jsonplaceholder.typicode.com/todos'),
        element:<Todos></Todos>
      },
      {
        path:"/todo/:todoId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`),
        element:<TodoDetails></TodoDetails>
      }

      
    ]
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
