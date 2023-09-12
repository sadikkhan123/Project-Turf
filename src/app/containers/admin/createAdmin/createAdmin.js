import { TextField, Stack, Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
const CreateAdmin = () => {
  return (
    <div className="Register">
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h4" align="center">
          Create Admin
        </Typography>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <TextField label="Admin's ID" variant="outlined" required />
          <TextField label="Turf Name" variant="outlined" required />
          <TextField label="Location" variant="outlined" required />
          <TextField label="Contact" variant="outlined" required />
          <TextField label="Total Turf" variant="outlined" required />
          <Button variant="contained">Create</Button>
          <Container fixed style={{ background: "skyblue" }} />
        </Stack>
      </Box>
    </div>
  );
};

export default CreateAdmin;
