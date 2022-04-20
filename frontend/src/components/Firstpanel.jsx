import { Card, CssBaseline, Paper, TextField,Button, Typography } from '@mui/material'
import React, { useState,useRef }from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const PaperStyle = {
    margin:"auto",
    width:"70%",
    backgroundColor:"#003b5c",
    padding:"20px"
}
const CardStyle = {
  margin:"0 auto",
  width:"50%",
  padding:"10px",
  
}

const divStyle = {
  borderRadius:"10px",
  border: "3px solid",
  overflow:"hidden",
  resize:"true",
  padding:"5px",
}

const TextFieldStyle = {
  backgroundColor:"#ffffff",
  borderRadius:"20px",
  textAlign:"center",
  width:"100%",

}

function Firstpanel({handletab}) {

  const [images,setImages] = useState([{name:"pic1"},{name:"pic2"}]);
  const picsRef = useRef();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const pictureshandler = (e) => {
    e.preventDefault();
    const file1 = e.target[0].files[0];
    const courseName = e.target[1].value;
    console.log(file1);
    handleClose();
    // uploadFiles(file1,file2)
  }
    
    

  const addImage = () =>{
    document.getElementById("btnImg").click();
    console.log(document.getElementById("btnImg").event());


  }

  return (
    <div>
        <Paper style={PaperStyle} elevarion={50}>
          <CssBaseline/>
          <Card style={CardStyle} elevarion={10}>

            <div style={{margin: "0 auto",width:"90%"}}>
              <TextField varient="outlined"  label="Course Name"  style={{...TextFieldStyle,marginTop: "20px"}} ></TextField>
              <TextField varient="outlined"  label="Description"  style={{...TextFieldStyle,marginTop: "20px"}} ></TextField>
              
             
              <Button 
                  onClick={handleClickOpen} 
                  size="small" 
                  variant="contained" 
                  type="file" 
                  style={{position:"flex",right: "0px",marginTop: "10px",marginBottom: "10px"}}>Add</Button>
              
              
              <div style={divStyle}>

              {images.length===0?(
                  <Typography>No photos</Typography>
              ):(
                <>
                  {images.map((image)=>{
                    return <img src={image.url} style={{width:"50px",height:"50px"}}/>
                  })}

                </>
              )}

              </div>
              <Button onClick={(event)=>handletab(event,1)}>Next</Button>
              
              
            </div>

            
            


           
            
            
          </Card>
        </Paper>
        
        <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        
      >
        <div style={{backgroundColor:"#ffffff"}}>
        <DialogTitle>{"Add Image"}</DialogTitle>
        <DialogContent>
          <Paper>
            <div style={{margin:"auto",textAlign:"center",padding:"10px"}}>
              <TextField 
                varient="outlined"
                label="Image url"
                />
                <Typography variant="h6">OR</Typography>
                <form onSubmit={pictureshandler} >
           
                      <div>
                      <input type="file" name="images" id="" required class="form-control"  multiple ref={picsRef}/>
                      </div>

                      
                      <Button type="submit" value="Send" variant="dark" >send</Button>
                      
                  
                </form>
            </div>
          </Paper>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
        </div>
      </Dialog>

    </div>
  )
}

export default Firstpanel