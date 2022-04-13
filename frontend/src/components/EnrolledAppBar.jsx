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
import CourseNav from './CourseNav';
import Navigation from './navigation';




const EnrolledAppBar = (props) => {
  
  return (
    <AppBar style={{backgroundColor: '#003b5c',textAlign: 'center'}}>
      <Container  style={{display: 'flex', flexDirection: 'row',textAlign: 'center'}}>
          <CourseNav modal ={props.modal} user={props.user}/>
          <Typography variant="h3" style={{padding:'5px',marginLeft:'200px'}}>{props.title}</Typography>
      </Container>
    </AppBar>
  );
};
export default EnrolledAppBar;
