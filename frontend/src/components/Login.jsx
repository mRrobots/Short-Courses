import React from 'react';
import {useState,useEffect} from 'react'
import { Typography,TextField,Button,Paper,Grid } from '@mui/material';
import {Formik, Form, Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Login({setSignUP,setLogin,wid,users}) {

  const navigate = useNavigate();

  const onSubmit = (values,props) => {
      var check=false;
      console.log(users);
      


      // users.map((user) => {
      //   if(user.user_id === values.username && user.password === values.password){
      //     setLogin(true);
      //     check=true;
      //     navigate("/Home",{state:{user:user}});
      //   }
      //   else if(user.user_id === values.username && user.password !== values.password){
      //     alert("Incorrect password");
      //     document.getElementById("password1").value = '';
      //     check=true;
      //   }
        
      // })

      const temp = {
        "user_id":values.username,
        "password":values.password
      }

      axios
      .post("/users/login",temp)
      .then((res) => {
        // setUsers(res.data);
        console.log(res);
        if(res.data !== "Incorect passowrd"){
          check=true;
          const temp2 = {
            "user_id":values.username,
            "password":values.password,
            "first_name":res.data
          }
          navigate("/Home",{state:{user:temp2}});
          setLogin(true);
        }
        else if(res.data === "Incorect passowrd"){
          alert("Incorrect password");
          document.getElementById("password1").value = '';
          check=true;
        }
      })
      .catch((err) => {
        console.log(err);
      });

      // if(!check){
      //   alert("You don't have an account");
      //   props.resetForm();
      // }
      
      

  }

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required')
    
})

  

  const initialValues ={
    username:'',
    password:'',
}

  return (
    <>
        <div>
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
              {(props)=>
                <Form style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: `${wid}`,
                  margin:' 0 auto',
                  
                }}
                >

                  <Paper evaluation={5} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '10px'
                  }}>

                  <Typography variant="h3" style={{color:'#000000',marginTop:'10px',marginBottom:'10px'}}>Login</Typography>
                 
                  <Field
                  as={TextField}
                  type='text'
                  name = 'username' 
                  label="Person Number" 
                  variant="outlined" 
                  style={{backgroundColor:'#ffffff',color:'#ffffff'}}
                  helperText={<ErrorMessage name="username" style={{color:'#ff0000'}}/>}
                  />

                  <Field
                  id="password1"
                  as={TextField}
                  name="password"
                  type="password"
                  label="Password" 
                  variant="outlined" 
                  style={{backgroundColor:'#ffffff',marginTop:'20px'}}
                  helperText={<ErrorMessage name="password" style={{color:'#ff0000'}}/>}
                  />  
                  
                  
                    <Button variant="contained" type="submit" style={{marginTop:'20px',backgroundColor:'#d9c93b'}}> Login </Button>
                  
                  
                  
                  <Typography variant="Contained" 
                  style={{marginTop:'20px',color:'#d9c93b'}}> Don't have an account? 
                      <Button onClick={()=>{setSignUP(false)}} style={{color:'#d9c93b'}} >
                         Sign up
                      </Button> </Typography>

                      </Paper>
              
                </Form>
              }

            </Formik>

        </div>
        
      
        
        
    </>
  )
}

export default Login