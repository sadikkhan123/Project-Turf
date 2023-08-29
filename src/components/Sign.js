import { TextField, Stack, Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/UserSlice';
import { useNavigate } from 'react-router-dom';


const Sign = () => {
  const [valid, setValid] = useState(false);
  const [name, setName] = useState('')
  const [Password, setPassword] = useState('')

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    if (true) {
      dispatch(login.login({
        name: name,
        Password: Password,
        logged: true
      }))
      // navigate('/Home')


    }

  }
 const validate =()=>{
  if (name.trim().length ===0&&Password.trim().length ===0) {
    alert("pls fill valid details")
    
  }else{
    navigate('/Home')
  }
  
 }
 const handleValidation = (e) => {
  setName(e.target.value);
  setPassword(e.target.value);
 
  setValid(reg.test(e.target.value));
};
const reg = new RegExp("[a-z,A-Z,0-9,]");
  return (
    <>
      <div className='Signin' >



        <form onSubmit={(e)=>{
          handleSubmit(e);
        
        }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }} >
            <Typography variant='h4' align='center'>Sign In</Typography>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              width='100%'

            >
              <TextField label="enter name (required)" error={reg?!valid:valid}
                variant='outlined' value={name} onChange={(e) =>handleValidation(e)}    required={true}/>
              <TextField label="enter Password (required)"
                variant='outlined'error={reg?!valid:valid}
                type='password' value={Password} onChange={(e) => handleValidation(e)}   required={true} />
              {/* <TextField label="Confirm Password" /> */}

              <Button variant="contained" type='submit'>Sign in</Button>
            </Stack>
          </Box>
        </form>

      </div>
    </>

  );
}

export default Sign;
