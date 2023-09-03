import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loder = () => {
  return (
   <div  sx={{ display: 'flex',width: '75%', height:'100vh', zIndex: 10}}>
    <Box sx={{justifyContent: 'center',width: '75%', height:'100vh'  }}>
    <CircularProgress  color="success" />
  </Box>
  </div>
  )
}

export default Loder