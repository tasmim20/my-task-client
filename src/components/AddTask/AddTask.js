import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


function AddTask() {
  const{user} = useContext(AuthContext);

  const handleSetTask = event =>{
    event.preventDefault();
    const form = event.target;
    const taskName = form.taskName.value;
    const photo = form.photoURL.value;
    const message = form.message.value;

    const task = {
      User:user.displayName,
      Email:user.email,
      task: taskName,
      photo,
      message
    }
    console.log(task)
    
    fetch('https://my-task-server-chi.vercel.app/tasks', {
      method:'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.acknowledged){
        toast.success("Task set successfully")
        form.reset();
      }
    })
    .catch(err => console.log(err))

  }
     
     
  return (

<div>
<section className="p-6 dark:text-gray-100 bg-teal-200">
	<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
		<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-teal-500">
			{/* <span className="block mb-2 dark:text-violet-400">Add Task</span> */}
			<h1 className="text-5xl font-extrabold text-teal-700">Add Task</h1>
			<p className="my-8 text-teal-900">
      keep Track of important things you need to get done one place.you need to get done one place
			</p>
			<form novalidate="" action="" className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid"  onSubmit={handleSetTask}>
				<div className='mb-2'>
					<label for="name" className=" text-teal-800 font-bold mb-2">Your Task</label>
					<input name='taskName' id="name" type="text" placeholder="Your Task" className="w-full py-3 ps-2 text-black rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700" />
				</div>
				<div className='mb-2'>
					<label for="message" className=" text-teal-800 font-bold mb-2">Description of Task</label>
					<input id="message" type="textarea" name='message' as="textarea" placeholder="Description" className="w-full ps-2 text-black py-4 rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700" />
				</div>
        <div className='mb-2'>
					<label for="photoUrl" className=" text-teal-800 font-bold mb-2">Task Photo</label>
					<input id="photoURL" name='photoURL' type='photoURL' placeholder="Task Photo"  className="w-full ps-2 text-black py-3 rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700" />
				</div>
        <button variant="success" type="submit" className='bg-teal-800 w-full text-black py-3 mt-3 rounded-lg'>Submit
      </button>
			</form>
		</div>
    <img src="https://cdn.dribbble.com/users/4241563/screenshots/11874468/media/7796309c77cf752615a3f9062e6a3b3d.gif" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
	</div>
</section>
</div>
  );
}

export default AddTask;