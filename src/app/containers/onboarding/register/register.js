
import { TextField,Stack,Box, Typography} from '@mui/material';
import Button from '@mui/material/Button';
import  Container from '@mui/material/Container';
const Register =() => {
  return (
   
    <div className='Register' >
    <Box sx={{ display: 'flex',flexDirection: 'column'  }}>
      <Typography variant='h4' align='center'>SingUp</Typography>
      <Stack
  direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={2}
>
      <TextField  label="enter name" 
      variant='outlined' required/>
      <TextField label="enter email"
      variant='outlined' required />
      <TextField label="create Password"
      variant='outlined'
      type='password'  required/>
        <TextField label="confirm Password"
      variant='outlined'
      type='password' required/>
      <Button variant="contained">SingUp</Button>
     <Container fixed style={{background:'skyblue'}}  />
     </Stack>
     </Box>
    </div>
   
  );
}

export default Register;
