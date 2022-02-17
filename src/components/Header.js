import { Home, Search, Notifications, SupervisorAccount, BusinessCenter } from '@mui/icons-material'
import React from 'react'
import HeaderOption from './HeaderOption'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className='header__left'>
            <img alt="logo"/>
            <div className='header__search'>
                <Search/>
                <input type="text"/>
            </div>
        </div>
        <div className='header__right'>
            <HeaderOption Icon={Home} title="Home"/>
            <HeaderOption Icon={SupervisorAccount} title="my network"/>
            <HeaderOption Icon={BusinessCenter} title="jobs"/>
            <HeaderOption Icon={Notifications} title="Notifications"/>
            <HeaderOption avatar="https://pbs.twimg.com/profile_images/1020939891457241088/fcbu814K_400x400.jpg" title="me"/>
       </div>
       </div>
  )
}

export default Header