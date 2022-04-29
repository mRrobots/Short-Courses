import {Button,Dialog, DialogTitle, DialogContent, DialogActions,DialogContentText} from '@mui/material';
import * as React from 'react';
import TagsInput from './TagsInput';

/*
 * ONLY This file should be called on the studio
  after creating a course...
 * Pass in course code and name as props
 * Pass in the Open and close useState - an seen on the "useless.jsx"
 * No one should edit anything on these files 
 * By NO ONE I mean Lindokuhle...

*/
const TagsDialog = (props) => {

    let initArray = props.courseName.split(' ');
    let TagArray = new Array();

    for(let i = 0; i < initArray.length; i++){
        TagArray.push('#' + initArray[i]);
    }

    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');

    const onClose = () =>{
        props.close(false);
        console.log(TagArray);
        console.log('OnClose - Send data to the database');
    }

    return(
        <div>
        <Dialog fullWidth={fullWidth} maxWidth={maxWidth} open={props.open} onClose={onClose}>
            <DialogTitle>Add Tags</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Add few tags to your course to improve search appearance. e.g #ShortCourses, #DFMPC
            </DialogContentText>
                <TagsInput tagArray = {TagArray} />
                
            </DialogContent>
            <DialogActions>
                <Button variant = 'outlined' onClick={onClose}>FINISH</Button>
            </DialogActions>
      </Dialog>
        </div>
    )
}

export default TagsDialog;