
import { TextField,Stack,Box} from '@mui/material';
import Button from '@mui/material/Button';
import  Container from '@mui/material/Container';
const Register =() => {
  return (
   
    <div className='Register' >
    <Box sx={{ display: 'flex',flexDirection: 'column'  }}>
      <h1>Register YourSelf</h1>
      <Stack
  direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={2}
>
      <TextField  label="enter name" 
      variant='outlined'/>
      <TextField label="enter email"
      variant='outlined' />
      <TextField label="create Password"
      variant='outlined'
      type='password' />
        <TextField label="confirm Password"
      variant='outlined'
      type='password'/>
      <Button variant="outlined" color="error">Register</Button>
     <Container fixed style={{background:'skyblue'}}  />
     </Stack>
     </Box>
    </div>
   
  );
}

export default Register;
