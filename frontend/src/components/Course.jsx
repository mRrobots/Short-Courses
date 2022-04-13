import { Paper,SpeedDial,SpeedDialIcon,Backdrop,Fab, Button,Dialog,Slide, Typography, dialogClasses } from '@mui/material';
import React from 'react';
import { useState,useEffect } from "react";
import CourseAppBar from './CourseAppBar';
import axios from 'axios';
import SlideCard from './SlideCard'
import AddIcon from '@mui/icons-material/Add';
import ViewSlides from './ViewSlides';
import CreateSlides from './CreateSlides';
import useMediaQuery from "@mui/material/useMediaQuery";
import { db } from './firebase-config'
import { collection, addDoc, getDocs, where, query } from 'firebase/firestore';
import {useParams,useLocation} from 'react-router-dom';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function Course(props) {

    
    const params = useParams();

    //console.log(params.id);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        console.log("close");
        setOpen(false);
      };

    const [slides,setSlides] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [student,setStudent] = useState(false);
    const { state } = useLocation();
    
    console.log(state);
    // setStudent(state.student);

    const slidesCollectionRef = collection(db, 'slides');

    const getSlides = async() => {
       

          const q = query(slidesCollectionRef, where("CourseId", "==", state.crs_id),where("CourseName", "==", params.id))
          

          const data = await getDocs(q);
         setSlides(data.docs.map((doc,index)=>{
                return {...doc.data(), id: doc.id}
        }))

        
      }

    useEffect(() => {

        
    
        getSlides()
    
      }, [setSlides])
    

    const greaterThan375 = useMediaQuery("(min-width:415px)");

    const [openn, setOpenn] = React.useState(greaterThan375);

    useEffect(() => {
        setOpenn(greaterThan375);
    }, [greaterThan375]);

    
    
    
    
    const divStyle = {
        display:'flex',
        flexDirection: 'column',
        textAlign:'centre'
        
    }

    const paperStyle = {
        marginTop:'80px',
        margin:'auto',
        width:'100%',
        padding: '20px',
        backgroundColor: '#003b5c',
        

    }

    const fabStyle = {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
        backgroundColor: '#d9c93b'
      };


  return (
    
    <div style={{marginLeft:'auto',marginRight:'auto',marginTop:'80px', width:'90%'}}>

        <Paper style={paperStyle}>
            <CourseAppBar CourseName={params.id}/>

            <div style={divStyle}>

                {slides.length===0?(
                    <Typography variant='h3' style={{color:"#ffffff"}}>No course content</Typography>
                ):null}
        
                {slides.map(slide => (slide!== null)?<SlideCard id={slide.id} slide={slide} student={state.student} getSlides={getSlides}/>:null)}
                

            </div>

            {!state.student?
            (<Fab color="primary" aria-label="add" style={fabStyle} onClick={handleClickOpen}>
                <AddIcon />
            </Fab>)
            :null}


        </Paper>

        <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
          {greaterThan375?(
          <CreateSlides handleClose={handleClose} wid={'55%'} crs_id={state.crs_id} student={state.student} user={state.user} CourseName={params.id}/>
          ):(
          <CreateSlides handleClose={handleClose} wid={'90%'} crs_id={state.crs_id} student={state.student} user={state.user} CourseName={params.id}/>
          )}
        
        
      </Dialog>
    
   </div>
  )
}

export default Course