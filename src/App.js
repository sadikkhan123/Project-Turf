import React, { useState } from 'react';
import Header from './app/containers/dashboard/header';
import { Route, Router, Routes } from 'react-router-dom';
import Sign from './app/containers/onboarding/auth/sign';
import Register from './app/containers/onboarding/register/register';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from './reducers/UserSlice';

function App() {

  const a = useSelector(selectUser)
  console.log(a)

  
  // setOpen={...open}
  return (
    <div className='App'>
      {/* <Loder/> */}
        {/* <Box sx={{ display: 'flex' }}>
      <CircularProgress color="success" />
    </Box> */}
      <Routes>
        {a?.logged ? (
          <Route path="*" element={<Header />} />
        ) : (
          <>
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Sign />} /></>
        )}
      </Routes>


      {/* <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Sign />} />
        <Route path="*" element={<Header />} />
      </Routes> */}


    </div>
  );
}

export default App;

