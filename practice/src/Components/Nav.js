import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import './NavBar.css';

function NavBar() {
  return (
    <>
      <nav className='navbar'>
        <div className='left-nav'>
          <img src='IMeUsWe-logo-file.png' alt='Company Logo' className='nav-logo' />
        </div>
        <div className='right-nav'>
          <div className='search-container'>
            <fieldset className='search-fieldset'>
              <legend className='search-legend'>Discover your family</legend>
              <input type='text' id='search' name='search' className='search-input'/>
              <span className='search-icon'>
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </fieldset>
          </div>
          <button className='icon'>
            <FontAwesomeIcon icon={faBell} />
          </button>
          <span className='icon'>
            <FontAwesomeIcon icon={faUserCircle} />
          </span>
        </div>
      </nav>
      <hr />
    </>
  );
}

export default NavBar;

