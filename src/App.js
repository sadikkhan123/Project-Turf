import React, { useState } from 'react';
// import Header from './app/containers/dashboard/header';
import { Route, Router, Routes } from 'react-router-dom';
import Sign from './app/containers/onboarding/auth/sign';
import Register from './app/containers/onboarding/register/register';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from './reducers/UserSlice';
import Error from "./app/containers/static/error/error";
import Orders from "./app/containers/orders/orders";
import Home from "./app/containers/dashboard/home/home";
// import Footer from "./app/components/footer";
import About from "./app/containers/static/about/about";
import Contact from "./app/containers/static/contact/contact";
import CreateTurf from "./app/containers/turf/createturf/createTurf";
import MyTurf from "./app/containers/turf/myTurf/MyTurf";
import BookTurf from "./app/containers/turf/bookturf/bookTurf";
// import { Home } from '@mui/icons-material';
import Singleturf from "./app/containers/turf/singleturf/singleturf";
import CreateAdmin from "./app/containers/admin/createAdmin/createAdmin";
import ViewAdmin from "./app/containers/admin/viewAdmin/viewAdmin";
import Header from './app/components/header/header';
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
      {/* <Header/>
      <Routes> */}
        {a?.logged ? (<>
          <Header/>
      <Routes>
          {/* // <Route path="*" element={<Header />} /> */}
          <Route path="/" exact element={<Home />} />
          <Route path="/Home" exact element={<Home />} />
          <Route path="/Orders" exact element={<Orders />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/Contact" exact element={<Contact />} />
          <Route path="/CreateTurf" exact element={<CreateTurf />} />
          <Route path="/MyTurf" exact element={<MyTurf />} />
          <Route path="/seeTurf" exact element={<seeTurf />} />
          <Route path="/BookTurf" element={<BookTurf />} />
          <Route path="/CreateAdmin" element={<CreateAdmin />} />
          <Route path="/ViewAdmin" element={<ViewAdmin />} />
          <Route path="/SingleTurf/:id" element={<Singleturf />} />
          <Route path="*" element={<Error />} />
          </Routes>
          </>
        ) : (
          <>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Sign />} />
            </Routes>
            </>
        )}
      


      {/* <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Sign />} />
        <Route path="*" element={<Header />} />
      </Routes> */}


    </div>
  );
}

export default App;

