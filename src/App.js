import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './layout/Main';
import AddTask from './components/AddTask/AddTask';
import MyTask from './components/MyTask/MyTask';
import CompletedTask from './components/CompletedTask/CompletedTask';


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
        element: <AddTask></AddTask>,
      },
      {
        path:"/myTask",
        element: <MyTask></MyTask>
      },
      {
        path:"/completedTask",
        element:<CompletedTask></CompletedTask>
      }
    ]

     
  },
]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
          
    </div>
  ); 
}

export default App;
