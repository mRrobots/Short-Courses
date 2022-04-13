import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useRef} from 'react';
import React from 'react';
import { db } from './firebase-config'
import { collection, addDoc } from 'firebase/firestore'

//import SlidesHint from './SlidesHint';

function CreateSlides({handleClose,wid,user,CourseName,crs_id}){
    const [hint, setHint] = useState(false);

    const showHint = () => {
        setHint(true);
    }

    const titleRef = useRef();
    const notesRef = useRef();
    const quizRef = useRef();
    const resourceLinksRef = useRef();

    const [slideTitle, setSlideTitle] = useState("");
    const [notes, setNotes] = useState("");
    const [quiz, setQuiz] = useState("");
    const [resourceLinks, setResourceLinks] = useState("");
    // const [users, setUsers] = useState([]);
    const slidesCollectionRef = collection(db, 'slides');

    const createSlide = async ()=>{
        titleRef.current.value = null;
        notesRef.current.value = null;
        quizRef.current.value = null;
        resourceLinksRef.current.value = null;
        setSlideTitle("");
        setNotes("");
        setQuiz("");
        setResourceLinks("");
        if(slideTitle !== "" && notes !== ""){
            console.log(user);
            await addDoc(slidesCollectionRef, { 
                Title:slideTitle, 
                Body:notes, 
                Quiz:quiz, 
                ResourceLinks:resourceLinks, 
                CourseId:crs_id, 
                CourseName:CourseName
            });

            console.log("in")
        }
        window.location.reload(false);
        handleClose();
        
    }

    return(
        <div className='modalBackground' style={modalBackground}>
            <div className='modalMAIN' style = {{
                                width: `${wid}`,
                                height: '90%',
                                backgroundColor: 'white',
                                borderRadius: 20,
                                padding: 12
                            }}>
                <div className='closeWindow' style={{flexDirection: 'row-reverse', display: 'flex'}}>
                    {/*<Button onClick={() => closeWin(false)}>X</Button>*/}
                    <CloseIcon sx={{color:"#003b5c", cursor: 'pointer'}} onClick={handleClose} />
                </div>
                <div className='title'>
                    <h1 style = {{textAlign:'center'}}>Add Slide</h1>
                </div>
                <div className='form' style = {formDivStyle}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                        <label >Slide Title</label>
                        <input type='text' required style={textBoxStyle} onChange={(event) => {setSlideTitle(event.target.value)}} ref={titleRef}/>
                        <label >Notes</label>
                        <textarea required style={paraBoxStyle} onChange={(event) => {setNotes(event.target.value)}} ref={notesRef}></textarea>
                        <label >Quiz</label>
                        <textarea style={paraBoxStyle} onChange={(event) => {setQuiz(event.target.value)}} ref={quizRef}></textarea>
                        <label >Resource Links</label>
                        <textarea style={paraBoxStyle} onChange={(event) => {setResourceLinks(event.target.value)}} ref={resourceLinksRef}></textarea>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Button style = {{color: '#daa520',fontWeight: 'bold', fontSize: 20, color: '#003b5c'}} onClick={showHint}>?</Button>
                </div>
                <div style={{display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
                    {hint /*&& <SlidesHint/>*/}
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Button variant="outlined" style={styleButton} onClick={createSlide}>Add</Button>
                </div>
            </div>
        </div>
    )
}

const modalBackground = {
    height : '100%',
    width: '100%',
    backgroundColor: '#003b5c',
    position: 'fixed',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
}

const modalMain = {
    width: '55%',
    height: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 12
}

const textBoxStyle = {
    display: 'block',
    width: '80%',
    borderRadius: 5,
    padding: 11
}

const paraBoxStyle ={
    display: 'block',
    width: '80%',
    borderRadius: 5, 
    padding: 11,
    resize:'none'
    
}

const formDivStyle = {
    display: 'flex',
    flexDirection: 'column',
    
}

const styleButton = {
    margin: 10,
    color: '#daa520',
    fontWeight: 'bold',
    borderColor: '#daa520'
}

export default CreateSlides;