import { Button } from "@mui/material";
import FeedbackDialog from "./FeedbackDialog";
import {useState} from 'react';

const Useless = ()=>{
    const [open, setOpen] = useState(false);
    const onClick = ()=>{
        setOpen(true);
    }
    return(
        <div>
                <Button variant = 'outlined' onClick = {onClick}>OPEN WIN</Button>
                <FeedbackDialog open = {open} close = {setOpen}/>
        </div>
    )
}

export default Useless;