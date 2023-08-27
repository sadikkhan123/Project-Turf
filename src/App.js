import React, { useState } from 'react';
import Header from './components/Header';
import { Route, Router, Routes } from 'react-router-dom';
import Sign from './components/Sign';
import Register from './components/Register';
function App() {
  const [open, setOpen] = useState();
  // setOpen={...open}
  return (
    <div className='App'>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Sign />} />
        <Route path="*" element={<Header />} />
        

      </Routes>
    </div>
  );
}

export default App;

