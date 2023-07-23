import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const LogoTag = () => {
  const containerStyle = {
    position: 'absolute',
    top: '41px',
    right: '4%',
  };

  return (
    <Box style={containerStyle}>
      <Image src={'/imgs/logo1.png'} width={100} height={100} alt='Mazadak' title='Mazadak Logo' style={{width:'50px', height:'35px'}} />
    </Box>
  );
};

export default LogoTag;