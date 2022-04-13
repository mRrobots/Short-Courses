import { Card,Button, Row, } from 'react-bootstrap';
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage"
import { storage } from "./firebase-config"
import { useState, useRef } from 'react';
import createID from './GenCourseID';
import axios from 'axios';



function CreateCourse(props){

    //var prog = 0

    const [progress, setProgress] = useState(0);
    const [courseName, setCourseName] = useState("");

    const picsRef = useRef();
    const courseNameRef = useRef();
    const emailRef = useRef();
    const courseDescrptionRef = useRef();

    const pictureshandler = (e) => {
        e.preventDefault();
        const file1 = e.target[0].files[0];
        const file2 = e.target[0].files[1];
        const courseName = e.target[1].value;
        console.log(courseName);
        uploadFiles(file1,file2)
      }

    
    var courseId = createID(props.user.user_id, courseName);
      const uploadFiles = (file1,file2) => {
        if(!file1 || !file2) return;
        //courseId = createID(props.user.username, courseName);
        console.log(courseId)
        const storageRef1 = ref(storage, `/Pictures/${courseId}Pic1`);
        const uploadTask1 = uploadBytesResumable(storageRef1, file1);

        const storageRef2 = ref(storage, `/Pictures/${courseId}Pic2`);
        const uploadTask2 = uploadBytesResumable(storageRef2, file2);

        var temp = {
          "user_id":props.user.user_id,
          "crs_name":courseName,
          "crs_description":document.getElementById("desId").value,
          "crs_id":courseId,
          "picture_1":courseId+"Pic1",
          "picture_2":courseId+"Pic2"
        }

        


        axios.post('CreateCourse',temp)
        .then((response) =>{
          if(response.data === "1 record inserted"){
            props.handleClose();
            window.location.reload(false);
          }

        })
        .catch((error) =>{
          console.log(error)
        })

        uploadTask1.on("state_changed", (snapshot) => {
            const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100);

            setProgress(prog);
          }, 
            (err) => console.log(err),
            () => {
              getDownloadURL(uploadTask1.snapshot.ref).then((url) => console.log(url))
            }
          )
          picsRef.current.value = null;
          courseNameRef.current.value = null;
          emailRef.current.value = null;
          courseDescrptionRef.current.value = null;

      }

    return(
        <Card style={{ width: '30rem', color:'white',background: '#003B5C'}}>
       <Card.Body>
       <form id="post" enctype="multipart/form-data" onSubmit={pictureshandler} >
           
           <Row>
           <label>Two pictures </label>
           <input type="file" name="images" id="" required class="form-control"  multiple ref={picsRef}/>
           </Row>

           <Row>
           <label>Course Name</label>
           <input type="text" name="name" id="nameId" onChange={(event) => {setCourseName(event.target.value)}} ref={courseNameRef}/>
           </Row>

           {/* <Row>
           <label>Email</label>
           <input type="email" name="email" ref={emailRef}/>
           </Row> */}
          <Row>
          <label>Course Description</label>
          <textarea name="description" id="desId" rows="4" ref={courseDescrptionRef}/>
          </Row>
          <Row>
          <label>  </label>
          <Button type="submit" value="Send" variant="dark" >send</Button>
          </Row>
      
    </form>
    <h3>Uploaded {progress} %</h3>
       </Card.Body>
      </Card>
    );
}
export default CreateCourse;