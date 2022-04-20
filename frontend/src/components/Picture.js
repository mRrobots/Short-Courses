import React from "react";
import { useDrag } from "react-dnd";
import { IconButton,Button,Card } from "@mui/material";


function Picture({ id, url,type,handleClickOpen }) {

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
  }

  const h5style = {
    marginTop:"2px",
    marginBottom:"2px",
    marginLeft:"10px",
    marginRight:"10px"}
  
  return (
      <div ref={drag}>
      {temp.map((current) => {
        if(type==="title"){
          return <div style={divStyle}><h5 style={h5style}>Title</h5></div>
        }
        else if(type==="subtitle"){
          return <div style={divStyle}><h5 style={h5style}>Subtitle</h5></div>
        }
        else if(type==="paragraph"){
          return <div style={divStyle}><h5 style={h5style}>paragraph</h5></div>
        }
        else if(type==="image"){
          return <div style={divStyle}><h5 style={h5style} onClick={handleClickOpen}>Image</h5></div>
        }
        else if(type==="video"){
          return <div style={divStyle}><h5 style={h5style}>video</h5></div>
        }
      })}
       
  
      </div>
    


  
    // <img
    //   ref={drag}
    //   src={url}
    //   width="150px"
    //   style={{ border: isDragging ? "5px solid pink" : "0px", width:"150px" }}
    // />
  );
}

export default Picture;
