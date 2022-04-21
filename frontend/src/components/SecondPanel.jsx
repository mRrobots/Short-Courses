import { Typography,Button,AccordionSummary,AccordionDetails,Accordion,Paper,TextField, Slide,Dialog,DialogTitle,IconButton } from '@mui/material'
import React,{useState,useRef,useEffect, useReducer} from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Add from '@mui/icons-material/Add';
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import "../App.css";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { getDownloadURL, ref, uploadBytesResumable,uploadBytes,getStorage } from "@firebase/storage"
import { storage } from "./firebase-config"
import { async } from '@firebase/util';

const reducer = (state, action) =>{
  switch(action.type){
    case "populateBoard":
      if (action.payload.length===0){
        return [{id:0,
          type:'title',
          content:''
          }]
      }
      return action.payload;
    case "add":
      return [...state,action.payload]
    default: return state;
  }
}





const tmp_chapters = [
  {
    id: 1,
    name:"Chapter 1",
    slides: [
      {
        id:1,
        name:"Slide 1",
        body:[
              {
                id:1,
                type:"title",
                content:"Title for slide 1 chapter 1"
              },
              {
                id:2,
                type:"subtitle",
                content:"Subtitle slide 1 chapter 1"
              },
              {
                id:3,
                type:'image',
                src:''
              },
              {
                id:4,
                type:"paragraph",
                content:"paragraph slide 1 chapter 1"
              }
            ]
      },
      {
        id:2,
        name:"Slide 2",
        body:[
          {
            id:1,
            type:"title",
            content:"Title for slide 2 chapter 1"
          },
          {
            id:2,
            type:"subtitle",
            content:"Subtitle slide 2 chapter 1"
          },
          {
            id:4,
            type:"paragraph",
            content:"paragraph slide 2 chapter 1"
          }
        ]
      },
      {
        id:3,
        name:"Slide 3",
        body:[
          {
            id:1,
            type:"title",
            content:"Title for slide 3 chapter 1"
          },
          {
            id:2,
            type:"subtitle",
            content:"Subtitle slide 3 chapter 1"
          },
          {
            id:4,
            type:"paragraph",
            content:"paragraph slide 3 chapter 1"
          }
        ]
      }
    ]
  
  },
  {
    id: 2,
    name:"Chapter 2",
    slides: [
      {
        id:1,
        name:"Slide 1",
        body:[
          {
            id:1,
            type:"title",
            content:"Title for slide 1 chapter 2"
          },
          {
            id:2,
            type:"subtitle",
            content:"Subtitle slide 1 chapter 2"
          },
          {
            id:4,
            type:"paragraph",
            content:"paragraph slide 1 chapter 2"
          }
        ]
      },
      {
        id:3,
        name:"Slide 3",
        body:[
          {
            id:1,
            type:"title",
            content:"Title for slide 3 chapter 2"
          },
          {
            id:2,
            type:"subtitle",
            content:"Subtitle slide 3 chapter 2"
          },
          {
            id:4,
            type:"paragraph",
            content:"paragraph slide 3 chapter 2"
          }
        ]
      },
      
    ]
  
  },
  {
    id: 3,
    name:"Chapter 3",
    slides: [
      {
        id:1,
        name:"Slide 1",
        body:[
          {
            id:1,
            type:"title",
            content:"Title for slide 1 chapter 3"
          },
          {
            id:2,
            type:"subtitle",
            content:"Subtitle slide 1 chapter 3"
          },
          {
            id:4,
            type:"paragraph",
            content:"paragraph slide 1 chapter 3"
          }
        ]
      }
    ]
  
  },

]

const PictureList = [
  {
      id:1,
      type:"title",
      url:'https://media.istockphoto.com/photos/hands-forming-a-heart-shape-with-sunset-silhouette-picture-id636379014?k=20&m=636379014&s=612x612&w=0&h=Zb6EobVr_BR278tpANKvKzfcQMIz-P_2Tv3XVXZufAM='
  },
  {
      id:2,
      type:"subtitle",
      url:'https://cdn.pixabay.com/photo/2018/09/30/16/26/sun-3713835__340.jpg'
  },
  {
      id:3,
      type:"paragraph",
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHSDP-1o0igyDWFDnUI2Rl7jQdR5edw1n6jvO40Y--PfmBGaRA-p_HJGcyQy8w3FU06u4&usqp=CAU'
  },{
    id:4,
    type:"video",
    url:'https://cdn.pixabay.com/photo/2018/09/30/16/26/sun-3713835__340.jpg'
  },
  {
    id:5,
    type:"image",
    url:'https://cdn.pixabay.com/photo/2018/09/30/16/26/sun-3713835__340.jpg'
  }

];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const leftDiv={
      position:"fixed",
      padding:'10px',
      textAlign: 'center',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'scroll',
      backgroundColor:"#003b5c",
      minWidth:"30%",
      maxWidth:"30%",
      height:"100vh"}

