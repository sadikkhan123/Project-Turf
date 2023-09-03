import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
//import Button from '@mui/material/Button';
const ViewAdmins= () => {
  return (
    <>
    
    <div className='' >
     <Typography variant='h5' align='center'> Admins Table</Typography>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Admin Name</TableCell>
            <TableCell align="right">Turf Name</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Contact Number</TableCell>
           
           
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow
             
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                data
              </TableCell>
              <TableCell align="right">data</TableCell>
              <TableCell align="right">data</TableCell>
              <TableCell align="right">data</TableCell>
              

            </TableRow>
   
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>



  )
}

export default ViewAdmins
