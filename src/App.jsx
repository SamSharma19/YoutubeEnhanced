import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import { Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home/Home.jsx';
import Video from '../src/Pages/Video/Video.jsx';

const App = () => {

  //for sidebar functionality
  const [Sideview, setSideview] = useState(true);


  return (
    <div>
       <Navbar setSideview = {setSideview}/>
       <Routes>
          <Route path = '/' element = {<Home Sideview={Sideview}/>} />
          <Route path = '/video/:categoryId/:videoId' element={<Video />} />
       </Routes>
    </div>
  );
}

export default App