import {TextField, Button} from '@mui/material';
import {useState} from 'react';
import ListTags from './ListTags';

const TagsInput = (props)=>{
    const [input, setInput] = useState('');

    const onChange = event => {
        setInput(event.target.value);
    }

    const onAdd = ()=>{
        if(input != ''){
            let newTag = '';
            if(input[0] == '#'){
                newTag = input;
            }else{
                newTag = '#' + input;
            }
            // TO NOT DUPLICATE TAGS...
            let flag = true;
            for(let i = 0; i < props.tagArray.length; i++){
                if(props.tagArray[i] == newTag){
                    // DO NOT ADD
                    flag = false;
                    break;
                }
            }
            if(flag){
                props.tagArray.push(newTag);
            }
        setInput('');
        console.log(props.tagArray);
        }
    }

    return(
        <div style = {{display: 'flex', flexDirection: 'column'}}>
        <div style = {InputStyle}>
            <TextField value = {input} onChange = {onChange} id="newtag" label="#NewTag" variant="outlined" />
            <Button variant = 'outlined' style = {{marginLeft: 12}} onClick = {onAdd}>Add</Button>
        </div>
        <div>
            <ListTags tagArray = {props.tagArray}/>
        </div>
        </div>
    )
}

const InputStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 12
    //background: 'red'
}

export default TagsInput;