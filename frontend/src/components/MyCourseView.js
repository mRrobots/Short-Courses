import { Navbar, Container, Nav,Form, FormControl, Button } from 'react-bootstrap';
import {BrowserRouter as  Router,Routes,Route,} from 'react-router-dom';
import Profile from './profile';
import { Card,Carousel,Modal } from 'react-bootstrap';
import { Row,Col } from "react-bootstrap";
import Course from './Course'
import { Grid } from "@mui/material";
import { useNavigate,useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { storage } from "./firebase-config"
import { getDownloadURL, ref, uploadBytesResumable, getStorage } from "@firebase/storage"



const user = {
  id:'1',
  email:'235528@students.wits.ac.za',
}

function MyCourseView(props){

    const { state } = useLocation();

    const navigate = useNavigate();

    var namee = props.name;

    const [imageURL, setImageURL] = useState('');

    useEffect(async() =>  {

      const storage = getStorage();
      await getDownloadURL(ref(storage, `Pictures/${props.image1}`))
      .then((url) => {
        console.log(url)
        setImageURL(url);
      })

    },[setImageURL])


  return(

    

  <Container>
      <>

               



<Card className="d-flex my-2 mx-3 " style={{ background: '#b5aeb2'  }}>
  <Card.Body className="d-flex">
      <img variant="bottom" src={imageURL} width="150px" height="150px"  />
        <Container>
            <Row>
            <Card.Text>
          {props.name}
        </Card.Text>
            </Row>
            <Row>
            <Card.Text>
          {props.description}
        </Card.Text>
            </Row>
          <Row>

            
          
          <Col className="my-2 mx-2"> <Button variant="dark" onClick={()=>{
            navigate(`/Slides/${props.name}`,{state:{
              student:false,
              user:props.user,
              crs_id:props.crs_id
            }});
  
          }}>VIEW</Button></Col>
          <Col className="my-2 mx-2"><Button variant="dark">EDIT</Button></Col>
          <Col className="my-2 mx-2"><Button variant="dark">DELETE</Button></Col>
          
          </Row>  
        </Container>
  </Card.Body>

</Card>

</>
  </Container>
    
  );
}
export default MyCourseView;


