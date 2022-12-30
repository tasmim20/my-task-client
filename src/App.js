import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './layout/Main';
import AddTask from './components/AddTask/AddTask';
import MyTask from './components/MyTask/MyTask';
import CompletedTask from './components/CompletedTask/CompletedTask';
import Login from './components/Register/Login/Login';
import SignUp from './components/Register/SignUp/SignUp';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './Routes/PrivateRoute/PrivateRoute';


function App() {
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:"/addTask",
        element: <PrivateRoute><AddTask></AddTask></PrivateRoute>,
      },
      {
        path:"/myTask",
        element: <MyTask></MyTask>,
        loader: () => fetch('https://my-task-server-chi.vercel.app/tasks')
      },
      {
        path:"/completedTask",
        element:<PrivateRoute><CompletedTask></CompletedTask> </PrivateRoute>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/signUp",
        element: <SignUp></SignUp>
      }
    ]

     
  },
]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
          <Toaster></Toaster>
    </div>
  ); 
}

export default App;
