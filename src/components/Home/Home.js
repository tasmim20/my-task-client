import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assts/ab.webp'
const Home = () => {
    return (
        <div>
         <section className="bg-teal-200 text-gray-100 py-20">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold text-teal-700 leading-none sm:text-6xl">Welcome 
			To
				<span className="text-violet-400 mx-3">Tasks</span>
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 text-teal-800">
				keep Track of important things you need to get done one place
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
			<Link to='/login' className="px-12 py-3 text-lg font-semibold border rounded bg-teal-400 text-gray-900  border-teal-700 text-decoration-none">Get Started</Link>
			
				<Link to='/login' className="px-12 py-3 text-lg font-semibold border rounded bg-violet-400 text-gray-900  border-teal-700 text-decoration-none">Details</Link>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://blog.qualia.com/wp-content/uploads/2019/09/ezgif.com-video-to-gif.gif" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 " />
		</div>
	</div>
</section>
        </div>
    );
};

export default Home;