import React from 'react';
import Home from './home';
import {useParams,useLocation} from 'react-router-dom';

function Explore() {
  const { state } = useLocation();
  console.log(state.user.name + ' expolor')
  return (
    <div>
        <Home user={state.user}/>
    </div>
  )
}

export default Explore