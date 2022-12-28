import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navber() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
         
          </Nav>
          <Nav className='justify-between'>
           <Link to="/addTask" className='text-decoration-none text-light mx-5 sm:mx-0'>Add Task</Link>
           <Link to="/myTask" className='text-decoration-none text-light mx-5'>My Task</Link>
           <Link to="/completedTask" className='text-decoration-none text-light mx-5'>Completed Task</Link>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navber;