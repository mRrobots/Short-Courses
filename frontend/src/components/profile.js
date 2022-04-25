import { Container, Row,Col } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';

function Profile(props){

    const navigator = useNavigate();

    return(
        <div>
            <h4 onClick = {() => {navigator("/MyPortfolio")}}><FaUserCircle />{ ' '+ props.name}</h4>
        </div>
    );
}
export default Profile;