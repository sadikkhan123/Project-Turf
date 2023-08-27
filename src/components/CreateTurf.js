
import { TextField, Stack, Box, Typography, Checkbox } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
const CreateTurf = () => {
  return (
    <>

      <div className='Register' >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h5' align='center'>
            Create My Turf
          </Typography>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <TextField label="Admin Name"
              variant='outlined'required />
            <TextField label="Turf Name"
              variant='outlined' required/>
            <TextField label="Location"
              variant='outlined' required/>
              <TextField label="Contact Number"
              variant='outlined' required/>
            
              <TextField label="Price per hours"
              variant='outlined' required/>
              
            <TextField label="description"
              variant='outlined'
              type='text' />
            <Button variant="contained">Create</Button>
            <Container fixed style={{ background: 'skyblue' }} />
          </Stack>
        </Box>
      </div>
    </>
  );
}

export default CreateTurf;
