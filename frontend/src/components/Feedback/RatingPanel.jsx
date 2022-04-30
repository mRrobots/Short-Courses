import * as React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon />,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon />,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon />,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon />,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon />,
      label: 'Very Satisfied',
    },
  };
  
  function IconContainer(props) {
    const { value, ...other } = props;
    
    return <span {...other}>{customIcons[value].icon}</span>;
  }
  
  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,

  };

const RatingPanel = ()=>{
    const [rate, setRate] = useState(3);

    const onClick = ()=>{
        
        console.log(rate);
    }
    return(
        <div style = {MainStyle}>
          <Rating
            name="highlight-selected-only"
            defaultValue={3}
            IconContainerComponent={IconContainer}
            highlightSelectedOnly
            onChange={(event, newValue) => {
            setRate(newValue);
          }}
        onClick = {onClick}
      />
        </div>
        
    )
}

const MainStyle ={
  display: 'flex',
  justifyContent: 'center',
  margin: 12
}

export default RatingPanel;