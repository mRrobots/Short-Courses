import {Button,Dialog, DialogTitle, DialogContent, DialogActions,DialogContentText} from '@mui/material';
import * as React from 'react';
import RatingPanel from './RatingPanel';
import UploadImagePanel from './UploadImagePanel';

/*
    * Has bugs 
 */

const FeedbackDialog = (props)=>{
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');

    const onClose = ()=>{
        console.log('close dialog');
        props.close(false);
    }

    return(
        <div>
            <Dialog fullWidth={fullWidth} maxWidth={maxWidth} open={props.open} onClose={onClose}>
                <DialogTitle>
                    Feedback
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please rate the course and upload an image showing how you feel about the content covered.
                    </DialogContentText>
                    <RatingPanel/>
                    <UploadImagePanel/>
                </DialogContent>
                <DialogActions>
                    <Button variant = 'outlined' onClick = {onClose}>DONE</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default FeedbackDialog;