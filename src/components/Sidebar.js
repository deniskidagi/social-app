import React from 'react'
import './Sidebar.css'
import {Avatar} from '@mui/material'
import background from '../images/background.jpg'
const Sidebar = () => {
    const recentItem = (topic) => (
        <div className='sideBar__recentItem'>
            <span className='sideBar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )
  return (
        <div className='sideBar'>
            <div className='sideBar__top'>
                <img src={background} alt='background'/>
                <Avatar className='sideBar__avatar'/>
                <h2>denis kidagi</h2>
                <h4>deniskidagi@gmail.com</h4>
            </div>
            <div className='sideBar__stats'>
                <div className='sideBar__stat'>
                    <p>Who viwed you</p>
                    <p className='sideBar__statNumber'>4,5555</p>
                </div>
                <div className='sideBar__stat'>
                    <p>views on post</p>
                    <p className='sideBar__statNumber'>6000</p>
                </div>
            </div>
            <div className='sideBar__bottom'>
                <p>recent</p>
                {recentItem("ReactJs")}
                {recentItem("Programming")}
                {recentItem("Developer")}
                {recentItem("Javascript")}
                {recentItem("Design")}
            </div>
        </div>
  )
}

export default Sidebar

