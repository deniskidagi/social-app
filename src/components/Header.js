import { Home, Search, Notifications, SupervisorAccount, BusinessCenter } from '@mui/icons-material'
import React from 'react'
import HeaderOption from './HeaderOption'
import './Header.css'
import logo from '../images/background.jpg'
const Header = () => {
  return (
    <div className='header'>
        <div className='header__left'>
            <img src={logo} alt="logo"/>
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
            <HeaderOption avatar="" title="me"/>
       </div>
       </div>
  )
}

export default Header