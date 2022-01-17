import logo from './images/ptoma-logo.png';
import './styles/Header.css';

const Header = () => {
  return (
    <div className='main'>
      <div className='header__main-container'>
        <img src={logo} alt='' className='header' />
      </div>
    </div>
  );
};

export default Header;
