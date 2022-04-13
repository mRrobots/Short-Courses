
import { Navbar, Container, Nav,Form, FormControl, Button } from 'react-bootstrap';
import './navigation.css'
import Profile from './profile';
import DataContext from './DataContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function Navigation(props) {
  const dataNav=useContext(DataContext);
  const navigate = useNavigate();
    return ( 
        
    <Navbar  expand="lg" variant="dark" style={{ background: '#003B5C' }}>
    <Container fluid>
      <Navbar.Brand href="#"><Profile name={props.user.first_name}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Button variant="outline-light" style={{marginRight:'15px'}}size="sm" onClick={() =>navigate('/MyCourses',{state:{user:props.user}})}>My Courses</Button>
          <Button variant="outline-light" size="sm" onClick={() =>navigate('/Enrolled',{state:{user:props.user}})}>Enrolled</Button>
         
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(event)=>{dataNav.getValue(event.target.value)}}
          />
          <Button   variant="dark" onClick={(event)=>{dataNav.getValue(event.target.value)}} >Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    );
}
export default Navigation;