import React from 'react'
import {ThumbUpAltOutlined, ChatOutlined, ShareOutlined, SendOutlined} from '@mui/icons-material'
import {Avatar} from '@mui/material'
import InputOption from './InputOption'
import './Post.css'
const Post = ({name, description, message}) => {
  return (
    <div className='post'>
        <div className='post__header'>
            <Avatar/>
            <div className='post__info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className='post__body'>
            <p>{message}</p>
        </div>
        <div className='post__buttons'>
            <InputOption Icon={ThumbUpAltOutlined} title="like" color="gray"/>
            <InputOption Icon={ChatOutlined} title="comment" color="gray"/>
            <InputOption Icon={ShareOutlined} title="share" color="gray"/>
            <InputOption Icon={SendOutlined} title="send" color="gray"/>
        </div>
    </div>
  )
}

export default Post