import { Container, Row,Col } from "react-bootstrap";
import CardViewList from "./CardViewList";
import Course from "./EnrolledCourse";
import EnrolledNav from "./EnrolledNav";
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import {Fab} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MyCourseList from "./MyCourseList";
import EnrolledAppBar from "./EnrolledAppBar";
import CreateCourse from "./CreateCourse";
import {useLocation,useNavigate } from 'react-router-dom';


const fabStyle = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    backgroundColor: '#d9c93b'
  };



function MyCourses(){

    const [show, setShow] = useState(false);
    const {state} = useLocation();
    console.log(state.user);
    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => {
        navigate('/CreateCourse');

        //setShow(true);
    }

    return(

        <>
        <EnrolledAppBar title="My Courses" modal={true} user={state.user}/>
        <div>
        <MyCourseList user={state.user}/>
            <Fab color="primary" aria-label="add" style={fabStyle} onClick={handleShow}>
                <AddIcon />
            </Fab>
        </div>

        <Modal show={show} onHide={handleClose}  dialogClassName="modal-90w">
        <Modal.Header closeButton>CREATE A COURSE HERE!!</Modal.Header>
        <Modal.Body>
        <CreateCourse user={state.user} handleClose={handleClose}/>
        </Modal.Body>
        </Modal>
        
        </>
        
    );
}
export default MyCourses;

{/* <container fluid>
            
            <Row className="my-0">
                <Col  lg="2" className="my-0 py-0 px-0" border="primary">
                 <EnrolledNav/>
                </Col>
                <Col  lg md="auto" className='my-0 py-0 px-0'>
                <Row fluid className="justify-content-center  my-0" style={{ background: '#003B5C',color:"white",weight:'100vh',margin:'0px' }}>
                <h3 className="d-flex justify-content-center"  style={{ background: '#003B5C',color:"white",weight:'100vh',margin:'0px' }}>
                    My Courses
                </h3>
               </Row>
               <Row  fluid className="justify-content-center  my-0">
                   <Col>
                   <MyCourseList/>
                   </Col>
               </Row>
              
                </Col>
            </Row>
        </container> */}