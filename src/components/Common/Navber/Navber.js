import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

function Navber() {
  const{user, logOut} = useContext(AuthContext);

  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" bg="teal" variant="dark" className='bg-teal-900'>
      <Container>
        <Navbar.Brand href="#home" className='font-bold text-black'>Taskapp</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
         
          </Nav>
          <Nav className='justify-between'>
           {    
          user?.uid ? 
          <>
          <Link to="/addTask" className='text-decoration-none text-light mx-5 sm:mx-0'>Add Task</Link>
           <Link to="/myTask" className='text-decoration-none text-light mx-5'>My Task</Link>
           <Link to="/completedTask" className='text-decoration-none text-light mx-5'>Completed Task</Link>
      
          <button onClick={logOut} className="btn btn-success ">Log Out</button>
          </>
         
          :
          <>
          <Link to="/login" className='text-decoration-none text-light mx-5'>Login</Link>
           <Link to="/signUp" className='text-decoration-none text-light mx-5'>Register</Link>
          </>
  
          }
<div className='mx-3'>          <label for="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">

<span className="relative">
  <input id="Toggle1" type="checkbox" className="hidden peer" />
  <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
  <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
</span>

</label></div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    

  );
}

export default Navber;