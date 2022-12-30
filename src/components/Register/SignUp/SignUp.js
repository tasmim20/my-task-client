import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const handleSignUp = event =>{
       event.preventDefault();
       setSuccess(false);
       const form = event.target;
       const name = form.name.value;
       const email = form.email.value;
       const password = form.password.value;
       console.log(name, email, password);

             // validate password
             if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
               setPasswordError('Please provide at least two uppercase');
               return;
           }
           if (password.length < 6) {
               setPasswordError('Please should be at least 6 characters.');
               return;
           }
           if (!/(?=.*[!@#$&*])/.test(password)) {
               setPasswordError('Please add at least one special character');
               return
           }
           setPasswordError('');

       createUser(email, password)
       .then(result =>{
           const user = result.user;
           console.log(user);
           setSuccess(true);
           form.reset();
           navigate('/');
       })
             
       .catch(error => {
         console.error(error)
         setPasswordError(error.message)
         
       })
    }
     


    return (
        <div className='d-flex justify-center align-center  bg-teal-500'>
<div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white text-black-100 my-16">
	<h1 className="text-3xl font-bold text-center text-teal-800">Register Here</h1>
	<form onSubmit={handleSignUp} novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
    <div className="space-y-1 text-sm">
			<label for="username" className="block text-black">Your Name</label>
			<input type="text" name="name" id="username" placeholder="Your Name" className="w-full px-4 py-3 rounded-md border-teal-700 bg-teal-100 text-black focus:border-violet-400" />
		</div>
		<div className="space-y-1 text-sm">
			<label for="username" className="block text-black"> Your Email</label>
			<input type="email" name="email" id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-teal-100 text-black focus:border-violet-400" />
		</div>
		<div className="space-y-1 text-sm">
			<label for="password" className="block text-black">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-teal-100 text-black focus:border-violet-400" />
            <p className='text-error'>{passwordError}</p>
       {success && <p className='text-black'>User Created Successfully.</p>}
		</div>
		<button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-teal-400">Register</button>
	</form>

	<p className="text-xs text-center sm:px-6 text-red">Already have an account?
	<Link to='/login' className='font-bold text-teal-800'>Login</Link>
	</p>
</div>
        </div>
    );
};

export default SignUp;