import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Parturition from './Parturition';
import parturition from './images/parturition.jpeg';

function App() {
  //state variables
  const [showParturition, setShowParturition] = useState(false);

  //click handlers
  const parturitionClick = () => {
    setShowParturition(!showParturition);
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <img src={parturition} alt='' onClick={parturitionClick} />
        {showParturition && <Parturition />}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
