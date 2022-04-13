import { Card,Button,Carousel,Modal,Nav } from 'react-bootstrap';
import { Container, Row,Col } from "react-bootstrap";
import { useNavigate,useLocation } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable, getStorage } from "@firebase/storage"
import { useState, useEffect } from 'react';



function Course(props){

  const [imageURL, setImageURL] = useState('');

  useEffect(async() =>  {

    const storage = getStorage();
    await getDownloadURL(ref(storage, `Pictures/${props.image1}`))
    .then((url) => {
      console.log(url)
      setImageURL(url);
    })

  },[setImageURL])


  const { state } = useLocation();

  const navigate = useNavigate();
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
       <Col></Col>
       <Col className="my-2 mx-2"> <Button variant="dark" onClick={()=>{
                navigate(`/Slides/${props.name}`,{state:{
                  student:true,
                  user:props.user,
                  crs_id:props.crs_id
                }});
      
              }}
              >GET STARTED</Button> </Col>
       <Col></Col>
       
       </Row>  
     </Container>
    </Card.Body>
    
  </Card>
    </>
   </Container>
 );
}
export default Course