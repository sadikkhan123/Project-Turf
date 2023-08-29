import React, { useState } from 'react';
import Header from './components/Header';
import { Route, Router, Routes } from 'react-router-dom';
import Sign from './components/Sign';
import Register from './components/Register';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from './features/UserSlice';
function App() {

  const a = useSelector(selectUser)
  console.log(a)
  // setOpen={...open}
  return (
    <div className='App'>
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

