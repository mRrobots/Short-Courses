import { useContext,useEffect } from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import CardView from './cardView';
import DataContext from './DataContext';
import axios from 'axios';

function CardViewList(props){

  

 const dataCard=useContext(DataContext);
 const MyDatabase=dataCard.Data;
 console.log(MyDatabase);

 


    return(
        <Container>
        <Row>
         
         {MyDatabase.map(data => <Col><CardView
           image1={data.picture_1}
           image2={data.picture_1} 
           name={data.crs_name}
          /></Col>)}
         
        </Row>
        
        
         </Container>
    );
}
export default CardViewList;