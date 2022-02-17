import { Avatar, Icon } from '@mui/material'
import React from 'react'
import './HeaderOption.css'
const headerOption = ({avatar, Icon, title}) => {
  return (
    <div>
        {Icon && <Icon className='headerOption__icon'/>}
        {avatar && <Avatar className='headerOption__icon' src={avatar}/>}
        <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default headerOption