import {React,useState,useEffect} from 'react';
import Login from './Login';
import Signup from './Signup';
import Signupp from './Signupp';
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios"

const tmp_users = [
  {id: 1,
    username: '2355285',
    password: 'ictpASS0711'},
  {id: 2,
    username: '2355286',
    password: 'ictpASS0712'},
  {id: 3,
    username: '2355287',
    password: 'ictpASS0713'},
  {id: 4,
    username: '23552858',
    password: 'ictpASS0714'},
  
]

const divStyle = {
  backgroundColor: '#003b5c',
  width: '65%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  justifyContent: 'center',
  margin:0,
  top: 0,
  bottom: 0
}



function Rightpanel({setLogin,wid}) {

  const [users,setUsers] = useState([]);

  const addUser = (user) =>{
    setUsers([...users,user]);
  }

  useEffect(() => {
    // setUsers(tmp_users);
    axios
      .get("/users")
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      
  }, [setUsers]);


  const [signUp,setSignUp] = useState(true);
  const greaterThan375 = useMediaQuery("(min-width:415px)");

  return (

    <div style={{
      backgroundColor: '#003b5c',
      width: `${wid}`,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      justifyContent: 'center',
      margin:0,
      top: 0,
      bottom: 0
    }}>
        {greaterThan375?(
            <>
              {signUp?(
              <Login 
                setSignUP={setSignUp} 
                wid={'40%'} 
                setLogin={setLogin} 
                users={users} 
                
              />
              ):(
              <Signupp 
                wid={'40%'} 
                setSignUp={setSignUp}
                users={users}
                addUser={addUser}
              />) }
            </>
        ):(
            <>
            {signUp?(<Login 
              setSignUP={setSignUp} 
              wid={'80%'} 
              setLogin={setLogin}
              users={users} 
            />
            ):(
            <Signupp 
              wid={'80%'} 
              setSignUp={setSignUp}
              users={users} 
              addUser={addUser}
              />) }
            </>
        )}
        
        
    </div>
  )
}

export default Rightpanel