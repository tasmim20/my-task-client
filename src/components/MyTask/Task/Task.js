import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';


const Task = ({work}) => {
   
    const {task, photo, message, _id} = work;


    const handleDelete = _id =>{
        const agree = window.confirm(`Are you sure you want to delete this task`);
        // console.log(agree)
         if(agree){
            // console.log('deleting user with id:',_id)
            fetch(`https://my-task-server-chi.vercel.app/tasks/${_id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    toast.error('Task Deleted Successfully')
                  
                }
            });
         }
    }

    return (
        <div>
         <div className='card  bg-dark shadow-lg mb-5'>
          <div className="col shadow-lg ">
    <div className="card">
      <img  src={photo} style={{height:'250px'}} className="card-img-top" ></img>
      <div className="card-body d-flex justify-content-between py-3">
        <h5 className="card-title fw-bold text-dark">{task}</h5>
        <Link to='/completedTask'><Button variant="success">Completed</Button></Link>
        <Link onClick={() => handleDelete(_id)}  className='btn btn-danger'>Delete</Link>
       

      
      </div>
    </div>
  </div>

     </div>
            
        </div>
    );
};

export default Task;