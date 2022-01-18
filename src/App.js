import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Parturition from './Parturition';
import MainAlbumDisplay from './MainAlbumDisplay';

function App() {
  //state variables

  //click handlers

  return (
    <div className='App'>
      <BrowserRouter>
        <div className='app__main-container'>
          <Header />
          <MainAlbumDisplay />
          <Routes>
            <Route path='/parturition' element={<Parturition />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

//add navigation to footer links
//git test
