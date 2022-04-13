import React,{useState} from 'react';
import { Button, Icon, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { db } from './firebase-config'
import { collection, addDoc, getDocs, where, query, updateDoc, doc } from 'firebase/firestore'

/*
MATHEBULA GIVEN
chech the EmptyPage.jsx to see what this page accepts...

*/


function ViewSlides(props){

    const slidesCollectionRef = collection(db, 'slides');

    const updateText = async ( id, text)=>{
        const userDoc = doc(db, 'slides', id)
        const newFields = {Body: text};
        await updateDoc(userDoc, newFields)
      }

    const getUpdatedBody = async () =>{
        const q = query(slidesCollectionRef, where("id", "==", props.id ))
        const temp_data = await getDocs(q);
        return temp_data
    }


    const handleEdit =()=>{
        setEdit(true);
    };

    const handleEditClose =()=>{
        var text = document.getElementById('textarea').value;
        updateText(props.id,text);
        
        

        // const q = query(slidesCollectionRef, where("id", "==", props.id ))

        // const data = getUpdatedBody()
        // data.docs.map((doc)=>{
        //     //alert(doc.Body)
        // })
        //alert("hi")
        setEdit(false);
        props.getSlides();
        console.log(props.content)
        // const data = getUpdatedBody();
        // console.log(data)
    };

    const openQuiz = () => {
        alert('open quiz');
    }

    const openResources = () => {
        alert('open resources');
    }

    const toNextSlide = () => {
        alert('next slide');
    }

    const [edit,setEdit] = useState(false);
    
    return(
        <div className='modalBackground' style={modalBackground}>
            <div className='modalMain' style={modalMain}>
            <div className='closeWindow' style={{flexDirection: 'row-reverse', display: 'flex'}}>
                    {/* <Button onClick={() => prop.closeSlide(false)}>X</Button> */}
                    <CloseIcon sx={{color:"#003b5c", cursor: 'pointer'}} onClick={props.handleClose} />
                </div>
                <div className='modalHeader' style={modalHeader}>
                    <h1 style={{textAlign: 'center'}}>{props.title}</h1>
                </div>
                {!edit?(
                <div className='modalBody' style={modalBody}>
                    <Typography variant='subtitle1' style={{maxHeight:'90%',overflow:"auto"}}>{props.content}</Typography>
                </div>
                ):(
                <div className='modalBody' style={modalBody}>
                    <textarea id='textarea' style={{width: '100%', height: '100%'}}>{props.content}</textarea>
                </div>
                )

                }

                    <div className='modalFooter' style = {modalFooter}>
                        <div style = {{alignSelf: 'center'}}>

                        {!props.student ?<Button variant="outlined" style = {styleButton} onClick={handleEdit}>Edit</Button>:null}
                        {edit ? <Button variant="outlined" style = {styleButton} onClick = {handleEditClose}>Save</Button>:null }
                        <Button variant="outlined" style = {styleButton} onClick = {openQuiz}>Quiz</Button>
                        <Button variant="outlined" style = {styleButton} onClick = {openResources}>Resources</Button>
                        <Button variant="outlined" style = {styleButton} onClick = {toNextSlide}>Next</Button>

                        

                        </div>
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
}

const modalMain = {
    // width: '55%',
    display: 'flex',
    flexDirection: 'column',
    marginTop:"20px",
    marginLeft:"20%",
    marginRight:"20%",
    height: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 12,
    flex: 1,
}

const modalHeader = {
    height: '10%',
    width: '100%'
}

const modalBody = {
    height: '80%',
    width: '100%',
    padding:"20px",
    textAlign: 'center'
}

const styleButton = {
    margin: 10,
    color: '#daa520',
    fontWeight: 'bold',
    borderColor: '#daa520'
}

const modalFooter ={
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#003b5c',
    display: 'flex',
    alignItems: 'center',
    height:"fit-content",
    padding:5,
}


export default ViewSlides;