import React from 'react';
import './style.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='width'>
        <h1>BioDev</h1>
        <ul>
          <li><a href='#cards'>cards</a></li>
          <li><a href='#slides'>slide</a></li>
          <li><a href='#newsletter'>newsletter</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header