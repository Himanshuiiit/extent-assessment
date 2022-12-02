import React from 'react'
import "../index.css";
import Logo from './Logo';
import Menu from './Menu';
import Spinner from './Spinner';

const SideBar = () => {
  return (
    <div className='side-bar'>
        <Logo/>
        <Menu/>
        <Spinner/>
    </div>
  )
}

export default SideBar