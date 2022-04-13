import { Container, Row,Col } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

function Profile(props){

    return(
        <div>
            <h4><FaUserCircle/>{ ' '+ props.name}</h4>
        </div>
    );
}
export default Profile;