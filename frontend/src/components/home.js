import { Container, Row,Col } from "react-bootstrap";
import CardViewList from "./CardViewList";
import Navigation from "./navigation";

function Home(props) {
    return ( 
        <Container fluid className="justify-content-center">
            <Row>
                <Navigation user={props.user}/>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="2">  </Col>
                <Col md="auto"><h2 data-testid="explore">EXPLORE</h2></Col>
                <Col xs lg="2">  </Col>
            </Row>
            <Row>
                <CardViewList/>
            </Row>
        </Container>
    );
}
export default Home;