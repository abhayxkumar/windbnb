import React, {Component} from 'react';
import logo from '../images/logo.svg'
import './Styles/Header.css'
import SearchModal from './SearchModal.js'

class Header extends Component {

  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className='header-div'>
        <a href="/">
          <img src={logo} className="App-logo" alt="logo" />
        </a>


        <div className='search-div'>
        <SearchModal show={this.state.show} handleClose={this.hideModal}>
          <p>Search Modal</p>
        </SearchModal>
            <input className='location-input' type="search" placeholder='Add Location' onClick={this.showModal}></input>
            <div className='divider'></div>
            <input className='guest-input' type="search" placeholder='Add Guests' onClick={this.showModal}></input>
            <div className='divider'></div>
           <button className='search-btn material-icons' onClick={this.showModal}>search</button>

        </div>
      </div>
    )
  }
}

export default Header;