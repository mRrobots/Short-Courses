import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];



const CourseAppBar = (props) => {
  
  return (
    <AppBar position="fixed" style={{backgroundColor: '#003b5c'}}>
      <Container  style={{textAlign: "center",justifyContent: "center"}}>
        
        <Typography variant="h3" style={{padding:'5px'}}>{props.CourseName}</Typography>
      </Container>
    </AppBar>
  );
};
export default CourseAppBar;
