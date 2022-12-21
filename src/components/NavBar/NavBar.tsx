import React from 'react';
import {Logo} from '../shared/Logo';
import HomeIcon from '../../assets/icons/ic_home.svg';

export const NavBar = () => {
  return (
    <nav className='navApp'>
      <Logo />
      
      <div className='navItemsMovile'>
        <a href='#'>
          <img src={HomeIcon} alt="Home Icon"/>
        </a>
      </div>
      <div className='navItems'>
        
      </div>
    </nav>
  )
}
