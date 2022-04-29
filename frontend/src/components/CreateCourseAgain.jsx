import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Firstpanel from './Firstpanel';
import SecondPanel from './SecondPanel';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ paddingTop: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CreateCourse() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handletab = (event,num)=>{
    setValue(num);
  }

  return (
    <Box sx={{ width: '100%' }}>
      {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }} style={{width: '100%',position:"fixed"}}>
        <div >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" style={{ margin:"auto"}} >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          
        </Tabs>
        </div>
      </Box> */}
      <TabPanel value={value} index={0}>
        <Firstpanel handletab={handletab} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SecondPanel handletab={handletab} courseName="course Name"/>
      </TabPanel>
      
    </Box>
  );
}