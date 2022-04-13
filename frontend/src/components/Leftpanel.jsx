import React from 'react'
import Box, { Typography } from "@mui/material";
import Logo from './Logo';

const Leftpanel = () => {
  return (
    <div style={{backgroundColor: '#ffffff',width: '35%',height: '100%',display: 'flex',flexDirection: 'column'}}>
        
        <Logo />
       
        
        <div style={{marginTop: '170px',marginLeft: '40px'}}>
            <Typography variant="subtitle1" style={{color:'#d9c93b'}}>
                ADDRESS
            </Typography>

            <Typography variant="subtitle1">
                Wits Medical School Administration <br/>
                7 York Road, Parktown <br/>
                Johannesburg, 2193
            </Typography>

            <Typography variant="subtitle1" style={{color:'#d9c93b'}}>
                TELEPHONE
            </Typography>
            <Typography variant="subtitle1">
                011 717 2051
            </Typography>
        </div>
       

        
        
    </div>
  )
}

export default Leftpanel