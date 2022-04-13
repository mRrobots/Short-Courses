import React from 'react';
import logo from './assets/logo.png';

function Logo() {
  return (
    <img
        style={{width: '300px', height: '200px',marginLeft: 'auto',marginRight: 'auto',marginTop: '20px'}}
        src={logo}
    />
  )
}

export default Logo