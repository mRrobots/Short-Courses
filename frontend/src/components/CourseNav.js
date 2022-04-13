import { Navbar, Container, Nav,Button } from 'react-bootstrap';
import Profile from './profile';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Modal } from 'react-bootstrap';
import { useContext,useState,useEffect } from 'react';
import CardViewList from './CardViewList';
import CreateCourse from './CreateCourse';
import {useLocation,useNavigate } from 'react-router-dom';

function CourseNav(props){
    const [show, setShow] = useState(false);
    const [user,setUser] = useState(false);
    
    const navigate = useNavigate();


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return(
   
    <Navbar  expand="lg" variant="dark" className="my-0 flex" style={{ background: '#003B5C'}}>
    
      <Navbar.Brand href="#" className="my-0"><Profile name={props.user.first_name}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Button variant="outline-light" size="sm" style={{marginRight: '10px'}} onClick={() =>navigate('/Home',{state:{user:props.user}})}>Home</Button>
          <Button variant="outline-light" size="sm" style={{marginRight: '10px'}} onClick={() =>navigate('/Enrolled',{state:{user:props.user}})}>Enrolled</Button>
          <Button variant="outline-light" size="sm" onClick={() =>navigate('/MyCourses',{state:{user:props.user}})}>MyCourses</Button>
          
          
        </Nav>

        {props.modal?(

        <Modal show={show} onHide={handleClose}  dialogClassName="modal-90w">
        <Modal.Header closeButton>CREATE A COURSE HERE!!</Modal.Header>
        <Modal.Body>
        <CreateCourse/>
        </Modal.Body>
        </Modal>

        ):(

          <Modal size="lg" show={show} onHide={handleClose}  >
         <Modal.Header closeButton>FIND YOUR FAVOURATE COURSE HERE!!</Modal.Header>
         <Modal.Body>
          <CardViewList/>
         </Modal.Body>
         </Modal>

        )}

        

        
         
       
        
      </Navbar.Collapse>
    
  </Navbar>

    
   
  );  
}
export default CourseNav;