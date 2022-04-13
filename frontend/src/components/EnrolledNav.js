import { Navbar, Container, Nav,Button } from 'react-bootstrap';
import Profile from './profile';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Modal } from 'react-bootstrap';
import { useContext,useState} from 'react';
import CreateCourse from './CreateCourse';
import { useNavigate } from 'react-router-dom';


function EnrolledNav(){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();
  return(
   
    <Navbar  expand="lg" variant="dark" className="flex-column my-0" style={{ background: '#003B5C', maxHeight: '100vh' }}>
    <Container fluid className="flex-column ">
      <Navbar.Brand href="#"><Profile/></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll"className="flex-column">
        <Nav
          className="me-auto my-2 my-lg-0 flex-column"
          style={{ height: '100vh' }}
          navbarScroll
        >
           <Button variant="outline-light" size="sm" onClick={()=>navigate('/Home')}>Home</Button>
          <Nav.Link href="/Enrolled"><Button variant="outline-light" size="sm">Enrolled</Button>{' '}</Nav.Link>
          <Nav.Link href="/MyCourses"><Button variant="outline-light" size="sm">MyCourses</Button>{' '}</Nav.Link>
          <Nav.Link ><Button variant="outline-light" size="sm" onClick={handleShow}><h4><AiOutlinePlusCircle/></h4></Button>{' '}</Nav.Link>
        </Nav>
        <Modal show={show} onHide={handleClose}  dialogClassName="modal-90w">
         <Modal.Header closeButton>CREATE A COURSE HERE!!</Modal.Header>
         <Modal.Body>
          <CreateCourse/>
         </Modal.Body>
         
       </Modal>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>

    
   
  );  
}
export default EnrolledNav;