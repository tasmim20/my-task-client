import { FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddTask() {

  const handleSetTask = event =>{
    event.preventDefault();
    const form = event.target;
    const taskName = form.taskName.value;
    const fileName = form.file.value;
    const message = form.message.value;

    const task = {
      task: taskName,
      fileName,
      message
    }
    console.log(task)
    fetch('http://localhost:5000/tasks', {
      method:'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.acknowledge){
        alert("Task set successfully")
        form.reset();
      }
    })
    .catch(err => console.log(err))

  }
     
     
  return (
 <div className='flex justify-content-center alight-items-center'>
     <Form className='flex justify-content-center ' onSubmit={handleSetTask}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Task</Form.Label>
        <Form.Control name='taskName' type="text" placeholder="Task Name"
        className='w-50' required />
       
      </Form.Group>
      <Form.Label>Your Task photo</Form.Label>
<Form.Control name='file' type="file" placeholder="Password" id='customFile' className='w-50' required/>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Description of your task</Form.Label>
        <FloatingLabel
        controlId="floatingTextarea"
        label="Comments"
        className="mb-3"
      >
        <Form.Control name='message' as="textarea" placeholder="Description" className='w-50' required />
      </FloatingLabel>
    
      </Form.Group>
   
      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
 </div>
  );
}

export default AddTask;