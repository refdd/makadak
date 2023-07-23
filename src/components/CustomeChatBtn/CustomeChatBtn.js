import React from 'react'

import  Button from '@mui/material/Button';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

const CustomeChatBtn = ({bgColor}) => {
    

  const roundedCircleStyle = {
     bottom: '4%',
    left: '80%',
    width: '58px',
    height: '58px',
    backgroundColor: 'transparent',
    borderRadius: '50%',
    border: '2px solid #00F0A9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:bgColor ? bgColor : ''
   };

  return (
    <Button sx={roundedCircleStyle}>
    <ChatOutlinedIcon sx={{color:'#00F0A9'}}/>
   </Button>
  )
}

export default CustomeChatBtn