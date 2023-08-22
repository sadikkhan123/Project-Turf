import React from 'react';
import { Route,  Routes } from 'react-router-dom'; // Updated import statements
import Register from "./components/Register"
import Sign from "./components/Sign"
import Orders from "./components/Orders"
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import CreateTurf from './components/CreateTurf';
import MyTurf from './components/MyTurf';
import BookTurf from './components/BookTurf';
// import { Home } from '@mui/icons-material';
import Singleturf from './components/Singleturf';
 
function App() {
  return (
    <div className='App'>
     <Header/>
        <Routes> 
          <Route path="/Home" exact element={<Home />} />
          <Route path="/Orders" exact element={<Orders/>} />
          <Route path="/About" exact element={<About />} />
          <Route path="/Contact" exact element={<Contact/>} />
          <Route path="/CreateTurf" exact element={<CreateTurf/>} />
          <Route path="/MyTurf" exact element={<MyTurf />} />
          <Route path="/seeTurf" exact element={<seeTurf />} />
          <Route path="/BookTurf" element={<BookTurf/>} />
          <Route path="/" element={<Sign />} />
          <Route path="/SingleTurf/:id" element={<Singleturf/>} />
         
        </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;