const textareaStyle = {
  resize:'both',
  width:'100%'
}

const rightDiv={
      position: 'fixed',
      marginLeft:'30%',
      padding:'40px',
      textAlign: 'center',
      color: 'white',
      overflowY: 'scroll',
      minWidth:"70%",
      maxWidth:"70%",
      height:"100vh"
    } 
const boardSty ={
      minWidth: '100%',
      maxWidth: '100%',
      resize: "true",
      overflowY: "scroll",
      minHeight: '400px',
      maxHeight: '450px',
      border: '3px solid black'}

function SecondPanel(props) {

  const picsRef = useRef();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [chapters,setChapters] = React.useState([]);
  const [openStudio,setOpenStudio] = React.useState(false)
  const [board,despatch] = useReducer(reducer,[])
  const [current,setCurrent] = useState([])
  const [addSlideBool,setAddSlideBool] = useState(false);
  const [currChap,setCurrChap] = useState('');
  const [ppictureURL,SetPictureURL] = useState('no pictures to see here');
  let tmpTitle ='title';
  

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    despatch({type:'add',payload: pictureList[0]})
  };

  const populateBoard = (slideNum,chap)=> {
    

    var temp = [];
    var curr = chapters.length !== 0 ? chapters[chap]:null;
    if(curr !== null ){
      
        var currSlideBody = curr.slides[slideNum].body;
        currSlideBody.map((curr)=>{
      
          if(curr.type==="title"){
            var lindo = {
              id:1,
              type: curr.type,
              content: curr.content
            }
            temp.push(lindo);

          }
          else if(curr.type==="subtitle"){
            var lindo = {
              id:2,
              type: curr.type,
              content: curr.content
            }
            temp.push(lindo);

          }
          else if(curr.type==="paragraph"){
            var lindo = {
              id:3,
              type: curr.type,
              content: curr.content
            }
            temp.push(lindo);

          }
          
        })
    }
    return (temp)
  }

  const populateBoardd = ()=> {
    var temp = [];
    var curr = chapters.length !== 0 ? chapters[0]:null;
    if(curr !== null ){
        if (curr.slides.length!==0){
        var currSlideBody = curr.slides[0].body;
        
        currSlideBody.map((curr)=>{
          if(curr.type==="title"){
            var lindo = {
              id:1,
              type: curr.type,
              content: curr.content
            }
            temp.push(lindo);

          }
          else if(curr.type==="subtitle"){
            var lindo = {
              id:2,
              type: curr.type,
              content: curr.content
            }
            temp.push(lindo);

          }
          else if(curr.type==="paragraph"){
            var lindo = {
              id:3,
              type: curr.type,
              content: curr.content
            }
            temp.push(lindo);

          }
          
        })
      }
   
    }

    console.log(temp)
    
    return (temp);

  }

  const saveSlide = ()=>{
    var tt = []
    board.map((tool,index)=>{
        tt.push({...tool,content:document.getElementById(index).value});
        console.log(tool)
    });

    let curr  = chapters[current[0]];

    let newSlide = {
      id:curr.slides.length,
      name:"newSlide",
      body:tt
    }

    let newSlides = [...curr.slides,newSlide];

    let newChapter = {...curr,slides:newSlides};
    let gg = chapters.filter(chapter=> chapter.id !== curr.id)

    setChapters([...gg,newChapter]);
    despatch({type:'populateBoard',payload:[{id:0,
      type:'title',
      content:''
      }]});


  }

  useEffect(() => {
    var tmp = chapters.length===0?[]:[0,chapters[0].slides.length !== 0 ? 0:null ];
    setCurrent(tmp);
    despatch({type:'populateBoard',payload:populateBoardd()});
  },[despatch]);

  

  
  
  const handleClickOpen = () => {
    tmpTitle=board[0].content;
    setOpen(true);
    
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    var tmp = document.getElementById("ChapterName").value;
    setCurrChap(tmp);
    if(tmp!==''){
      var temp ={
        id:chapters.length+1,
        name:tmp,
        slides:[]
      }
      setChapters([...chapters,temp]);
      var tmp = [chapters.length,null ];
      console.log(chapters);
      setCurrent(tmp);
      setOpen2(false);
      document.getElementById("ChapterName").value='';
    setOutcomes([]);
    } 
    
  }

  

  const handleClose = () => {
    var tmp_url = document.getElementById("imageURL").value;
    if (tmp_url!==''){

    despatch({type:"populateBoard",payload: [...board, {
      id:5,
      type:"image",
      url:tmp_url
    }]})
    document.getElementById("imageURL").value='';

  }

    else{
      despatch({type:"populateBoard",payload: [...board, {
        id:5,
        type:"image",
        url:ppictureURL
      }]})
      
    }
    setOpen(false);
  };

  //const pictureRef = useRef();

  const upAnddown = async (chapterName,title,file1)=>{
    const storage = getStorage()
    const storageRef1 = ref(storage, `/Courses/${props.courseName}/${chapterName}/${title}/${file1.name}`);
    await uploadBytes(storageRef1, file1);
    picsRef.current.value = null
    let g =  await getDownloadURL(ref(storage, `/Courses/${props.courseName}/${chapterName}/${title}/${file1.name}`));
    //console.log(g)
    return g;

  }

  const pictureshandler = async(e, chapterName, title) => {
    e.preventDefault();
    const file1 = e.target[0].files[0];
    //const courseName = e.target[1].value;
    console.log(file1);
    handleClose();
    // uploadFiles(file1,file2)
    //alert(title)
    // const storageRef1 = ref(storage, `/Courses/${props.courseName}/${chapterName}/${title}/${file1.name}`);
    // await uploadBytes(storageRef1, file1);
    const pictureURL = await upAnddown(chapterName,title,file1);
    console.log(pictureURL)
    alert(pictureURL);
    SetPictureURL(pictureURL);
    console.log(ppictureURL);
    despatch({type:"populateBoard",payload: [...board, {
      id:5,
      type:"image",
      url:pictureURL
    }]})

  //   uploadTask1.on("state_changed", (snapshot) => {
  //     const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100);

  //     setProgress(prog);
  //   }, 
  //     (err) => console.log(err),
  //     () => {
  //       getDownloadURL(uploadTask1.snapshot.ref).then((url) => console.log(url))
  //     }
  //   )
  }
  
  const [outcomes,setOutcomes] = useState([]);

  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <div style={leftDiv}>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <IconButton onClick={(event)=>props.handletab(event,0)}>
            <ArrowBack style={{color: 'white'}}/>
          </IconButton>
          <Typography variant="h4">Course Content</Typography>
        </div>
        
        <Button variant="contained" onClick={handleClickOpen2} style={{color:"#003b5c",backgroundColor:"#ffffff",margin:"10%",borderRadius:"20px",fontSize:"15px"}}>New Chapter</Button>
        <div style={{marginLeft:"10px",marginRight:"10px"}}>
          
          {chapters.length!==0?(

            <>
            {chapters.map((chapter,indexx) => {
            return <Accordion key={indexx}>
                    <AccordionSummary
                      id={indexx}
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      
                      
                    >
                      <div style={{display: 'flex', flexDirection: 'row'}}>
                      <Typography>{chapter.name}</Typography>
                      <IconButton onClick={()=>{
                        //setAddSlideBool(!addSlideBool);
                        setCurrent([indexx,null])
                        document.getElementById(indexx).click();
                        }} style={{width: '3px',height: '3px',marginTop:'5px',marginLeft:"150px"}}>
                        <Add/>
                      </IconButton>

                      </div>
                      
                    </AccordionSummary>
                    <AccordionDetails>
                      
                        {chapter.slides.length===0?(
                        <>
                        <Typography variant='h6'>No Slides yet</Typography>

                        </>
                        ):(
                          <>
                           {chapter.slides.map((slide,index) =>{
                           return <Button  variant="text" id='slideBtn'  onClick={(event)=>{
                              setCurrent([index,indexx])
                              event.preventDefault();
                              despatch({type:'populateBoard',payload:populateBoard(index,indexx)});
                              console.log(board.length)
                              alert(current)
                            
                           }} style={{borderBottom: "1px solid black",cursor:"pointer",width:"100%",color:'black'}}>{slide.name}</Button>
                         })}
                         {addSlideBool?(
                            <div style={{display: "flex",flexDirection: 'row'}}>
                              <TextField/>
                              <Button size="small"></Button>

                            </div>
                         ):(
                           null

                         )}

                          </>
                        )}

                        
                      
                    </AccordionDetails>
                  </Accordion>
          })}
            </>

          ):(
            <>
              <div style={{backgroundColor:"#ffffff",padding:'10px',border:"3 ##003b5c solid",borderRadius:"15px",textAlign: 'center'}}>
                <Typography variant="h4" style={{color:"#003b5c"}}>No chapters</Typography>
              </div>
            </>
          )}
      
    </div>

      </div>
      <div style={rightDiv}>
        {chapters.length!==0?(
          <>

      <div style={{
             minWidth: '100%', 
             border: '3px solid black',
             display: 'flex',
             flexdirection: 'row',
             backgroundColor: '#003b5c',
            padding: '5px'
           }}>
        {PictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} type={picture.type} handleClickOpen={handleClickOpen} />
        })}
        <Button variant='outlined' id='idd'  onClick={(event)=>{
              event.preventDefault();
              saveSlide();


          } }>Save</Button>
        
        
        
      </div>
      
      <div style={boardSty} ref={drop} >

          <>

        {board.map((picture,index) => {
          if(picture.type==="title"){
            return <textarea autoFocus  key={index} id={index} type={picture.type} style={{...textareaStyle,fontSize: "25px",textAlign:'center'}} >{picture.content}</textarea>
          }
          if(picture.type==="subtitle" ){
            return <textarea autoFocus key={index} angaz={picture.type} id={index} type={picture.type} style={{...textareaStyle,fontSize: "20px"}}>{picture.content}</textarea>
          }
          if(picture.type==="paragraph"){
            return <textarea autoFocus key={index} angaz={picture.type} id={index} type={picture.type} style={{...textareaStyle,fontSize: "15px"}}>{picture.content}</textarea>
          }
          if(picture.type==="image"){
            return (
                  <div style={{resize: "both",overflow: "auto"}}>
                        <img style={{border: "2px solid black",maxWidth: "95%",maxHeight: "95%"}} key={index} id={index} angaz={picture.type} type={picture.type} src={picture.url} ></img>
                  </div>
            )

             
          }
          if(picture.type==="video"){
            return <textarea key={index} id={index} type={picture.type} ></textarea>
          }
          
          }
        )}
  
          </>
          
        

        

      </div>
      </>
      ):(
        <>
        <Typography variant="h1" style={{color:'#000000'}}>Studio Closed</Typography>
        </>
      )}

      </div>
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
                id="imageURL"
                />
                <Typography variant="h6">OR</Typography>
                <form onSubmit={(event)=>{
                  //alert(tmpTitle)
                  pictureshandler(event,currChap,tmpTitle)
                }} >
           
                      <div>
                      <input type="file" name="images" id="" required class="form-control"  multiple ref={picsRef}/>
                      </div>

                      
                      <Button type="submit" value="Send" variant="dark" >send</Button>
                      
                  
                </form>
            </div>
          </Paper>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
        </div>
      </Dialog>

      <Dialog
        open={open2}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose2}
        aria-describedby="alert-dialog-slide-descriptionn"
        
      >
        <div style={{backgroundColor:"#ffffff"}}>
        <DialogTitle>{"New Chapter"}</DialogTitle>
        <DialogContent>
          <Paper style={{background:"#003b5c",color:"#ffffff",textAlign:"center",padding:'10px',display:"flex",flexDirection:"column"}}>
            <div  style={{backgroundColor:"#ffffff",margin:'auto',padding:'8px',borderRadius:'10px',width:"80%"}}>
            <TextField variant="outlined" id="ChapterName" label="ChapterName" style={{width:"100%"}}/>

            </div>
            

            <Typography variant="h5"> Please specify the learning outcomes of this chapter</Typography>
            <Button onClick={(event) =>{
              event.preventDefault();
              setOutcomes([...outcomes,outcomes.length])
              }}>Add</Button>
            <div style={{width:"90%",padding:'10px',border: '3px solid #003b5c',margin:'auto',borderRadius:'15px',backgroundColor:"#ffffff"}}>
              <ul>
                {outcomes.map((item,index)=>{
                  return <li style={{color: '#000000'}}>
                    <div>
                      <textarea rows="1" id={index} foc style={{minWidth:"95%",resize:"both",border:"0px solid"}} autoFocus/>
                    </div>
                    
                    </li>
                })}
              </ul>
            </div>
            

            
            
          </Paper>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2}>NEXT</Button>
          <Button onClick={(event)=>{
            document.getElementById("ChapterName").value='';
            setOpen2(false)
            setOutcomes([])}}>CANCEL</Button>
        </DialogActions>
        </div>
      </Dialog>
    </div>
  )
}

export default SecondPanel