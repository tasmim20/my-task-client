import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import {GoogleAuthProvider} from 'firebase/auth';
import { toast } from 'react-hot-toast';

const Login = () => {

    const [success, setSuccess] = useState(false);
    const {signIn, providerLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate();
    const location =  useLocation();
    const from = location.state?.from?.pathname || '/'
  
  
  
    const handleGoogleSignIn = () =>{
      providerLogin(googleProvider)
      .then(result =>{
          const user = result.user;
          console.log(user);
          navigate(from, {replace: true});
      })
      .catch(error => console.error(error))
    }
    
    const handleSubmit = event =>{
      event.preventDefault();
      setSuccess(false);
      
  
      const form =event.target;
      const email = form.email.value;
      const password = form.password.value;
  
      signIn(email, password)
      .then(result =>{
          const user = result.user;
          console.log(user);
          setSuccess(true);
          form.reset();
          toast.success('successfully login')
          // alert('successfully login')
          navigate(from, {replace: true});
      })
      .catch(error => console.error(error))
    }
  
         


    return (
        <div className='d-flex justify-center align-center  bg-teal-500'>
<div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white text-black-100 my-16">
	<h1 className="text-3xl font-bold text-center text-teal-800">Login Now</h1>
	<form novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid" onSubmit={handleSubmit}>
   
		<div className="space-y-1 text-sm">
			<label for="username" className="block text-black"> Your Email</label>
			<input type="email" name="email" id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-teal-100 text-black focus:border-violet-400" />
		</div>
		<div className="space-y-1 text-sm">
			<label for="password" className="block text-black">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-teal-100 text-black focus:border-violet-400" />
            <label className="label text-purple-700">
          {success && <p>Successfully login to the account</p>}
          </label>
			<div className="flex justify-end text-xs ">
				<a rel="noopener noreferrer" href="#">Forgot Password?</a>
			</div>
		</div>
		<button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-teal-400">Login</button>
	</form>

    <hr />
		<button onClick={handleGoogleSignIn} className="block w-full p-3 text-center rounded-sm text-gray-900 bg-teal-400">Login with Google</button>
	<p className="text-xs text-center sm:px-6 text-red">Don't have an account?
		<Link to='/signUp ' className='font-bold text-teal-800'>Register</Link>
	</p>
</div>
        </div>
    );
};

export default Login;