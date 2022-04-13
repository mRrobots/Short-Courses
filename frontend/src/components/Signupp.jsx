import { CssBaseline,Grid, Typography,TextField, Button,Paper,IconButton } from '@mui/material';
import { Field, Formik,Form,ErrorMessage } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Logo from "./Logo";
import axios from "axios";
import { useNavigate } from 'react-router-dom';





const fieldStyle={
    marginTop: '10px',
}

const btnStyle={
    marginTop: '25px',
    backgroundColor: '#d9c93b',
    color: '#ffffff',
}

const typoStyle={
    color: '#000000',
    marginLeft:'30px'

}




function Signupp({setSignUp,wid,addUser}) {

    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        email: Yup.string().required('Required'),
        password: Yup.string().min(8, 'Password should be at least 8 characters long.').required('Required'),
        cpassword: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required')

        
    })

    const onSubmit = (values,props) => {
        alert("All Good!");
        setSignUp(true);
        console.log(values);
        
        var temp = {
            "first_name":values.name,
            "user_id":values.email,
            "password":values.password,
        }

        axios.post('/users/register',temp)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })

        addUser(temp)
        
    }
    
    
    
    
    const initialValues ={
        name:'',
        email:'',
        password:'',
        cpassword:'',//confirm password
    }

  return (
    <>
        <Grid component='container'>
            <CssBaseline/>

            {!wid=="80%"?(<Logo/>):null}
            

            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                {props=>
                    <Form>
                        <Paper elevation={3} style={{
                            padding: '15px',
                            margin:'auto',
                            display: 'flex',
                            flexDirection:'column',
                            width: `${wid}`,
                        }}>
                            <div style={{display: 'flex', flexDirection:'row',textAlign: 'center',marginBottom: '10px'}}>
                                <IconButton aria-label="delete" onClick={()=>setSignUp(true)} >
                                    <ArrowBackIcon />
                                </IconButton>
                                <Typography variant="h3" style={typoStyle}>Sign up</Typography>
                            </div>
                
                            <Field
                            as={TextField}
                            name = 'name' 
                            label="First Name" 
                            variant="outlined" 
                            style={{backgroundColor:'#ffffff',color:'#ffffff'}}
                            helperText={<ErrorMessage name="name" style={{color:'#ff0000'}}/>}
                            />
                            <Field
                            as={TextField}
                            type="text"
                            name = 'email' 
                            label="email" 
                            variant="outlined" 
                            style={fieldStyle}
                            helperText={<ErrorMessage name="email" style={{color:'#ff0000'}}/>}
                            
                            />
                            <Field
                            as={TextField}
                            type="password"
                            name = 'password' 
                            label="Password" 
                            variant="outlined" 
                            style={fieldStyle}
                            helperText={<ErrorMessage name="password" style={{color:'#ff0000'}}/>}
                            
                            />
                            <Field
                            as={TextField}
                            type="password"
                            name = 'cpassword' 
                            label="Confirm password" 
                            variant="outlined" 
                            style={fieldStyle}
                            helperText={<ErrorMessage name="cpassword" style={{color:'#ff0000'}}/>}
                            
                            />

                            <Button variant="contained" type="submit" style={btnStyle}>Sign Up</Button>

                        </Paper>
                        

                    </Form>
                }
            </Formik>
            

        </Grid>
    </>
  )
}

export default Signupp