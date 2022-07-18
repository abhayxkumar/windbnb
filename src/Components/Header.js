import logo from '../images/logo.svg'
import './Styles/Header.css'

const Header = ({onClickMod}) => {
  return (
    <div className='header-div'>
      <a href="/">
        <img src={logo} className="App-logo" alt="logo" />
      </a>
      

      <div className='search-div'>
          <input className='location-input' type="search" placeholder='Add Location' onClick={onClickMod}></input>
          <div className='divider'></div>
          <input className='guest-input' type="search" placeholder='Add Guests' onClick={onClickMod}></input>
          <div className='divider'></div>
         <button className='search-btn material-icons' onClick={onClickMod}>search</button>
          
      </div>
    </div>
  )
}

export default Header;