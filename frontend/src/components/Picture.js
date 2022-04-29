import React from "react";
import { useDrag } from "react-dnd";
import { IconButton,Button,Card } from "@mui/material";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';


function Picture({ id, url,type,handleClickOpen,handleClickOpen3 }) {

  const temp = [1]

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const divStyle = {
    border: "2px solid #003b5c",
    borderRadius: '16px',
    textAlign: 'center',
    backgroundColor:'#ffffff',
    color: '#003b5c',
    display: 'flex',
    flexDirection: 'row',
  }

  const h5style = {
    marginTop:"2px",
    marginBottom:"2px",
    marginRight:"10px"
  }
  
  return (

     

      <div ref={drag}>
      {temp.map((current) => {
        if(type==="title"){
          return <div ref={drag} style={divStyle}><h5 style={h5style}><DragIndicatorIcon/>Title</h5></div>
        }
        else if(type==="subtitle"){
          return <div ref={drag} style={divStyle}><h5 style={h5style}><DragIndicatorIcon/>Subtitle</h5></div>
        }
        else if(type==="paragraph"){
          return <div ref={drag} style={divStyle}><h5 style={h5style}><DragIndicatorIcon/>paragraph</h5></div>
        }
        else if(type==="image"){
          return <div style={divStyle}><h5 style={{...h5style,marginLeft:'10px'}} onClick={handleClickOpen}>Image</h5></div>
        }
        else if(type==="video"){
          return <div style={divStyle} onClick={handleClickOpen3}><h5 style={{...h5style,marginLeft:'10px'}}>video</h5></div>
        }
      })}
       
  
      </div>
    
  );
}

export default Picture;
