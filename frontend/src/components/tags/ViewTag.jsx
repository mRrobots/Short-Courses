import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const ViewTag = (props)=>{

    const onDelete = () =>{
        // removing an element on props.i
        props.tagArray.splice(props.i, 1);
    }
    return(
        <div style = {TagStyle}>
            <div style = {DivStyle}>
            {props.tagName}
            </div>
            <div style = {DivStyle}>
            <HighlightOffIcon sx = {{color: 'orange', cursor: 'pointer'}} onClick = {onDelete}/>
            </div>
        </div>
    )
}

const TagStyle = {
    display: 'flex',
    background: 'green',
    width: 'fit-content',
    borderRadius: 10,
    margin: 12
    //height: 'fit-content'
}

const DivStyle = {
    marginLeft: 5,
    paddingTop: 5,
    color: 'white'
}

export default ViewTag;