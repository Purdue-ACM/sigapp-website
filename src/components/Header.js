import React from 'react';
import SocialBar from './SocialBar';

const Header = (props) => {
  return (
    <nav className='navbar navbar-inverse'>
      <div className='container-fluid'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <a className='navbar-brand' href='#'>ACM SIGAPP</a>
        </div>
        <div className='collapse navbar-collapse' id='myNavbar'>
          <ul className='nav navbar-nav'>
            <li className='active'><a href='#'>Home</a></li>
          </ul>
          <SocialBar />        
        </div>
      </div>
    </nav>
  )
}
export default Header;
