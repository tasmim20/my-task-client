
import { useLoaderData } from 'react-router-dom';
import Task from './Task/Task';

const MyTask = () => {
 
const works = useLoaderData()
  
    return (
        <div className='container  mt-28 mb-44 '>
           <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 gx-5'>
    {
            works.map(work => <Task key={work._id} work={work}></Task>)
          }
    </div>
        </div>
    );
};

export default MyTask;