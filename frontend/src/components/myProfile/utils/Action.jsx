import { Button } from "@mui/material";

const Action = (prop) => {
    return(
        <Button variant="outlined" style={ButtonStyle}>{prop.title}</Button>
    )
}

const ButtonStyle = {
    color: 'white',
    width: '80%',
    margin: 12,
    borderColor: 'white'
}


export default Action;