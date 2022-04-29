import {Button, Icon, Typography, Dialog, DialogTitle, DialogContent, DialogActions} from '@mui/material';
import {useState} from 'react';
import TagsDialog from './TagsDialog';

const Useless = () =>{
    let courseName = 'Machine Learning';
    const [open, setOpen] = useState(false);

    const onOpen = () =>{
        console.log('open')
        setOpen(true);
    }
    return(
        <div>
            <Button variant = 'outlined' onClick = {onOpen}>Open Dialog</Button>
            <TagsDialog open = {open} close = {setOpen} courseName = {courseName}/>
        </div>
    )
}

export default Useless;