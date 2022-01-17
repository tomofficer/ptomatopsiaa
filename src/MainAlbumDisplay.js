import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import parturition from './images/parturition.jpeg';
import './styles/MainAlbumDisplay.css';

const MainAlbumDisplay = () => {
  //state variables
  const [showParturition, setShowParturition] = useState(false);
  const [hideMainDisplay, setHideMainDisplay] = useState(true);

  //click handlers
  const parturitionClick = () => {};

  const mainDisplayClick = () => {
    setHideMainDisplay(!hideMainDisplay);
  };

  return (
    <div className='mainalbumdisplay__main-container'>
      <img
        src={parturition}
        alt=''
        onClick={parturitionClick}
        className='app__cover-image'
      />
      <Link to='/parturition' onClick={mainDisplayClick}>
        CLICK ME
      </Link>
    </div>
  );
};

export default MainAlbumDisplay;
