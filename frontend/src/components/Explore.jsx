import React from 'react';
import Home from './home';
import {useParams,useLocation} from 'react-router-dom';

function Explore() {
  const { state } = useLocation();
  console.log(state.user.name + ' ex')
  return (
    <div>
        <Home user={state.user}/>
    </div>
  )
}

export default Explore