import React from 'react';
import {useState,useEffect} from 'react'
import Leftpanel from './Leftpanel';
import Rightpanel from './Rightpanel';
import Course from './Course';
import { Grid } from '@mui/material';
import useMediaQuery from "@mui/material/useMediaQuery";
import { makeStyles } from "@mui/styles";
import Home from './home';

const useStyles = makeStyles((theme) =>({

}))

const Homepage = () => {
  const classes = useStyles();
  const [Login,setLogin] = useState(false);

  
  
  const greaterThan375 = useMediaQuery("(min-width:415px)");
  const [open, setOpen] = React.useState(greaterThan375);

  useEffect(() => {
    setOpen(greaterThan375);
  }, [greaterThan375]);

  

  

  return (

    <Grid style={{display: 'flex', flexDirection: 'row',height:'100vh'}}>
     {greaterThan375?(
      <>
          <Leftpanel style={{width: '35%', height:`${window.innerHeight}px`, display: { xs: "flex", md: "none" }}}/> 
          <Rightpanel setLogin={setLogin} wid={"65%"} style={{width: '65%', height: '100vh'}}/>
      </> 
     ):(<Rightpanel setLogin={setLogin} wid={"100%"} style={{width: '100%', height: '100vh'}}/>)}
    </Grid>

  

    
   
  )
}

export default Homepage



//   <>
//   {Login?(
//      <Home/>
//   ):(
//     <Grid style={{display: 'flex', flexDirection: 'row',height:'100vh'}}>
//     {greaterThan375?(
//       <>
//     <Leftpanel style={{width: '35%', height:`${window.innerHeight}px`, display: { xs: "flex", md: "none" }}}/> 
//     <Rightpanel setLogin={setLogin} wid={"65%"} style={{width: '65%', height: '100vh'}}/>
//     </> 
//     ):(<Rightpanel setLogin={setLogin} wid={"100%"} style={{width: '100%', height: '100vh'}}/>)}
// </Grid>
//   )}
//   </>