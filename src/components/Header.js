import React, { PropTypes } from 'react';
import SocialBar from './SocialBar';
import '../css/header.css';

const Header = ({active}) => {
  return (
    <nav className='navbar navbar-inverse'>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <a className='navbar-brand' href='/'>ACM SIGAPP</a>
        </div>
        <div className='collapse navbar-collapse' id='myNavbar'>
          <ul className='nav navbar-nav'>
            <li className={(active == 'home') ? 'active' : ''}><a href='/'>Home</a></li>
            <li className={(active == 'tutorials') ? 'active' : ''}><a href='/tutorials'>Tutorials</a></li>
          </ul>
          <SocialBar />        
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  active: PropTypes.string.isRequired,
}

export default Header;
