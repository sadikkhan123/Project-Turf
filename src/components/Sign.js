import { TextField,Stack,Box} from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const Sign=()=> {
  return (
   
    <div className='Signin' >
      <>
    <Box sx={{ display: 'flex',flexDirection: 'column'  }}>
      <h1>Sign in</h1>
      <Stack
  direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={2}
  width='100%'
  
>
      <TextField  label="enter name" 
      variant='outlined'/>
      <TextField label="enter Password"
      variant='outlined'
      type='password' />
        <TextField label="forgot Password"/>
    <Link to= "/Home">
     <Button variant="outlined" color="error" >
        Submit</Button></Link>
     </Stack>
     </Box>
     </>
    </div>
    
   
  );
}

export default Sign;
