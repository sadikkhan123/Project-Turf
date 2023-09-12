import React, { useState } from "react";
// import Header from './app/containers/dashboard/header';
import { Route, Router, Routes } from "react-router-dom";
import Sign from "./app/containers/onboarding/auth/sign";
import Register from "./app/containers/onboarding/register/register";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "./reducers/userSlice";
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
import Header from "./app/components/header/header";
function App() {
  const a = useSelector(selectUser);
  console.log(a);

  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Home",
      element: <Home />,
    },
    {
      path: "/Orders",
      element: <Orders />,
    },
    {
      path: "/About",
      element: <About />,
    },
    {
      path: "/Contact",
      element: <Contact />,
    },
    {
      path: "/CreateTurf",
      element: <CreateTurf />,
    },
    {
      path: "/MyTurf",
      element: <MyTurf />,
    },
    {
      path: "/seeTurf",
      element: <seeTurf />,
    },
    {
      path: "/BookTurf",
      element: <BookTurf />,
    },
    {
      path: "/CreateAdmin",
      element: <CreateAdmin />,
    },
    {
      path: "/ViewAdmin",
      element: <ViewAdmin />,
    },
    {
      path: "/SingleTurf/:id",
      element: <Singleturf />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ];

  // setOpen={...open}
  return (
    <div className="App">
      {/* <Loder/> */}
      {/* <Box sx={{ display: 'flex' }}>
      <CircularProgress color="success" />
    </Box> */}
      {/* <Header/>
      <Routes> */}
      {a?.logged ? (
        <>
          <Header />
          <Routes>
            {routes.map((route) => (
              <Route path={route.path} exact element={route.element} />
            ))}
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
