import React from 'react'
import {CalendarViewDay, EventNote, Subscriptions, Image, Create} from '@mui/icons-material'
import InputOption from './InputOption'
import './Feed.css'

const Feed  = () => {
  return (
    <div className='feed'>
        <div className='feedInput__container'>
            <div className='feed__input'>
                <Create/>
                <form>
                    <input type='text'/>
                    <button type='submit'>send</button>
                </form>
            </div>
            <div className='feed__inputOptions'>
                <InputOption Icon={Image} title='photo' color='#70B5F9'/>
                <InputOption Icon={Subscriptions} title='video' color='#E7A33E'/>
                <InputOption Icon={EventNote} title='event' color='#COCBCD'/>
                <InputOption Icon={CalendarViewDay} title='Write Article' color='#7C15E'/>
               
            </div>
        </div>
    </div>
);
}
export default Feed