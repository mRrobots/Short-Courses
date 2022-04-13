import { CssBaseline, Paper, Slide, Typography } from '@mui/material';
import React ,{useState,useEffect} from 'react';
import ViewSlides from './ViewSlides';
import Dialog from '@mui/material/Dialog';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SlideCard({slide,student,id,getSlides}) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  


  return (
    <>
    
    <Paper elavation={5} style={{marginTop:'15px',padding:'6px'}} onClick={handleClickOpen} >
      <CssBaseline/>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Typography variant="h4">{slide.Title}</Typography>
        <Typography variant="subtitle1" noWrap>{slide.Body}</Typography>
      </div>

    </Paper>

    <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <ViewSlides id={id} handleClose={handleClose} title={slide.Title} content={slide.Body} student={student} getSlides={getSlides}/>
        
      </Dialog>
    
   
    </>
  )
}

export default SlideCard