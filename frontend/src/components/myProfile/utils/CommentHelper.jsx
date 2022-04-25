import {Typography, Button} from '@mui/material';
import Action from './Action.jsx';
import ML from "./ml.png";

const CommentHelper = () =>{
    return(
        <div style = {CommentBodyStyle}>
            <div style = {ImageCompStyle}>
            <img src = {ML} width = {235} height = {100} />
            </div>
            <Typography variant="h6" gutterBottom component="div">
                Machine Learning
            </Typography>
            <div style = {ContentStyle}>
                <Typography variant="body2" gutterBottom>
                    This is the best Machine Learning Course. nbhbhgxayxgayx
                    axhabxhaxabyxh
                    xqgxvqyqgxhq uhxuqxhquh hhushqusyq  uqshqusiqjsqu
                    qquuhsq  iqdhqjisqj iqsjqoiqkb uqsi9
                    hsquushuq ijqjhkzl  sxiokxozo qsjiqj
                    dmwdmwmidiod
                    sqnijimqidmi
                    xannqdjqiihqq8d8j
                    sqisjwdjq8dijwmd
                    axajiaimx
                </Typography>
            </div>
            <div style = {ActionsStyle}>
                <Button variant = 'text' >Like</Button>
                <Button variant = 'text' >ViewCourse</Button>
            </div>
        </div>
    )
}

const CommentBodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '35%',
    height: '50vh',
    background: 'white',
    margin: 20,
    alignItems: 'center',
    borderStyle: 'groove',
    


}

const ImageCompStyle = {
    display: 'flex',
    width: '100%',
    height: '30%',
    minHeight: '30%', 
    justifyContent: 'center',
    alignItems: 'center',
    background: '#003b5c'
}

const CourseNameStyle = {

}

const ContentStyle = {
    height: '50%',
    minHeight: '50%',
    display: 'flex',
    overflowY: 'scroll',
    padding: 2
}

const ActionsStyle = {
    display: 'flex',
    flexDirection: 'row'
}

export default CommentHelper;