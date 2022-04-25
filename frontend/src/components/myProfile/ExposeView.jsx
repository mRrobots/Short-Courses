import { TextField } from '@mui/material';
import CommentHelper from './utils/CommentHelper';
import CourseHelper from './utils/CourseHelper';

const ExposeView = () =>{
   

    return(
        <div style = {ExposeViewStyle}>
            <p style = {TextStyle}>Expose View</p>
            <div style = {BioDiv}>
            <TextField label="Biography" multiline fullWidth/>
            </div>
            <div style = {SubTitleStyle}>
                <p style = {TextStyle}>Completed Courses</p>
            </div>
            <div style = {CompCoursesStyle}>
                <CourseHelper/>
                <CourseHelper/>
                <CourseHelper/>
                <CourseHelper/>
                <CourseHelper/>
                <CourseHelper/>
                <CourseHelper/>
                <CourseHelper/>
                
            </div>
            <div style = {SubTitleStyle}>
                <p style = {TextStyle}>Pushed Comments</p>
            </div>
            
            <div style = {CommentsStyle}>
                <CommentHelper/>
                <CommentHelper/>
                <CommentHelper/>
                <CommentHelper/>
                <CommentHelper/>
                <CommentHelper/>
                
            </div>
                    
        </div>
    )
}

const SubTitleStyle = {
    width: '85%', 
}

const ExposeViewStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#edf4f5'
}

const BioDiv = {
    width: '85%', 
    margin: 20
}

const CompCoursesStyle = {
    width: '85%', 
    //borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    overflowY: 'scroll', 
    flexWrap: 'wrap'
    //borderStyle: 'solid',
    //borderColor: 'gray'
    //overflow: 'hidden'
}

const CommentsStyle = {
    width: '85%', 
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    //borderStyle: 'solid',
    overflowX: 'scroll'
    //flexWrap: 'wrap'
   
    
}

const TextStyle = {
    alignSelf: 'center', 
    fontWeight: 'bold'
}



export default ExposeView;